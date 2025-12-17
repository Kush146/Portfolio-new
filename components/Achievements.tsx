'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa'

const achievements = [
  {
    title: 'Top AI Project Award',
    organization: 'Acmegrade Internship',
    year: '2024',
    description: 'Recognized for outstanding work on CIFAR-10 image classification project, achieving 95% precision and 12% accuracy improvement.',
    icon: FaTrophy,
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Captain, Amity Pro Badminton League',
    organization: 'Amity University',
    year: '2024',
    description: 'Led team to 1st place at university level, demonstrating leadership, teamwork, and strategic planning skills.',
    icon: FaMedal,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Event Organizer',
    organization: 'Amity University',
    year: '2021-2025',
    description: 'Organized multiple technical and cultural university events, showcasing leadership and excellent time management abilities.',
    icon: FaAward,
    gradient: 'from-purple-500 to-pink-500',
  },
]

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      id="achievements"
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
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Achievements & Awards</span>
            </h2>
            <div className="w-32 h-1 mx-auto mb-4" style={{
              background: 'linear-gradient(90deg, transparent, #0ea5e9, #d946ef, transparent)',
              boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
            }} />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="glass-strong rounded-3xl p-6 md:p-8 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03, y: -8 }}
              >
                {/* Gradient overlay on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                />
                
                {/* Decorative corner glow */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20"
                  style={{
                    background: index === 0 
                      ? 'radial-gradient(circle, rgba(251,191,36,0.4), transparent)'
                      : index === 1
                      ? 'radial-gradient(circle, rgba(14,165,233,0.4), transparent)'
                      : 'radial-gradient(circle, rgba(217,70,239,0.4), transparent)',
                  }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <achievement.icon className={`text-5xl bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`} />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gradient-blue mb-2 text-center">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-300 font-semibold text-center mb-1">
                    {achievement.organization}
                  </p>
                  
                  <p className="text-gray-400 text-sm text-center mb-4">
                    {achievement.year}
                  </p>
                  
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed text-center">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Achievements

