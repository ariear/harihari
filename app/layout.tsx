import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
})

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
    <html lang="en" className={`${poppins.variable}`}>
      <body className='bg-[#F5F8FD]'>{children}</body>
    </html>
  )
}
