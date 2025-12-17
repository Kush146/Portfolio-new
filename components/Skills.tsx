'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaMobileAlt,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
  SiGraphql,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpenai,
  SiOpenbsd,
  SiKubernetes,
  SiVercel,
  SiJest,
  SiCypress,
  SiExpo,
  SiFlutter,
  SiFirebase,
  SiPostman,
} from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400)
    return () => clearTimeout(timer)
  }, [])

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Material-UI', icon: SiTailwindcss, color: '#5E35B1' },
        { name: 'Redux', icon: SiJavascript, color: '#764ABC' },
      ],
    },
    {
      title: 'Mobile & Cross-Platform',
      icon: '📱',
      gradient: 'from-teal-500 to-emerald-500',
      skills: [
        { name: 'React Native / Expo', icon: SiExpo, color: '#1C1E24' },
        { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
        { name: 'Firebase Auth', icon: SiFirebase, color: '#FFCA28' },
        { name: 'Mobile UX', icon: FaMobileAlt, color: '#14B8A6' },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#ffffff' },
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
        { name: 'JWT / OAuth2', icon: SiJavascript, color: '#EAB308' },
        { name: 'REST / API Design', icon: SiJavascript, color: '#22D3EE' },
      ],
    },
    {
      title: 'Database & Tools',
      icon: '🛠️',
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'MySQL', icon: SiPostgresql, color: '#00618A' },
        { name: 'SQLite', icon: SiPostgresql, color: '#0EA5E9' },
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        { name: 'AWS', icon: FaAws, color: '#FF9900' },
        { name: 'CI/CD (GitHub Actions)', icon: SiJavascript, color: '#7C3AED' },
        { name: 'Redis', icon: SiJavascript, color: '#EF4444' },
        { name: 'Firebase/Firestore', icon: SiJavascript, color: '#FFCA28' },
      ],
    },
    {
      title: 'AI / ML',
      icon: '🧠',
      gradient: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
        { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
        { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
        { name: 'Computer Vision (OpenCV)', icon: SiOpenbsd, color: '#2563EB' },
        { name: 'OpenAI / LLM APIs', icon: SiOpenai, color: '#22D3EE' },
        { name: 'Data Analysis', icon: SiScikitlearn, color: '#10B981' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: '☁️',
      gradient: 'from-sky-500 to-blue-500',
      skills: [
        { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        { name: 'AWS', icon: FaAws, color: '#FF9900' },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
        { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
        { name: 'CI/CD (GitHub Actions)', icon: SiJavascript, color: '#7C3AED' },
      ],
    },
    {
      title: 'Testing & Quality',
      icon: '✅',
      gradient: 'from-rose-500 to-pink-500',
      skills: [
        { name: 'Jest', icon: SiJest, color: '#C21325' },
        { name: 'Cypress', icon: SiCypress, color: '#00C7B7' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      ],
    },
  ]

  return (
    <motion.section
      id="skills"
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
              <span className="text-gradient">Skills & Technologies</span>
            </h2>
            <div className="w-32 h-1 mx-auto mb-4" style={{
              background: 'linear-gradient(90deg, transparent, #0ea5e9, #d946ef, transparent)',
              boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
            }} />
            <div className="flex justify-center">
              <div className="px-4 py-2 rounded-full glass-strong border border-primary-500/30 text-xs md:text-sm text-primary-100">
                AI outcomes: +12% CIFAR-10 accuracy • 95% precision
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {isLoading &&
              Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={`skills-skel-${idx}`}
                  className="glass-strong rounded-3xl p-6 md:p-8 border border-gray-700/30 animate-pulse space-y-3"
                >
                  <div className="h-4 w-1/2 bg-white/10 rounded" />
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-white/5 rounded" />
                    <div className="h-3 w-5/6 bg-white/5 rounded" />
                    <div className="h-3 w-4/6 bg-white/5 rounded" />
                  </div>
                </div>
              ))}
            {!isLoading &&
              skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="glass-strong rounded-3xl p-6 md:p-8 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: categoryIndex * 0.2 }}
                whileHover={{ scale: 1.03, y: -8 }}
              >
                {/* Gradient overlay on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                />
                
                {/* Decorative corner glow */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20"
                  style={{
                    background: categoryIndex === 0 
                      ? 'radial-gradient(circle, rgba(14,165,233,0.4), transparent)'
                      : categoryIndex === 1
                      ? 'radial-gradient(circle, rgba(34,197,94,0.4), transparent)'
                      : 'radial-gradient(circle, rgba(217,70,239,0.4), transparent)',
                  }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-4xl mr-3">{category.icon}</span>
                    <h3 className="text-2xl font-bold text-gradient-blue">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="group/item flex items-center space-x-4 p-4 rounded-xl glass border border-gray-700/50 hover:border-primary-500/50 transition-all"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        whileHover={{ x: 8, scale: 1.02 }}
                      >
                        <div 
                          className="p-2 rounded-lg"
                          style={{
                            backgroundColor: `${skill.color}20`,
                            color: skill.color,
                          }}
                        >
                          <skill.icon className="text-2xl" style={{ color: skill.color }} />
                        </div>
                        <span className="text-gray-200 font-medium flex-1">{skill.name}</span>
                        <motion.div
                          className="w-2 h-2 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"
                          style={{
                            background: `linear-gradient(135deg, ${skill.color}, ${skill.color}80)`,
                            boxShadow: `0 0 10px ${skill.color}60`,
                          }}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                    ))}
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

export default Skills
