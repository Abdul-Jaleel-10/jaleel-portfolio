'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import TechnicalBackground from './components/TechnicalBackground'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isMobile) return

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    Object.values(sectionRefs.current).forEach(section => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [isMobile])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  // ============ MOBILE VERSION ============
  if (isMobile) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Navigation */}
        <nav className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="#home" className="text-2xl font-bold text-yellow-400">AJ</Link>
            <button onClick={toggleMenu} className="text-yellow-400 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="bg-gray-800 border-t border-gray-700 px-4 py-4 space-y-3">
              <Link href="#home" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition-colors">Home</Link>
              <Link href="#about" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition-colors">About</Link>
              <Link href="#achievements" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition-colors">Achievements</Link>
              <Link href="#skills" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition-colors">Skills</Link>
              <Link href="#projects" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition-colors">Projects</Link>
              <Link href="#contact" onClick={closeMenu} className="block py-2 hover:text-yellow-400 transition-colors">Contact</Link>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
          <div className="max-w-2xl w-full text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-yellow-400">
              <Image src="/image.png" alt="Abdul Jaleel" width={128} height={128} className="w-full h-full object-cover" priority />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-yellow-400">Abdul Jaleel</span>
            </h1>
            <p className="text-2xl text-gray-300 mb-6">Software Developer</p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Experienced in web development, AI integration, and building real-world projects with clean, maintainable code.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="mailto:abduljaleelamj10@gmail.com" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                Contact Me
              </a>
              <a href="https://github.com/Abdul-Jaleel-10" target="_blank" rel="noopener noreferrer" className="border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-gray-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center text-yellow-400">About Me</h2>
            <p className="text-gray-300 text-base leading-relaxed mb-12 px-2">
              I am a B.E. CSE student at Sathyabama Institute of Science and Technology, specializing in software development, AI projects, and web applications. I enjoy building real projects and learning new technologies to solve real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-6 px-2">
              <div className="bg-gray-700/50 rounded-lg p-6 text-center border border-gray-600">
                <p className="text-4xl font-bold text-yellow-400 mb-2">03+</p>
                <p className="text-gray-300 text-base font-medium">Years Learning</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-6 text-center border border-gray-600">
                <p className="text-4xl font-bold text-yellow-400 mb-2">05+</p>
                <p className="text-gray-300 text-base font-medium">Projects</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-6 text-center border border-gray-600">
                <p className="text-4xl font-bold text-yellow-400 mb-2">2</p>
                <p className="text-gray-300 text-base font-medium">Awards</p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-6 text-center border border-gray-600">
                <p className="text-4xl font-bold text-yellow-400 mb-2">36h</p>
                <p className="text-gray-300 text-base font-medium">Code Sprint</p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">Achievements</h2>
            <div className="space-y-8">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🥈</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">AI4AP Police Hackathon</h3>
                    <p className="text-gray-300 mb-4">Secured Runner-Up position and awarded ₹50,000 for developing an AI-powered police assistance system.</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• AI Chatbot for scam victim assistance</li>
                      <li>• Automated case workflow management</li>
                      <li>• 91 CrPC notice generation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🏆</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Vihansa 11:11 Hackathon</h3>
                    <p className="text-gray-300 mb-4">Special Jury Award for Best UI/UX Design with ₹2,000 prize for AI Mental Health Assistant.</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• 24/7 AI Chatbot support</li>
                      <li>• Real-time sentiment analysis</li>
                      <li>• Doctor finder & appointment booking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-gray-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-700/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Programming Languages</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ C</li>
                  <li>✓ Java</li>
                  <li>✓ Python</li>
                  <li>✓ JavaScript</li>
                  <li>✓ HTML & CSS</li>
                </ul>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Technologies & Tools</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Flask</li>
                  <li>✓ React.js</li>
                  <li>✓ Node.js</li>
                  <li>✓ MongoDB</li>
                  <li>✓ Git & GitHub</li>
                  <li>✓ Docker</li>
                </ul>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Core Skills</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Frontend Development</li>
                  <li>✓ AI Automation</li>
                  <li>✓ Chatbot Development</li>
                  <li>✓ IoT Integration</li>
                </ul>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Soft Skills</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Problem Solving</li>
                  <li>✓ Adaptability</li>
                  <li>✓ Teamwork</li>
                  <li>✓ Communication</li>
                  <li>✓ Leadership</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gray-700/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Languages Known</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ English</li>
                <li>✓ Tamil</li>
                <li>✓ Hindi</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">Featured Projects</h2>
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">AI-Based IT Act Case Automation System</h3>
                  <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded text-sm">AI/ML</span>
                </div>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Developed AI-powered chatbot for scam victims</li>
                  <li>• Automated scam message classification</li>
                  <li>• Generated 91 CrPC notices automatically</li>
                  <li>• Built case workflow dashboard</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">AI-Powered Mental Health Assistant</h3>
                  <span className="bg-pink-900/50 text-pink-300 px-3 py-1 rounded text-sm">AI/ML + Web</span>
                </div>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Developed a mental wellness platform with AI chatbot, voice interaction, sentiment analysis, and emotion 
