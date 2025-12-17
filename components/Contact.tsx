'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCopy } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useToast } from '@/contexts/ToastContext'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { showToast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name || 'Visitor'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )

    const mailto = `mailto:kushkore.work@gmail.com?subject=${subject}&body=${body}`
    window.location.href = mailto

    showToast('Opening your email client...', 'info')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('kushkore.work@gmail.com')
      showToast('Email copied to clipboard!', 'success')
    } catch (err) {
      showToast('Failed to copy email. Please copy manually.', 'error')
    }
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'kushkore.work@gmail.com',
      href: 'mailto:kushkore.work@gmail.com',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kushkore',
      href: 'https://www.linkedin.com/in/kushkore',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/Kush146',
      href: 'https://github.com/Kush146',
    },
    {
      icon: FaXTwitter,
      label: 'X',
      value: 'x.com/korekush04',
      href: 'https://x.com/korekush04',
    },
  ]

  return (
    <motion.section
      id="contact"
      className="py-20 relative overflow-hidden scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-900/10 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <div className="w-32 h-1 mx-auto mb-6" style={{
              background: 'linear-gradient(90deg, transparent, #0ea5e9, #d946ef, transparent)',
              boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
            }} />
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <a
                href="mailto:kushkore.work@gmail.com"
                className="px-4 py-2 rounded-full glass-strong border border-primary-500/30 text-gray-100 hover:text-white transition-all"
              >
                Email me
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-full glass-strong border border-primary-500/30 text-gray-100 hover:text-white transition-all flex items-center gap-2"
              >
                <FaCopy className="text-xs" /> Copy email
              </button>
              <a
                href="https://www.linkedin.com/in/kushkore"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full glass-strong border border-primary-500/30 text-gray-100 hover:text-white transition-all"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass-strong rounded-3xl p-8 relative overflow-hidden">
                {/* Decorative gradient overlay */}
                <div 
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
                  style={{
                    background: 'radial-gradient(circle, rgba(217,70,239,0.4), transparent)',
                  }}
                />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-6 text-gradient-blue">
                    Let's Connect
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                  </p>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        className="group relative flex items-center space-x-4 p-4 rounded-xl glass border border-gray-700/50 hover:border-primary-500/50 transition-all overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ x: 8, scale: 1.02 }}
                      >
                        <div className="p-2 rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors">
                          <info.icon className="text-2xl text-primary-400 group-hover:text-accent-400 transition-colors" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{info.label}</div>
                          <div className="text-gray-200 font-medium">{info.value}</div>
                        </div>
                        <div 
                          className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="glass-strong rounded-3xl p-8 space-y-6 relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.2 }}
            >
              {/* Decorative gradient overlay */}
              <div 
              className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20"
                style={{
                  background: 'radial-gradient(circle, rgba(14,165,233,0.4), transparent)',
                }}
              />
              
              <div className="relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border border-gray-700/50 text-gray-100 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass border border-gray-700/50 text-gray-100 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl glass border border-gray-700/50 text-gray-100 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="group relative w-full px-8 py-4 rounded-xl text-white font-semibold overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%)',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Send Message</span>
                <span 
                  className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <span className="absolute inset-0 glow-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact

