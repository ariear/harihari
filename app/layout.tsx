'use client'
import { SessionProvider } from "next-auth/react"
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Hari Hari</title>
      </head>
      <SessionProvider>
        <body className='bg-[#F5F8FD]'>{children}</body>
      </SessionProvider>
    </html>
  )
}
