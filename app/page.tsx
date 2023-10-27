'use client'
import Navbar from "@/components/Navbar";
import NewTaskBtn from "@/components/new_tasks/NewTaskBtn";
import NewTaskModal from "@/components/new_tasks/NewTaskModal";
import TaskList from "@/components/tasks/TaskList";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { data: session } = useSession()
  
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <main className="font-poppins">
      <Navbar signOut={signOut} router={router} session={session} />
      <div className="pt-5 sm:pt-10">
        <p className="font-bold text-2xl text-center mb-4">Organize your daily work</p>
        <TaskList />
      </div>
      <NewTaskBtn openModal={openModal} />
      <NewTaskModal isOpen={isOpen} closeModal={closeModal} />
    </main>
  )
}