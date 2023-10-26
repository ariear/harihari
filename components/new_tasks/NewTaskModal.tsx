import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function NewTaskModal({ isOpen, closeModal }: any) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10 font-poppins" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#F5F8FD] p-5 sm:p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                                >
                                    Create new task
                                </Dialog.Title>
                                <div className="mt-2">
                                    <div className='mb-3'>
                                        <label htmlFor="image_link" className='block text-sm mb-1 text-[#313131]'>Image link</label>
                                        <input type="text" id='image_link' className='border w-full px-3 py-2 rounded-xl' />
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor="task_title" className='block text-sm mb-1 text-[#313131]'>Task title</label>
                                        <input type="text" id='task_title' className='border w-full px-3 py-2 rounded-xl' />
                                    </div>
                                    <button className="w-full text-sm font-medium mx-auto text-white bg-black py-3 px-8 rounded-xl mt-2">Save</button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}