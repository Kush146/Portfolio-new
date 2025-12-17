'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBolt, FaCloud, FaMobileAlt, FaRobot } from 'react-icons/fa'

const services = [
  {
    title: 'SaaS & Dashboards',
    desc: 'Next.js/React analytics dashboards with auth, RBAC, and crisp UX.',
    icon: FaBolt,
  },
  {
    title: 'E‑commerce & Payments',
    desc: 'Secure carts, checkout, Stripe flows, and performance-focused UX.',
    icon: FaCloud,
  },
  {
    title: 'Realtime & Mobile',
    desc: 'Chats, notifications, socket-driven UX, plus React Native/Flutter.',
    icon: FaMobileAlt,
  },
  {
    title: 'AI / ML Integrations',
    desc: 'CV/ML features, TensorFlow/PyTorch pipelines, smart app features.',
    icon: FaRobot,
  },
]

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      id="services"
      className="py-14 relative overflow-hidden scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((item, idx) => (
            <motion.div
              key={item.title}
              className="glass-strong rounded-2xl p-5 space-y-3 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 * idx }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-primary-500/10 text-primary-200">
                  <item.icon className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-100">{item.title}</h3>
              </div>
              <p className="relative z-10 text-sm text-gray-300 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Services

