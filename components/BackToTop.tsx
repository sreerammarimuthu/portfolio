"use client"

import { useState, useEffect } from "react"
import { FaArrowUp } from "react-icons/fa"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-violet-600 text-white p-2 rounded-full shadow-lg hover:bg-violet-700 transition-colors duration-300 z-50"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  )
}

