import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollProgress from '@/components/ScrollProgress'
import { ToastProvider } from '@/contexts/ToastContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kush Kore - Full-Stack Developer | AI & Web/Mobile App Development',
  description: 'Full-stack developer crafting scalable web/mobile apps with AI & ML experience. Specialized in React/Next.js, Node.js, MongoDB, and cloud-native delivery.',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, MongoDB, AI, Machine Learning, Web Development, Mobile Development',
  authors: [{ name: 'Kush Kore' }],
  openGraph: {
    title: 'Kush Kore - Full-Stack Developer',
    description: 'Full-stack developer crafting scalable web/mobile apps with AI & ML experience',
    url: 'https://portfolio-jluz.vercel.app/',
    siteName: 'Kush Kore Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kush Kore - Full-Stack Developer',
    description: 'Full-stack developer crafting scalable web/mobile apps with AI & ML experience',
    creator: '@kushkore',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </ToastProvider>
      </body>
    </html>
  )
}



