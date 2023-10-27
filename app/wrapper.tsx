'use client'
import { SessionProvider } from "next-auth/react";

export default function Wrapper({ children }: any) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}