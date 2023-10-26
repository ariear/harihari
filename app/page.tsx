'use client'
import Navbar from "@/components/Navbar";
import NewTaskBtn from "@/components/new_tasks/NewTaskBtn";
import NewTaskModal from "@/components/new_tasks/NewTaskModal";
import TaskList from "@/components/tasks/TaskList";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <main className="font-poppins">
      <Navbar />
      <div className="pt-5 sm:pt-10">
        <p className="font-bold text-2xl text-center mb-4">Organize your daily work</p>
        <TaskList />
      </div>
      <NewTaskBtn openModal={openModal} />
      <NewTaskModal isOpen={isOpen} closeModal={closeModal} />
    </main>
  )
}