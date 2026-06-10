import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WebGuys.242 | Web Design Agency in Nassau, Bahamas',
  description: 'Custom websites, e-commerce stores, business systems, and AI tools for businesses in the Bahamas and beyond. From $200 starter sites to full-scale SaaS platforms.',
  keywords: 'web design Bahamas, website developer Nassau, e-commerce Bahamas, custom website, business systems, AI tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
