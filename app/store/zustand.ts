import { create } from "zustand";
import { createTaskAction, getColumnAndTaskByUserIdAction, updateTaskPositionAction } from "../_actions";

type State = {
    columnTask: any[];
    isLoading: boolean;
    fetchColumns: () => Promise<void>;
    updatePositionTask: () => Promise<void>;
    createTask: (data: createDataTask) => void;
    setColumnTask: (newData: any) => void;
};

type createDataTask = {
    id: string,
    title: string,
    image_link: string,
    sortAt: number,
    columnId: string,
    createdById: string
}

export const useTaskStore = create<State>((set, get) => ({
    columnTask: [],
    isLoading: true,
    fetchColumns: async () => {
        set({ isLoading: true })
        const { columns } = await getColumnAndTaskByUserIdAction()
        set({ columnTask: columns, isLoading: false })
    },
    setColumnTask: (newData: any) => set({ columnTask: newData }),
    createTask: async (data: createDataTask) => {
        await createTaskAction(data)
        await get().updatePositionTask()
    },
    updatePositionTask: async () => {
        const taskResults: any = []
        get().columnTask.forEach((column: any) => {
            taskResults.push(...column.tasks)
        });
        
        taskResults.forEach(async (task: any, index: number) => {
            const updatedData = {
                id: task.id,
                sortAt: index + 1,
                columnId: task.columnId,
                createdById: task.createdById
            }

            await updateTaskPositionAction(updatedData)
        });
    }
}))