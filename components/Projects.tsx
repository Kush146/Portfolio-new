'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const [openDetails, setOpenDetails] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      title: 'KukiWrite – AI Content Automation Workspace',
      description: '13+ AI tools for blogs, scripts, SEO, rewriting, briefs with auth, billing, and team collab.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'Stripe', 'OpenAI', 'Anthropic', 'Tailwind', 'Framer Motion'],
      image: '📝',
      gradient: 'from-blue-500 to-indigo-500',
      live: 'https://kukiwrite-whole.vercel.app',
      screenshot: '/projects/8.png',
      impact: 'Production-grade AI SaaS: auth, billing, usage limits, sharing, mobile-friendly UX.',
      details: {
        keyFeatures: [
          '13+ AI tools for blog posts, YouTube scripts, SEO, rewriting, briefs',
          'Email/password + OAuth auth; plan-based usage limits and billing',
          'Stripe subscriptions (free vs Pro), usage tracking, analytics',
          'Team collaboration, public sharing, version history',
          'Responsive dashboard and mobile-friendly UI',
        ],
        technical: [
          'Frontend: Next.js (App Router), React, TypeScript, Tailwind, Framer Motion',
          'Backend: Next.js API routes, Prisma ORM',
          'Database: PostgreSQL (Neon)',
          'Auth: NextAuth.js (credentials + OAuth), bcrypt',
          'AI: OpenAI + Anthropic via unified abstraction',
          'Payments: Stripe',
          'Hosting: Vercel (app) + Neon (DB)',
        ],
        achievements: [
          'Shipped production-grade AI SaaS with auth, billing, limits',
          'Built multi-model AI tooling with reusable prompts and per-tool UX',
          'Optimized for mobile/performance, with sharing and version history',
          'Env-driven config and pooling-ready DB setup',
        ],
      },
    },
    {
      title: 'GreenCart – E-commerce',
      description: 'Full-stack store with JWT auth, product catalog, cart, and deployments across Vercel/Heroku.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'JWT', 'Tailwind'],
      image: '🛒',
      gradient: 'from-emerald-500 to-teal-500',
      github: 'https://github.com/Kush146/Greencart-Fullstack',
      live: 'https://greencart-client-lyart.vercel.app/',
      impact: 'Optimized UX and auth; smoother cart and faster loads.',
      screenshot: '/projects/10.png',
    },
    {
      title: 'KukiShow – Movie Booking',
      description: 'Ticket booking app with JWT auth, seat selection, and movie management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
      image: '🎬',
      gradient: 'from-purple-500 to-pink-500',
      github: 'https://github.com/Kush146/MovieTicket-Fullstack',
      live: 'https://movie-ticket-fullstack-3tx1.vercel.app/',
      impact: 'Reliable bookings with secure JWT flows.',
      screenshot: '/projects/6.png',
    },
    {
      title: 'QuickChat – Real-time Chat',
      description: 'Real-time chat with WebSockets, JWT auth, and responsive UI.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'WebSockets'],
      image: '💬',
      gradient: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/Kush146/Quickchat-Fullstack',
      live: 'https://quickchat-fullstack-client.vercel.app/',
      impact: 'Low-latency messaging and resilient realtime UX.',
      screenshot: '/projects/5.png',
    },
    {
      title: 'GoCart – E-commerce',
      description: 'Full-stack commerce with PostgreSQL + Stripe and serverless workflows.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '🛍️',
      gradient: 'from-amber-500 to-orange-500',
      github: 'https://github.com/Kush146/GoCart-ecommerce',
      live: 'https://go-cart-ecommerce-three.vercel.app/',
      impact: 'Serverless flows + Stripe; stable payments and ops.',
      screenshot: '/projects/9.png',
    },
    {
      title: 'KukiSmart – AI Utility Suite',
      description: 'Flutter app with AI image tools, OCR, PDF utilities, chat assistant, and offline storage.',
      technologies: ['Flutter', 'Firebase', 'ML Kit', 'Hive'],
      image: '🤖',
      gradient: 'from-indigo-500 to-violet-500',
      details: {
        keyFeatures: [
          'AI Image Tools: Photo enhancement, background removal, OCR text extraction, image compression',
          'PDF Utilities: Document scanning, PDF creation, merging, conversion, digital signatures',
          'File Management: Storage analyzer and cache cleaner',
          'Notes & To-Do: Task management with categories',
          'AI Chat Assistant: Voice-enabled chatbot with speech-to-text',
          'QR/Barcode Scanner: Real-time scanning with URL detection',
        ],
        technical: [
          'Flutter framework with Material Design 3',
          'Firebase integration (Authentication, Firestore, Storage, Analytics)',
          'Google ML Kit for OCR and text recognition',
          'Hive for local NoSQL database',
          'Google Mobile Ads for monetization',
          'Speech recognition and text-to-speech capabilities',
        ],
        achievements: [
          'Delivered 9+ core feature modules with 20+ individual tools',
          'Successfully integrated complex third-party services',
          'Created production-ready application with clean architecture',
          'Implemented comprehensive error handling and user feedback',
        ],
      },
      impact: '9+ feature modules; AI + offline; production-grade.',
      screenshot: '/projects/7.png',
    },
  ]

  return (
    <motion.section
      id="projects"
      className="py-20 relative overflow-hidden scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Effects */}
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
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <div className="w-32 h-1 mx-auto mb-4" style={{
              background: 'linear-gradient(90deg, transparent, #0ea5e9, #d946ef, transparent)',
              boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)',
            }} />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {isLoading &&
              Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={`skeleton-${idx}`}
                  className="glass-strong rounded-3xl p-6 md:p-8 border border-gray-700/30 animate-pulse space-y-4"
                >
                  <div className="h-44 sm:h-52 md:h-56 rounded-xl bg-white/5" />
                  <div className="h-4 w-2/3 bg-white/10 rounded" />
                  <div className="h-3 w-full bg-white/5 rounded" />
                  <div className="h-3 w-3/4 bg-white/5 rounded" />
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-white/5 rounded-full" />
                    <div className="h-6 w-14 bg-white/5 rounded-full" />
                  </div>
                  <div className="h-9 w-24 bg-white/10 rounded-lg" />
                </div>
              ))}
            {!isLoading &&
              projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative glass-strong rounded-3xl p-6 md:p-8 overflow-hidden card-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Gradient overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                />
                
                {/* Decorative glow */}
                <div 
                  className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradient.includes('blue') ? 'rgba(14,165,233,0.4)' : project.gradient.includes('purple') ? 'rgba(217,70,239,0.4)' : 'rgba(34,197,94,0.4)'}, transparent)`,
                  }}
                />
                
                <div className="relative z-10">
                  {/* Project Screenshot/Icon */}
                  <div className="mb-6 relative rounded-xl overflow-hidden bg-dark-800/60 border border-gray-700/30 h-44 sm:h-52 md:h-56 flex items-center justify-center">
                    {project.screenshot ? (
                      <img
                        src={project.screenshot}
                        alt={project.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-6xl md:text-7xl transform group-hover:scale-110 transition-transform">
                          {project.image}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-gradient-blue group-hover:text-gradient-purple transition-all">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  {project.impact && (
                    <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-xs text-primary-100">
                      ⚡ {project.impact}
                    </div>
                  )}
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs rounded-full glass border border-gray-700/50 text-gray-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex flex-wrap gap-3 items-center">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center space-x-2 px-4 py-2 rounded-lg glass border border-gray-700/50 hover:border-primary-500/50 text-gray-300 hover:text-primary-400 transition-all"
                        whileHover={{ scale: 1.05, x: 4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="text-lg" />
                        <span className="text-sm font-medium">Code</span>
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center space-x-2 px-4 py-2 rounded-lg glass border border-gray-700/50 hover:border-accent-500/50 text-gray-300 hover:text-accent-400 transition-all"
                        whileHover={{ scale: 1.05, x: 4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </motion.a>
                    )}
                    {project.details && (
                      <motion.button
                        onClick={() => setOpenDetails(openDetails === project.title ? null : project.title)}
                        className="group/link flex items-center space-x-2 px-4 py-2 rounded-lg glass border border-primary-500/40 text-gray-200 hover:text-white transition-all"
                        whileHover={{ scale: 1.05, x: 4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-sm font-medium">{openDetails === project.title ? 'Hide Details' : 'Details'}</span>
                      </motion.button>
                    )}
                  </div>

                  {project.details && openDetails === project.title && (
                    <div className="mt-5 space-y-3 text-sm text-gray-200 glass rounded-2xl p-4 border border-primary-500/20">
                      <div>
                        <div className="font-semibold text-primary-100 mb-1">Key Features</div>
                        <ul className="space-y-1 list-disc list-inside text-gray-300">
                          {project.details.keyFeatures.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="font-semibold text-primary-100 mb-1">Technical Implementation</div>
                        <ul className="space-y-1 list-disc list-inside text-gray-300">
                          {project.details.technical.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="font-semibold text-primary-100 mb-1">Achievements</div>
                        <ul className="space-y-1 list-disc list-inside text-gray-300">
                          {project.details.achievements.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Projects
