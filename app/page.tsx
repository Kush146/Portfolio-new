import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Certificates from '@/components/Certificates'
import Education from '@/components/Education'
import Achievements from '@/components/Achievements'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0f172a', color: '#f1f5f9', minHeight: '100vh' }}>
      <Hero />
      <About />
      <Experience />
      <Certificates />
      <Education />
      <Achievements />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

