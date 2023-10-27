'use client'

import { signIn } from 'next-auth/react'
import GoogleIcon from "@/public/icons/GoogleIcon";

export function SignIn() {
    return (
        <button onClick={() => signIn('google', { redirect: true, callbackUrl: '/' })} className="m-auto flex justify-center items-center bg-white py-3 px-8 rounded-xl shadow-md"><GoogleIcon /> <span className="ml-5 text-gray-600 font-medium">Continue with Google</span></button>
    )
}