import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hari Hari',
  description: 'Sebuah aplikasi berbasis website yang berguna untuk anda yang ingin mengelola kegiatan sehari-hari agar lebih terstruktur',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#F5F8FD]'>{children}</body>
    </html>
  )
}
