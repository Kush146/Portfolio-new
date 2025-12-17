'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      id="about"
      className="py-20 relative overflow-hidden scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/10 to-transparent" />
      
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
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="w-32 h-1 mx-auto mb-4" style={{
              background: 'linear-gradient(90deg, transparent, #0ea5e9, #d946ef, transparent)',
              boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
            }} />
          </motion.div>

          <div className="glass-strong rounded-3xl p-8 md:p-12 space-y-6 relative overflow-hidden">
            {/* Decorative gradient overlay */}
            <div 
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(217,70,239,0.4), transparent)',
              }}
            />
            
            <motion.p
              className="text-lg md:text-xl text-gray-200 leading-relaxed relative z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2 }}
            >
              I'm Kush Kore, a <span className="text-gradient-blue font-semibold">Full-Stack Developer</span> building scalable, high-performance web and mobile experiences with React/Next.js, Node.js, and cloud-native stacks.
            </motion.p>
            
            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed relative z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4 }}
            >
              With AI/ML experience (TensorFlow, PyTorch, CV), I ship user-centric products, optimize performance, and deliver reliable backend services across MongoDB/PostgreSQL and modern DevOps.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { label: 'Products shipped', value: '10+', icon: '🚀' },
                { label: 'Hands-on full-stack', value: '1+ Year', icon: '💼' },
                { label: 'Stacks & tools used', value: '30+', icon: '⚡' },
                { label: 'AI/ML models & tools', value: '10+', icon: '🧠' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="group relative text-center p-4 md:p-6 rounded-xl glass border border-primary-500/20 hover:border-primary-500/50 transition-all"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-400 font-medium">{stat.label}</div>
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(217,70,239,0.1))',
                      filter: 'blur(10px)',
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
