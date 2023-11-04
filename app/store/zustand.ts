import { create } from "zustand";
import { createTaskAction, deleteTaskAction, getColumnAndTaskByUserIdAction, updateTaskPositionAction } from "../_actions";
import { toast } from 'react-toastify';

type State = {
    columnTask: any[];
    isLoading: boolean;
    fetchColumns: () => Promise<void>;
    updatePositionTask: () => Promise<void>;
    createTask: (data: createDataTask) => void;
    setColumnTask: (newData: any) => void;
    deleteTask: (index: any) => void
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
    },
    deleteTask: async (taskId: any) => {
        const updatedData = get().columnTask.map(column => {
            const updatedTasks = column.tasks.filter((task: any) => task.id !== taskId);
            return { ...column, tasks: updatedTasks };
        });
        set({columnTask: updatedData})
        toast.success('Successfully deleted task 😊', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        await deleteTaskAction(taskId)
    }
}))