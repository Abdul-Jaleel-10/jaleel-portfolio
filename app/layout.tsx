import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abdul Jaleel - Software Developer',
  description: 'Software Developer portfolio showcasing web development, AI integration, and real-world projects with clean, maintainable code',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark text-light antialiased`}>
        {children}
      </body>
    </html>
  )
} 