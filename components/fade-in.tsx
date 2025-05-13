"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  threshold?: number
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.1,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Map directions to transform values
  const directionMap = {
    up: "translate3d(0, 30px, 0)",
    down: "translate3d(0, -30px, 0)",
    left: "translate3d(30px, 0, 0)",
    right: "translate3d(-30px, 0, 0)",
    none: "translate3d(0, 0, 0)",
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin: "0px",
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : directionMap[direction],
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
