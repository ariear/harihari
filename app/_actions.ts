'use server'

import { createTask, deleteTask, getColumnAndTaskByUserId, updateTaskPosition } from "@/components/lib/tasks"

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

export async function getColumnAndTaskByUserIdAction() {
    return await getColumnAndTaskByUserId()
}

export async function updateTaskPositionAction(updatedData: updatedDataTask) {
    await updateTaskPosition(updatedData)
}

export async function createTaskAction(data: createDataTask) {
    await createTask(data)
}

export async function deleteTaskAction(taskId: string) {
    await deleteTask(taskId)
}