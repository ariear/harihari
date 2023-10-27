'use client'

import NewTaskBtn from "@/components/new_tasks/NewTaskBtn";
import NewTaskModal from "@/components/new_tasks/NewTaskModal";
import { useState } from "react";

export function NewTask() {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <NewTaskBtn openModal={openModal} />
            <NewTaskModal isOpen={isOpen} closeModal={closeModal} />
        </>
    )
}