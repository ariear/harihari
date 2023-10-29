import { getServerSession } from "next-auth"
import { prisma } from "./prisma"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function getColumnAndTaskByUserId() {
  try {
    const session = await getServerSession(authOptions)
    const columns = await prisma.column.findMany({
      include: {
        tasks: {
          orderBy: {
            sortAt: 'asc'
          },
          where: {
            createdById: session?.user?.id
          }
        }
      }
    })
    return { columns }
  } catch (error) {
    return { error }
  }
}

export async function updateTaskPosition(sourceDroppableId: string, destinationDroppableId: string, destinationIndex: number, draggableId: string) {
  try {
    await prisma.$transaction(async (transaction) => {
      const startColumn = await prisma.column.findUnique({
        where: { id: sourceDroppableId },
        include: { tasks: true },
      });

      const finishColumn = await prisma.column.findUnique({
        where: { id: destinationDroppableId },
        include: { tasks: true },
      });

      if (!startColumn || !finishColumn) {
        throw new Error('Column not found');
      }

      const taskToMove = startColumn.tasks.find((task) => task.id === draggableId);
      if (!taskToMove) {
        throw new Error('Task not found');
      }

      // Remove the task from the source column
      startColumn.tasks = startColumn.tasks.filter((task) => task.id !== draggableId);

      // Reorder the tasks in the destination column
      if (destinationDroppableId === sourceDroppableId) {
        // Moving within the same column
        finishColumn.tasks.splice(destinationIndex, 0, taskToMove);
      } else {
        // Moving to a different column
        finishColumn.tasks.splice(destinationIndex, 0, taskToMove);
      }

      // Update the database with the modified columns
      await prisma.column.update({
        where: { id: sourceDroppableId },
        data: { tasks: { set: startColumn.tasks.map((task) => ({ id: task.id })) } },
      });

      await prisma.column.update({
        where: { id: destinationDroppableId },
        data: { tasks: { set: finishColumn.tasks.map((task) => ({ id: task.id })) } },
      });
    });
  } catch (error) {
    return { error }
  }
}