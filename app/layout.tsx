import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// https://clerk.com/docs/quickstarts/nextjs?_gl=1*gxgrv*_gcl_au*MTQxMDExMjM0Ny4xNzAwMDc3NTk5
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Genius',
  description: 'AI Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
