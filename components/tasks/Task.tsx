import Image from 'next/image';
import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { useTaskStore } from '@/app/store/zustand';

type TaskProps = {
  task: {
    id: string;
    title: string;
    image_link?: string;
    sortAt: number;
  },
  index: number
};

const Task: React.FC<TaskProps> = ({ task, index }) => {
  const { deleteTask } = useTaskStore()

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={`${snapshot.isDragging ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300 border border-[#C7C7C7] rounded-xl mb-3 p-3 font-medium overflow-hidden relative group`}>
          {task.image_link && <Image src={task.image_link} alt='image' width={350} height={250} className='w-full rounded-xl object-cover h-[140px] mb-2' />}
          <p className={`${snapshot.isDragging ? 'text-white' : 'text-black'} transition-colors duration-300`}>{task.title}</p>
          <button onClick={() => deleteTask(task.id)} className='absolute bg-red-400 text-white top-0 right-0 w-10 h-10 text-sm rounded-bl-lg opacity-0 group-hover:opacity-100 duration-200'>X</button>
        </div>
      )}
    </Draggable>
  )
}

export default Task