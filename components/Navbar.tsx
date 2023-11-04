'use client'
import Image from "next/image";
import Link from "next/link";
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Navbar() {
    const router = useRouter()
    const { data: session } = useSession()

    return (
        <nav className="lg:w-[90%] xl:w-[1250px] flex items-center justify-between mx-auto py-4 px-3 sm:px-5 xl:px-2">
            <Link href="/" className="block font-bold text-2xl">日々</Link>
            <div className="flex items-center">
                <p className="sm:mr-8 font-medium mr-4 flex items-center">Hello, {session?.user?.name || <span className="ml-2 w-10 h-3 bg-gray-300 rounded-full animate-pulse"></span>}</p>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button>
                            {
                                session?.user?.image ?
                                    <Image src={session?.user?.image} alt="pp" className="rounded-full border border-gray-500" width={42} height={42} />
                                    :
                                    <div className="w-[42px] h-[42px] rounded-full bg-gray-300 animate-pulse"></div>
                            }
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
                                    <button onClick={async () => {
                                        await signOut({ redirect: false })
                                        router.replace('/login')
                                    }}>
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