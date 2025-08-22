"use client"

import { useEffect, useRef } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaFileDownload } from "react-icons/fa"

const RESUME_URL =  "/portfolio/Resume_Sreeram Marimuthu.pdf"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Create particles
    const particles: { x: number; y: number; vx: number; vy: number }[] = []
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    // Animation
    const animate = () => {
      ctx.fillStyle = "rgba(26, 5, 51, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2)
        ctx.fill()

        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 100) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - dist / 100)})`
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
    }
  }, [])

  return (
    <main className="min-h-screen relative bg-gradient-to-b from-[#140426] via-[#1f0733] to-[#2d0b44] text-white">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Sreeram Marimuthu</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-200">
          Data Scientist | AI/ML Researcher
        </h2>
        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          <a
            href="mailto:sreerammarimuthu@gmail.com"
            className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all mb-2 sm:mb-0"
            aria-label="Email"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/sreerammarimuthu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all mb-2 sm:mb-0"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sreeram-marimuthu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all mb-2 sm:mb-0"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href={RESUME_URL}
            download
            className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all mb-2 sm:mb-0"
            aria-label="Download Resume"
          >
            <FaFileDownload className="w-6 h-6" />
          </a>
        </div>
        <div
          className="absolute bottom-8 animate-bounce cursor-pointer"
          onClick={() => {
            const aboutSection = document.getElementById("about")
            aboutSection?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <FaChevronDown className="w-6 h-6" />
        </div>
      </div>
    </main>
  )
}

