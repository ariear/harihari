import { getColumnAndTaskByUserId } from "../lib/tasks";
import TaskListClient from "./TaskListClient";

export default async function TaskList() {
    const {columns} = await getColumnAndTaskByUserId()
    
    return (
        <div>
            <TaskListClient columns={columns} />
        </div>
    )
}