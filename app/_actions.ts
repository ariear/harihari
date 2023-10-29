'use server'

import { updateTaskPosition } from "@/components/lib/tasks"
import { revalidatePath } from "next/cache"

export async function updateTaskPositionAction(sourceDroppableId: string, destinationDroppableId: string, destinationIndex: number, draggableId: string) {
    await updateTaskPosition(sourceDroppableId, destinationDroppableId, destinationIndex, draggableId)
    revalidatePath('/')
}