'use client'
import Image from "next/image";
import Link from "next/link";
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Navbar() {
    return (
        <nav className="container flex items-center justify-between mx-auto py-6">
            <Link href="/" className="block font-bold text-2xl">日々</Link>
            <div className="flex items-center">
                <p className="mr-8">Hello, Arie</p>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button>
                            <Image src={'https://i.pinimg.com/736x/45/69/c9/4569c98459cf54904bbbba7c8b456dc7.jpg'} alt="pp" className="rounded-full border border-gray-500" width={45} height={45} />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="p-3">
                                <Menu.Item>
                                    <button>
                                        Profile
                                    </button>
                                </Menu.Item>
                            </div>
                            <div className="p-3">
                                <Menu.Item>
                                    <button>
                                        Logout
                                    </button>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </nav>
    )
}