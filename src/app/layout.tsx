import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'


export const metadata: Metadata = {
  title: 'Lendsqr Dashboard',
  description: 'Lendsqr admin dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
