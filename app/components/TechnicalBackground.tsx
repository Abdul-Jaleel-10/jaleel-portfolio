"use client"

import { useEffect, useState } from 'react'

const codeSnippets = [
  '{ code: "success" }',
  '<div className="future" />',
  'async function init() {}',
  'npm install future',
  'git push origin main',
]

export default function TechnicalBackground() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Skip code animations on mobile for performance
    if (isMobile) return

    const createCodeElement = () => {
      const code = document.createElement('div')
      code.className = 'floating-code'
      code.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
      
      // Random position
      code.style.left = `${Math.random() * 100}vw`
      code.style.top = `${Math.random() * 100}vh`
      
      // Random opacity
      code.style.opacity = `${0.1 + Math.random() * 0.2}`
      
      // Random size
      const size = 0.7 + Math.random() * 0.5
      code.style.transform = `scale(${size})`
      
      document.body.appendChild(code)

      // Remove code element after animation
      setTimeout(() => {
        code.remove()
      }, 8000)
    }

    // Create code elements less frequently on lower-end devices
    const interval = setInterval(() => {
      createCodeElement()
    }, 3000)

    // Reduce initial code elements
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createCodeElement(), i * 300)
    }

    return () => clearInterval(interval)
  }, [isMobile])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Grid Pattern - Disabled on mobile */}
      {!isMobile && <div className="absolute inset-0 bg-grid-pattern"></div>}
      
      {/* Circuit Lines - Disabled on mobile */}
      {!isMobile && (
        <div className="absolute inset-0">
          <div className="circuit-line"></div>
          <div className="circuit-line"></div>
          <div className="circuit-line"></div>
          <div className="circuit-line"></div>
        </div>
      )}
      
      {/* Matrix Rain Effect - Simplified for mobile */}
      <div className="absolute inset-0 matrix-rain"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial opacity-90"></div>
    </div>
  )
} 