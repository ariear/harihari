import { getServerSession } from "next-auth"
import { prisma } from "./prisma"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

type updatedDataTask = {
  id: string,
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