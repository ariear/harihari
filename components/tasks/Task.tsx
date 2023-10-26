import Image from 'next/image';
import React from 'react';
import { Draggable } from '@hello-pangea/dnd';

type TaskProps = {
  task: {
    id: string;
    title: string;
    image_link?: string;
  },
  index: number
};

const Task: React.FC<TaskProps> = ({task, index}) => {
    return (
      <Draggable draggableId={task.id} index={index}>
        {provided => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className='bg-white border border-[#C7C7C7] rounded-xl mb-3 p-3 font-medium'>
            {task.image_link && <Image src={task.image_link} alt='image' width={350} height={250} className='w-full rounded-xl object-cover h-[140px] mb-2'  />}
            <p>{task.title}</p>
          </div>
        )}
      </Draggable>
    )
}

export default Task