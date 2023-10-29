import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import Task from './Task';

type Column = {
    id: string;
    colorPoint: string;
    title: string;
    tasks: object[];
};

type Task = {
    id: string;
    title: string;
    image_link?: string;
    sortAt: number;
};

type TaskColumnProps = {
    column: Column;
    tasks: Task[];
};

const TaskColumn: React.FC<TaskColumnProps> = ({ column, tasks }) => {
    return (
        <div className='bg-white p-3 rounded-xl border shadow-md w-[380px] transition-transform m-2 xl:m-0'>
            <div className='flex items-center mb-4'>
                <div className='w-6 h-6 rounded-lg mr-3' style={{ backgroundColor: column.colorPoint }}></div>
                <p className='font-semibold'>{column.title}</p>
            </div>
            <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className={`${snapshot.isDraggingOver ? 'bg-gray-200' : 'bg-transparent'} transition-colors duration-300 rounded-xl`}>
                        {tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default TaskColumn