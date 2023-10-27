'use client'
import { useState } from "react"
import { DragDropContext } from '@hello-pangea/dnd';
import initialData from "../data/initial-data"
import TaskColumn from './TaskColumn'

type Column = {
  id: string;
  colorPoint: string;
  title: string;
  taskIds: string[];
};

type Task = {
  id: string;
  title: string;
  image_link?: string;
};

type InitialData = {
  columns: { [key: string]: Column };
  tasks: { [key: string]: Task };
  columnOrder: string[];
};

export default function TaskList() {
  const [columnTask, setColumnTask] = useState<InitialData>(initialData)

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = columnTask.columns[source.droppableId];
    const finish = columnTask.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...columnTask,
        columns: {
          ...columnTask.columns,
          [newColumn.id]: newColumn,
        },
      };

      setColumnTask(newState)
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...columnTask,
      columns: {
        ...columnTask.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setColumnTask(newState)
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="lg:w-[90%] xl:w-[1250px] mx-auto py-4 px-3 sm:px-5 xl:px-2 flex justify-center xl:justify-between items-start flex-wrap">
        {
          columnTask.columnOrder.map(columnId => {
            const column = columnTask.columns[columnId];
            const tasks = column.taskIds.map((taskId: string | number) => columnTask.tasks[taskId]);

            return <TaskColumn key={column.id} column={column} tasks={tasks} />;
          })
        }
      </div>
    </DragDropContext>
  )
}