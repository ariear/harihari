'use client'
import { DragDropContext } from '@hello-pangea/dnd';
import TaskColumn from './TaskColumn';
import { updateTaskPositionAction } from '@/app/_actions';

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

export default function TaskListClient({ columns }: any) {
    const onDragEnd = async (result: any) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        await updateTaskPositionAction(source.droppableId, destination.droppableId, destination.index, draggableId)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="lg:w-[90%] xl:w-[1250px] mx-auto py-4 px-3 sm:px-5 xl:px-2 flex justify-center xl:justify-between items-start flex-wrap">
                {
                    columns.map((column: Column) => (
                        <TaskColumn key={column.id} column={column} tasks={column.tasks} />
                    ))
                }
            </div>
        </DragDropContext>
    )
}