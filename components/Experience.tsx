'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    role: 'Full-Stack Developer',
    company: 'AbleSpace',
    period: 'Nov 2025 – Present',
    summary:
      'Developing scalable web apps with React/Next.js, Node.js, MongoDB, and Tailwind; focused on UI/UX and perf.',
    highlights: [
      'Optimized frontend performance and UX for production apps',
      'Integrated REST APIs and improved data flow with backend teams',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'Labmentix',
    period: 'Sept 2025 – Nov 2025',
    summary:
      'Built cross-platform chat apps with React, Node.js, MongoDB, React Native, and Flutter; added Firebase auth.',
    highlights: [
      'Implemented Firebase Auth + Firestore for real-time sync',
      'Improved CI/CD on Vercel/Render/Firebase, reducing deploy time ~20%',
    ],
  },
  {
    role: 'Artificial Intelligence Intern',
    company: 'Acmegrade',
    period: 'July 2024 – Sept 2024',
    summary:
      'Designed and trained CNNs (TensorFlow) for CIFAR-10; improved accuracy and model precision.',
    highlights: [
      'Boosted CIFAR-10 accuracy by 12% with better preprocessing/augmentation',
      'Reached 95% precision through iterative model tuning and evaluation',
    ],
  },
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      id="experience"
      className="py-20 relative overflow-hidden scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background overlay */}
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
              <span className="text-gradient">Experience</span>
            </h2>
            <div
              className="w-32 h-1 mx-auto mb-4"
              style={{
                background: 'linear-gradient(90deg, transparent, #0ea5e9, #d946ef, transparent)',
                boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
              }}
            />
          </motion.div>

          {/* Timeline View */}
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 transform md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company + exp.role}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 border-4 border-dark-900 transform md:-translate-x-1/2 z-10" 
                    style={{ boxShadow: '0 0 20px rgba(14, 165, 233, 0.6)' }}
                  />
                  
                  {/* Content card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div
                      className="glass-strong rounded-3xl p-6 md:p-8 relative overflow-hidden group"
                      whileHover={{ y: -6, scale: 1.02 }}
                    >
                      <div
                        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-15"
                        style={{
                          background:
                            index === 0
                              ? 'radial-gradient(circle, rgba(14,165,233,0.4), transparent)'
                              : index === 1
                              ? 'radial-gradient(circle, rgba(217,70,239,0.4), transparent)'
                              : 'radial-gradient(circle, rgba(34,197,94,0.4), transparent)',
                        }}
                      />

                      <div className="relative z-10 space-y-3">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gradient-blue">
                              {exp.role}
                            </h3>
                            <p className="text-gray-200 font-semibold">{exp.company}</p>
                          </div>
                          <span className="text-sm text-gray-400 whitespace-nowrap">{exp.period}</span>
                        </div>

                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">{exp.summary}</p>

                        <ul className="space-y-2 text-sm md:text-base text-gray-200">
                          {exp.highlights.map((item) => (
                            <li key={item} className="flex items-start">
                              <span className="text-primary-400 mr-2">▸</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Experience

