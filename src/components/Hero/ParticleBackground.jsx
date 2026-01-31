import { useEffect, useRef } from 'react'
import './ParticleBackground.css'

function ParticleBackground() {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Create particles
        const particleCount = 50

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div')
            particle.className = 'particle'

            // Random properties
            const size = Math.random() * 4 + 2
            const x = Math.random() * 100
            const y = Math.random() * 100
            const duration = Math.random() * 20 + 10
            const delay = Math.random() * 5
            const opacity = Math.random() * 0.5 + 0.2

            particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        opacity: ${opacity};
      `

            container.appendChild(particle)
        }

        // Cleanup
        return () => {
            container.innerHTML = ''
        }
    }, [])

    return <div ref={containerRef} className="particle-background" />
}

export default ParticleBackground
