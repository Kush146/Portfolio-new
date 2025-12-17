'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaUniversity, FaSchool } from 'react-icons/fa'

const education = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    school: 'Amity University, Mumbai',
    period: '07/2021 - 06/2025',
    details: ['CGPA: 7.9 / 10'],
    icon: FaUniversity,
  },
  {
    degree: '12th',
    school: 'Atomic Energy Central School-1, Tarapur',
    period: '2020 - 2021',
    details: ['86%'],
    icon: FaSchool,
  },
]

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      id="education"
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
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <div
              className="w-32 h-1 mx-auto mb-4"
              style={{
                background: 'linear-gradient(90deg, transparent, #0ea5e9, #d946ef, transparent)',
                boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
              }}
            />
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="glass-strong rounded-3xl p-6 md:p-8 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-15"
                  style={{
                    background:
                      index % 2 === 0
                        ? 'radial-gradient(circle, rgba(14,165,233,0.35), transparent)'
                        : 'radial-gradient(circle, rgba(217,70,239,0.35), transparent)',
                  }}
                />
                <div className="relative z-10 flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-primary-500/10 text-primary-200">
                    <edu.icon className="text-2xl" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gradient-blue">{edu.degree}</h3>
                    <p className="text-gray-200 font-semibold">{edu.school}</p>
                    <p className="text-gray-400 text-sm">{edu.period}</p>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      {edu.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
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

export default Education

