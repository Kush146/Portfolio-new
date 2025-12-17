'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Kush146', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kushkore', label: 'LinkedIn' },
    { icon: FaXTwitter, href: 'https://x.com/korekush04', label: 'X' },
    { icon: FaEnvelope, href: 'mailto:kushkore.work@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="relative border-t border-primary-500/20 py-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © {new Date().getFullYear()} Kush Kore Portfolio. All rights reserved.
          </motion.p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 rounded-full glass border border-gray-700/50 text-gray-400 hover:text-primary-400 transition-all group"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon size={20} className="relative z-10" />
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

