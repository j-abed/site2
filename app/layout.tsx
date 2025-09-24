import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SEOProvider from '@/components/SEOProvider'
import ScrollOrchestrator from '@/components/ScrollOrchestrator'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })

export const metadata: Metadata = {
  title: 'Puzzles Consulting — Learning Products',
  description: 'Puzzles Consulting helps launch AI-forward education products with speed and measurable outcomes.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-night-950 text-white antialiased font-sans">
        <SEOProvider />
        <ScrollOrchestrator />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
