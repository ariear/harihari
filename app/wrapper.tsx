'use client'
import { SessionProvider } from "next-auth/react";
import 'react-toastify/dist/ReactToastify.css';

export default function Wrapper({ children }: any) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}