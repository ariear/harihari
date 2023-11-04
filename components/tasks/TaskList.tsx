'use client'
import { DragDropContext } from '@hello-pangea/dnd';
import TaskColumn from './TaskColumn';
import { updateTaskPositionAction } from '@/app/_actions';
import { useEffect } from 'react';
import { useTaskStore } from '@/app/store/zustand';

type Task = {
    id: string;
    title: string;
    image_link?: string;
    sortAt: number;
};

type Column = {
    id: string;
    colorPoint: string;
    title: string;
    tasks: Task[];
};

export default function TaskList() {
    const {columnTask, fetchColumns, setColumnTask, isLoading, updatePositionTask} = useTaskStore()
    
    useEffect(() => {
        fetchColumns()
    }, [fetchColumns])

    const onDragEnd = async (result: any) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const startColumn = columnTask.find((column: any) => column.id === source.droppableId);
        const finishColumn = columnTask.find((column: any) => column.id === destination.droppableId);
        const draggedTask = startColumn.tasks.find((task: any) => task.id === draggableId);

        startColumn.tasks = startColumn.tasks.filter((task: any) => task.id !== draggableId);

        draggedTask.columnId = destination.droppableId;

        finishColumn.tasks.splice(destination.index, 0, draggedTask);

        setColumnTask([...columnTask]);

        await updatePositionTask()
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="lg:w-[90%] xl:w-[1250px] mx-auto py-4 px-3 sm:px-5 xl:px-2 flex justify-center xl:justify-between items-start flex-wrap">
                {
                    isLoading ? 'Loading...' :
                    columnTask.map((column: Column) => (
                        <TaskColumn key={column.id} column={column} tasks={column.tasks} />
                    ))
                }
            </div>
        </DragDropContext>
    )
}