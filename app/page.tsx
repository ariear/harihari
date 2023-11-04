import Navbar from "@/components/Navbar";
import TaskList from "@/components/tasks/TaskList";
import { NewTask } from "./client";
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <main className="font-poppins">
      <Navbar />
      <ToastContainer />
      <div className="pt-5 sm:pt-10">
        <p className="font-bold text-2xl text-center mb-4">Organize your daily work ✨</p>
        <TaskList />
      </div>
      <NewTask />
    </main>
  )
}