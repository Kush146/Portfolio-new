'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = (scrolled / windowHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress()

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-dark-900/50">
      <motion.div
        className="h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
        style={{
          width: `${scrollProgress}%`,
          boxShadow: '0 0 10px rgba(14, 165, 233, 0.5)',
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  )
}

export default ScrollProgress



