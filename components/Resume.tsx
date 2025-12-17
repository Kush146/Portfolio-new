'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa'

const Resume = () => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8 print:p-4">
      <div className="max-w-4xl mx-auto">
        {/* Print Button - Hidden when printing */}
        <div className="mb-6 print:hidden">
          <motion.button
            onClick={handlePrint}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Print / Save as PDF
          </motion.button>
        </div>

        {/* Resume Content */}
        <div className="bg-white p-8 print:p-0 shadow-lg print:shadow-none">
          {/* Header */}
          <header className="border-b-2 border-gray-300 pb-6 mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Kush Kore</h1>
            <p className="text-xl text-gray-700 mb-4">Full-Stack Developer | AI & Web/Mobile App Development</p>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <a href="mailto:kushkore.work@gmail.com" className="flex items-center gap-2 hover:text-blue-600">
                <FaEnvelope className="text-blue-600" />
                kushkore.work@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/kushkore" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600">
                <FaLinkedin className="text-blue-600" />
                linkedin.com/in/kushkore
              </a>
              <a href="https://github.com/Kush146" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600">
                <FaGithub className="text-blue-600" />
                github.com/Kush146
              </a>
              <a href="https://portfolio-jluz.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600">
                <FaGlobe className="text-blue-600" />
                portfolio-jluz.vercel.app
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              Enthusiastic Full-Stack Developer with extensive experience in building scalable, high-performance web and mobile applications. 
              Specialize in creating robust user interfaces and optimized backend services using React.js, Node.js, MongoDB, Express.js, and other modern technologies. 
              With a solid foundation in AI and machine learning, I have contributed to projects like CIFAR-10 image classification and real-time applications. 
              Passionate about crafting user-centric digital experiences and improving system performance.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">Experience</h2>
            
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Full-Stack Developer</h3>
                  <p className="text-gray-700 font-semibold">AbleSpace</p>
                </div>
                <span className="text-gray-600 text-sm">Nov 2025 – Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Developed scalable and performant web applications using React.js, Next.js, Node.js, MongoDB, and Tailwind CSS</li>
                <li>Focused on optimizing UI/UX and improving frontend performance</li>
                <li>Collaborated with backend teams to integrate REST APIs and optimize data flow</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Web Development Intern</h3>
                  <p className="text-gray-700 font-semibold">Labmentix</p>
                </div>
                <span className="text-gray-600 text-sm">Sept 2025 – Nov 2025</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Built full-stack and cross-platform chat applications with React, Node.js, MongoDB, React Native, and Flutter</li>
                <li>Integrated Firebase Authentication and Firestore for real-time synchronization</li>
                <li>Optimized CI/CD pipelines using Vercel, Render, and Firebase, cutting deployment time by 20%</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Artificial Intelligence Intern</h3>
                  <p className="text-gray-700 font-semibold">Acmegrade</p>
                </div>
                <span className="text-gray-600 text-sm">July 2024 – Sept 2024</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Designed and trained CNN models for image classification using TensorFlow, improving CIFAR-10 accuracy by 12%</li>
                <li>Achieved 95% model precision by enhancing data preprocessing and augmentation</li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Programming Languages:</h4>
                <p className="text-gray-700 text-sm">JavaScript, TypeScript, Python, C++, Java, Dart, SQL, HTML, CSS, Bash/Shell, JSON</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Frontend:</h4>
                <p className="text-gray-700 text-sm">React.js, Next.js, Redux, Tailwind CSS, Material-UI, Bootstrap, Responsive Design</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Backend:</h4>
                <p className="text-gray-700 text-sm">Node.js, Express.js, JWT, OAuth2, RESTful APIs, GraphQL</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Databases:</h4>
                <p className="text-gray-700 text-sm">MongoDB, PostgreSQL, MySQL, SQLite, Firebase/Firestore, Redis</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Mobile:</h4>
                <p className="text-gray-700 text-sm">React Native, Expo, Flutter, Firebase Auth</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">DevOps & Cloud:</h4>
                <p className="text-gray-700 text-sm">Docker, Kubernetes, CI/CD (GitHub Actions), AWS, Vercel, Render</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">AI/ML:</h4>
                <p className="text-gray-700 text-sm">TensorFlow, Keras, PyTorch, Scikit-learn, OpenCV, Computer Vision, Data Analysis</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">Education</h2>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Bachelor of Technology in Computer Science and Engineering</h3>
              <p className="text-gray-700">Amity University, Mumbai | July 2021 – June 2025</p>
              <p className="text-gray-600 text-sm">CGPA: 7.9/10</p>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">Certifications</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>AI Internship Certificate – Acmegrade (Sept 2024)</li>
              <li>Data Analytics Job Simulation – Deloitte (June 2025)</li>
              <li>GenAI Data Analytics Program – Tata (June 2025)</li>
              <li>Python Skill Certification – One Roadmap (June 2025)</li>
              <li>AI Engineering Certification – One Roadmap (June 2025)</li>
            </ul>
          </section>

          {/* Key Projects */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">Key Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900">GreenCart – Full-Stack E-commerce Application</h3>
                <p className="text-gray-700 text-sm">E-commerce platform with React, Next.js, Node.js, MongoDB, JWT authentication, and shopping cart functionality. Deployed on Vercel and Heroku.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">KUKISHOW – Full-Stack Movie Ticket Booking App</h3>
                <p className="text-gray-700 text-sm">Movie ticket booking system with React, Node.js, MongoDB, JWT authentication, and booking management features.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">QuickChat – Real-time Chat Application</h3>
                <p className="text-gray-700 text-sm">Real-time chat app using Next.js, React, Node.js, MongoDB, WebSocket messaging, and JWT authentication.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">GoCart – E-commerce Platform</h3>
                <p className="text-gray-700 text-sm">Full-stack e-commerce platform using Next.js, React, Node.js, PostgreSQL, Stripe, and serverless workflows.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">KukiSmart - AI All-in-One Utility App</h3>
                <p className="text-gray-700 text-sm">Flutter app with AI image tools, OCR, PDF utilities, chat assistant, QR scanner, and Firebase integration. Delivered 9+ core feature modules.</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body {
            background: white;
          }
          .print\\:hidden {
            display: none;
          }
          .print\\:p-0 {
            padding: 0;
          }
          .print\\:p-4 {
            padding: 1rem;
          }
          .print\\:shadow-none {
            box-shadow: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Resume