detection. </li>
                  <li>• Added a medicine tracker for daily reminders and a medicine finder for issue-based suggestions. </li>
                  <li>• Built an appointment booking system for connecting users with professionals.</li>
                  <li>•  Included interactive games for stress relief and mood improvement. </li>
                
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">Vedanthangal & Karikili Sanctuary Website</h3>
                  <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded text-sm">Tourism + Web</span>
                </div>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Full website for bird sanctuaries</li>
                  <li>• Map navigation to nearby attractions</li>
                  <li>• 360° virtual viewing experience</li>
                  <li>• Clean UI and accessibility focus</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gray-800/50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-yellow-400">Get In Touch</h2>
            <p className="text-gray-300 mb-8 text-lg">
              I'm open to internship opportunities and always interested in discussing new projects and ideas.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="mailto:abduljaleelamj10@gmail.com" className="flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                <FaEnvelope /> Email
              </a>
              <a href="https://www.linkedin.com/in/abdul-jaleel-am/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/Abdul-Jaleel-10" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-700 py-8 px-4">
          <div className="max-w-6xl mx-auto text-center text-gray-400">
            <p>© {new Date().getFullYear()} Abdul Jaleel A M. All rights reserved.</p>
          </div>
        </footer>
      </main>
    )
  }

  // ============ DESKTOP VERSION - FANCY DESIGN ============
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white overflow-x-hidden">
      <TechnicalBackground />
      
      {/* Navigation - Premium Desktop */}
      <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-slate-900/90 via-slate-800/85 to-slate-900/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <Link href="#home" className="text-3xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">
            AJ
          </Link>
          
          <div className="flex gap-12 items-center">
            <div className="hidden lg:flex gap-10">
              <Link href="#home" className="nav-link relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"></span>
              </Link>
              <Link href="#about" className="nav-link relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"></span>
              </Link>
              <Link href="#achievements" className="nav-link relative group">
                Achievements
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"></span>
              </Link>
              <Link href="#skills" className="nav-link relative group">
                Skills
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"></span>
              </Link>
              <Link href="#projects" className="nav-link relative group">
                Projects
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"></span>
              </Link>
              <Link href="#contact" className="nav-link relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"></span>
              </Link>
            </div>

            <div className="flex gap-6 items-center">
              <a href="https://github.com/Abdul-Jaleel-10" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-125">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/abdul-jaleel-am/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-125">
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Desktop Premium */}
      <section ref={el => { if (el) sectionRefs.current['hero'] = el }} id="home" className="relative min-h-screen flex items-center justify-center pt-28 px-8 overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-8 z-20">
          <div className="w-1 h-20 bg-gradient-to-b from-cyan-500 to-transparent"></div>
          <a href="https://github.com/Abdul-Jaleel-10" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 hover:scale-150 transition-all duration-300">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/abdul-jaleel-am/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 hover:scale-150 transition-all duration-300">
            <FaLinkedin size={28} />
          </a>
          <div className="w-1 h-20 bg-gradient-to-t from-cyan-500 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <div className="mb-12 animate-fadeIn">
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-400/60 shadow-2xl shadow-cyan-500/30 hover:shadow-3xl hover:shadow-cyan-400/50 transition-all duration-500">
                <Image src="/image.png" alt="Abdul Jaleel" width={192} height={192} className="w-full h-full object-cover" priority />
              </div>
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl font-black mb-8 leading-tight">
            <span className="shining-text">Abdul</span> <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">Jaleel</span>
          </h1>
          
          <p className="text-4xl font-bold text-cyan-300 mb-6 tracking-wide">Software Developer</p>
          
          <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Experienced in web development, AI integration, and building real-world projects with clean, maintainable code.
          </p>

          <div className="flex gap-8 justify-center flex-wrap">
            <a href="mailto:abduljaleelamj10@gmail.com" className="btn-primary">
              Get In Touch
            </a>
            <a href="https://github.com/Abdul-Jaleel-10" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              View My Work
            </a>
          </div>

          <div className="mt-16 flex justify-center gap-12">
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-400"></p>
              <p className="text-slate-400 mt-2"></p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-400"></p>
              <p className="text-slate-400 mt-2"></p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-400"></p>
              <p className="text-slate-400 mt-2"></p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Desktop Premium */}
      <section ref={el => { if (el) sectionRefs.current['about'] = el }} id="about" className="section-animate relative py-32 px-8 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-black mb-20 text-center titleJiggle">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">About</span> <span className="text-white">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-slate-300 leading-relaxed">
                I am a B.E. CSE student at Sathyabama Institute of Science and Technology, specializing in software development, AI projects, and web applications. 
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                I enjoy building real projects and learning new technologies to solve real-world problems.
              </p>
              <div className="flex gap-4 flex-wrap">
                <span className="px-4 py-2 bg-slate-700/50 rounded-full text-cyan-300 border border-cyan-400/30">Full-Stack Developer</span>
                <span className="px-4 py-2 bg-slate-700/50 rounded-full text-cyan-300 border border-cyan-400/30">AI Enthusiast</span>
                <span className="px-4 py-2 bg-slate-700/50 rounded-full text-cyan-300 border border-cyan-400/30">Problem Solver</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="achievement-card">
                <p className="text-5xl font-black text-cyan-400">03+</p>
                <p className="text-slate-400 mt-3 font-semibold">Years Learning</p>
                <p className="text-sm text-slate-500 mt-2">Continuous growth & development</p>
              </div>
              <div className="achievement-card">
                <p className="text-5xl font-black text-cyan-400">05+</p>
                <p className="text-slate-400 mt-3 font-semibold">Projects</p>
                <p className="text-sm text-slate-500 mt-2">Real-world applications</p>
              </div>
              <div className="achievement-card">
                <p className="text-5xl font-black text-cyan-400">2</p>
                <p className="text-slate-400 mt-3 font-semibold">Hackathon Awards</p>
                <p className="text-sm text-slate-500 mt-2">Recognized excellence</p>
              </div>
              <div className="achievement-card">
                <p className="text-5xl font-black text-cyan-400">36h</p>
                <p className="text-slate-400 mt-3 font-semibold">Code Sprint</p>
                <p className="text-sm text-slate-500 mt-2">Intensive learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section - Desktop Premium */}
      <section ref={el => { if (el) sectionRefs.current['achievements'] = el }} id="achievements" className="section-animate relative py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-black mb-20 text-center titleJiggle">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Achievements</span>
          </h2>

          <div className="space-y-8">
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="text-5xl min-w-fit">🥈</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white">AI4AP Police Hackathon</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    Secured Runner-Up position and awarded ₹50,000 for developing an AI-powered police assistance system.
                  </p>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li>• AI Chatbot for scam victim assistance</li>
                    <li>• Automated case workflow management</li>
                    <li>• 91 CrPC notice generation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="text-5xl min-w-fit">🏆</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white">Vihansa 11:11 Hackathon</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    Special Jury Award for Best UI/UX Design with ₹2,000 prize for AI Mental Health Assistant.
                  </p>
                  <ul className="space-y-1 text-sm text-slate-400">
                    <li>• 24/7 AI Chatbot support</li>
                    <li>• Real-time sentiment analysis</li>
                    <li>• Doctor finder & appointment booking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Desktop Premium */}
      <section ref={el => { if (el) sectionRefs.current['skills'] = el }} id="skills" className="section-animate relative py-32 px-8 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-black mb-20 text-center titleJiggle">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Skills</span> <span className="text-white">& Expertise</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="card-skill group">
              <h3 className="text-2xl font-bold mb-8 text-cyan-300 group-hover:text-cyan-200 transition-colors">Programming</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> C
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Java
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Python
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> JavaScript
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> HTML & CSS
                </li>
              </ul>
            </div>

            <div className="card-skill group">
              <h3 className="text-2xl font-bold mb-8 text-cyan-300 group-hover:text-cyan-200 transition-colors">Technologies & Tools</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Flask
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> React.js
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Node.js
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> MongoDB
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Docker
                </li>
              </ul>
            </div>

            <div className="card-skill group">
              <h3 className="text-2xl font-bold mb-8 text-cyan-300 group-hover:text-cyan-200 transition-colors">Core Skills</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Frontend Dev
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> AI Automation
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Chatbots Development
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> IoT Integration
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Full-Stack Dev
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-skill group">
              <h3 className="text-2xl font-bold mb-8 text-cyan-300 group-hover:text-cyan-200 transition-colors">Soft Skills</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Problem Solving
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Teamwork
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Communication
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Leadership
                </li>
              </ul>
            </div>

            <div className="card-skill group">
              <h3 className="text-2xl font-bold mb-8 text-cyan-300 group-hover:text-cyan-200 transition-colors">Languages Known</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> English
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Tamil
                </li>
                <li className="flex items-center gap-3 group-hover:translate-x-2 transition-transform">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span> Hindi 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Desktop Premium */}
      <section ref={el => { if (el) sectionRefs.current['projects'] = el }} id="projects" className="section-animate relative py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-black mb-20 text-center titleJiggle">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Featured</span> <span className="text-white">Projects</span>
          </h2>

          <div className="space-y-12">
            <div className="card-project group">
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">AI-Based IT Act Case Automation System</h3>
                </div>
                <span className="bg-blue-900/60 text-blue-300 px-4 py-2 rounded-lg text-sm font-bold border border-blue-400/40 min-w-fit ml-4">AI/ML</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-slate-300 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Developed AI-powered chatbot for scam victims
                </li>
                <li className="text-slate-300 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Automated scam message classification
                </li>
                <li className="text-slate-300 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Generated 91 CrPC notices automatically
                </li>
                <li className="text-slate-300 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Built case workflow dashboard
                </li>
              </ul>
            </div>

            <div className="card-project group">
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">AI-Powered Mental Health Assistant</h3>
                </div>
                <span className="bg-pink-900/60 text-pink-300 px-4 py-2 rounded-lg text-sm font-bold border border-pink-400/40 min-w-fit ml-4">
                  <div>AI/ML +</div>
                  <div>Web</div>
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-slate-300 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Developed a mental wellness platform with AI chatbot, voice interaction, sentiment analysis, and emotion 
detection
                </li>
                <li className="text-slate-300 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Added a medicine tracker for daily reminders and a medicine finder for issue-based suggestions
                </li>
                <li className="text-slate-300 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Integrated a doctor finder to recommend mental-health specialists based on symptoms.
                </li>
                <li className="text-slate-300 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                   Built an appointment booking system for connecting users with professionals
                </li>
                <li className="text-slate-300 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                   Included interactive games for stress relief and mood improvement
                </li>
              </ul>
            </div>

            <div className="card-project group">
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">Vedanthangal & Karikili Sanctuary Website</h3>
                </div>
                <span className="bg-green-900/60 text-green-300 px-4 py-2 rounded-lg text-sm font-bold border border-green-400/40 min-w-fit ml-4">
                  <div>Tourism</div>
                  <div>+ Web</div>
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-slate-300 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Full website for bird sanctuaries
                </li>
                <li className="text-slate-300 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Map navigation to nearby attractions
                </li>
                <li className="text-slate-300 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  360° virtual viewing experience
                </li>
                <li className="text-slate-300 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Clean UI and accessibility focus
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Desktop Premium */}
      <section ref={el => { if (el) sectionRefs.current['contact'] = el }} id="contact" className="section-animate relative py-32 px-8 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-black mb-12 titleJiggle">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <p className="text-2xl text-slate-300 mb-16 leading-relaxed">
            I'm open to internship opportunities and always interested in discussing new projects and innovative ideas.
          </p>
          <div className="flex gap-8 justify-center flex-wrap">
            <a href="mailto:abduljaleelamj10@gmail.com" className="btn-primary group">
              <FaEnvelope className="inline mr-3 group-hover:-translate-y-1 transition-transform" /> Email Me
            </a>
            <a href="https://www.linkedin.com/in/abdul-jaleel-am/" target="_blank" rel="noopener noreferrer" className="btn-secondary group">
              <FaLinkedin className="inline mr-3 group-hover:-translate-y-1 transition-transform" /> LinkedIn
            </a>
            <a href="https://github.com/Abdul-Jaleel-10" target="_blank" rel="noopener noreferrer" className="btn-secondary group">
              <FaGithub className="inline mr-3 group-hover:-translate-y-1 transition-transform" /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-8 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent border-t border-cyan-500/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-lg">
            © {new Date().getFullYear()} Abdul Jaleel A M. All rights reserved. | Crafted with precision and passion.
          </p>
        </div>
      </footer>
    </main>
  )
}
