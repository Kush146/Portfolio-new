'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaAward } from 'react-icons/fa'

const certificates = [
  {
    title: 'AI Internship Certificate – Acmegrade',
    date: 'Sept 2024',
  },
  {
    title: 'Data Analytics Job Simulation – Deloitte',
    date: 'June 2025',
  },
  {
    title: 'GenAI Data Analytics Program – Tata',
    date: 'June 2025',
  },
  {
    title: 'Python Skill Certification – One Roadmap',
    date: 'June 2025',
  },
  {
    title: 'AI Engineering Certification – One Roadmap',
    date: 'June 2025',
  },
]

const Certificates = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      id="certificates"
      className="py-20 relative overflow-hidden scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Certifications</span>
            </h2>
            <div
              className="w-32 h-1 mx-auto mb-4"
              style={{
                background: 'linear-gradient(90deg, transparent, #0ea5e9, #d946ef, transparent)',
                boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
              }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="glass-strong rounded-3xl p-6 md:p-8 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-20"
                  style={{
                    background: 'radial-gradient(circle, rgba(56,189,248,0.35), transparent)',
                  }}
                />
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-2xl bg-primary-500/10 text-primary-200">
                      <FaAward className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{cert.date}</p>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-100">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Certificates

