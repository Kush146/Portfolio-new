'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCopy } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import { useToast } from '@/contexts/ToastContext'

const Hero = () => {
  const { showToast } = useToast()

  const handleResumeClick = () => {
    showToast('Thanks for your interest! Please email kushkore.work@gmail.com to request my resume.', 'info')
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('kushkore.work@gmail.com')
      showToast('Email copied to clipboard!', 'success')
    } catch (err) {
      showToast('Failed to copy email. Please copy manually.', 'error')
    }
  }

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Kush146', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kushkore', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://portfolio-jluz.vercel.app/', label: 'Portfolio' },
    { icon: FaEnvelope, href: 'mailto:kushkore.work@gmail.com', label: 'Email' },
  ]

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-14"
    >
      {/* Animated dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#020617] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.15),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.12),transparent_45%)]" />
      
      {/* Floating Orbs with Blue Glow */}
      <motion.div
        className="absolute top-20 left-12 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.4) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-16 right-16 w-[480px] h-[480px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.32) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Additional Glowing Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${20 + i * 10}px`,
            height: `${20 + i * 10}px`,
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(14,165,233,0.6), transparent)'
              : 'radial-gradient(circle, rgba(217,70,239,0.6), transparent)',
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
            filter: 'blur(2px)',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content with Enhanced Styling */}
          <motion.div
            className="text-center lg:text-left max-w-3xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="mb-4 inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-sm md:text-base px-4 py-2 rounded-full glass-strong text-primary-400 font-semibold border border-primary-500/30">
                  👋 Hello! I Am
                </span>
              </motion.div>
              
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-gradient block mb-2">Kush Kore</span>
                <span className="text-white block">Full-Stack Developer</span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I’m Kush, a full-stack developer who ships production SaaS, e-commerce, and realtime apps with a strong AI/ML background (TensorFlow, PyTorch, CV).
            </motion.p>
            
            <motion.p
              className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I build with React/Next.js + Node.js, MongoDB/PostgreSQL, Prisma, and cloud-native stacks—obsessed with user-centric UX, performance, auth/billing, and reliable DevOps.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8 text-sm text-gray-200">
              <div className="glass-strong rounded-xl px-4 py-3 border border-primary-500/20">
                <div className="font-semibold text-primary-200">Highlights</div>
                <ul className="mt-1 space-y-1 text-gray-300">
                  <li>• 10+ products shipped (KukiWrite, GreenCart, QuickChat, GoCart, KukiShow, KukiSmart)</li>
                  <li>• AI/ML apps, auth/billing, realtime, and team features</li>
                  <li>• Perf + DX focus across frontend, backend, and cloud</li>
                </ul>
              </div>
              <div className="glass-strong rounded-xl px-4 py-3 border border-primary-500/20">
                <div className="font-semibold text-primary-200">Availability</div>
                <ul className="mt-1 space-y-1 text-gray-300">
                  <li>• Employed (not open to new roles)</li>
                  <li>• Replies within 24h</li>
                  <li>• Email for resume</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full glass-strong border border-primary-500/30 text-xs md:text-sm text-primary-200">
                💼 Currently employed — not open to new roles
              </span>
            </div>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-3 rounded-full glass-strong text-gray-300 hover:text-white transition-all group"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="text-xl" />
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </motion.a>
              ))}
              <motion.button
                onClick={handleResumeClick}
                className="relative px-4 py-3 rounded-full glass-strong border border-primary-500/30 text-gray-200 hover:text-white transition-all"
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                Request Resume
              </motion.button>
              <motion.button
                onClick={handleCopyEmail}
                className="relative px-4 py-3 rounded-full glass-strong border border-primary-500/30 text-gray-200 hover:text-white transition-all flex items-center gap-2"
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05 }}
              >
                <FaCopy className="text-sm" />
                Copy Email
              </motion.button>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="#about"
                className="group relative inline-flex items-center space-x-2 px-8 py-4 rounded-full font-semibold overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%)',
                  color: 'white',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Explore My Work</span>
                <HiArrowDown className="relative z-10 animate-bounce" />
                <span 
                  className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ filter: 'blur(20px)' }}
                />
                <span className="absolute inset-0 glow-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo with Enhanced Effects */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative self-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Enhanced Glowing background effect */}
              <div 
                className="absolute inset-0 rounded-full blur-3xl transform scale-150"
                style={{
                  background: 'radial-gradient(circle, rgba(14,165,233,0.3) 0%, rgba(217,70,239,0.3) 100%)',
                }}
              />
              
              {/* Photo container with gradient border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div 
                  className="absolute inset-0 rounded-full p-1"
                  style={{
                    background: 'linear-gradient(135deg, #0ea5e9, #d946ef, #0ea5e9)',
                    backgroundSize: '200% 200%',
                    animation: 'gradient 3s ease infinite',
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-dark-800">
                    <motion.img
                      src="/kush-profile.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%231e293b" width="400" height="400"/%3E%3Ctext fill="%2364748b" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EYour Photo%3C/text%3E%3C/svg%3E'
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Enhanced Decorative rings with glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  border: '2px solid rgba(14, 165, 233, 0.3)',
                  boxShadow: '0 0 20px rgba(14, 165, 233, 0.2), inset 0 0 20px rgba(14, 165, 233, 0.1)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full"
                style={{
                  border: '2px solid rgba(217, 70, 239, 0.3)',
                  boxShadow: '0 0 20px rgba(217, 70, 239, 0.2), inset 0 0 20px rgba(217, 70, 239, 0.1)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 rounded-full"
                style={{
                  border: '1px solid rgba(14, 165, 233, 0.2)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="glass-strong p-3 rounded-full border border-primary-500/30">
          <HiArrowDown className="text-2xl text-primary-400" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
