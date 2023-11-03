'use server'

import { updateTaskPosition } from "@/components/lib/tasks"

export async function updateTaskPositionAction(updatedData: object) {
    await updateTaskPosition(updatedData)
}