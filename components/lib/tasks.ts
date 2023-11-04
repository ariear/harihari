import { getServerSession } from "next-auth"
import { prisma } from "./prisma"
import { authOptions } from "@/app/api/auth/authOptions"

type updatedDataTask = {
  id: string,
  sortAt: number,
  columnId: string,
  createdById: string
}

type createDataTask = {
  id: string,
  title: string,
  image_link: string,
  sortAt: number,
  columnId: string,
  createdById: string
}

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
            //@ts-ignore
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

export async function updateTaskPosition(updatedData: updatedDataTask) {
  const { id, sortAt, columnId, createdById } = updatedData
  try {
    await prisma.task.update({
      where: {
        id,
        createdById
      },
      data: {
        sortAt,
        columnId
      }
    })
  } catch (error) {
    return { error }
  }
}

export async function createTask(data: createDataTask) {
  const {id, title, image_link, sortAt, columnId, createdById} = data
  try {
    await prisma.task.create({
      data: {
        id,
        title,
        image_link,
        sortAt,
        columnId,
        createdById,
      }
    })
  } catch (error) {
    return { error }
  }
}

export async function deleteTask(taskId: string) {
  try {
    await prisma.task.delete({
      where: {
        id: taskId
      }
    })
  } catch (error) {
    return {error}
  }
}