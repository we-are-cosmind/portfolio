"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

interface TypewriterProps {
  textKey: string
  speed?: number
  delay?: number
  className?: string
}

export default function Typewriter({ textKey, speed = 100, delay = 0, className = "" }: TypewriterProps) {
  const { t, language } = useLanguage()
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  // Reset when language changes
  useEffect(() => {
    setDisplayText("")
    setCurrentIndex(0)
    setIsTyping(false)

    const timeout = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(timeout)
  }, [language, delay])

  useEffect(() => {
    if (!isTyping) return

    const text = t(textKey)

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, isTyping, speed, t, textKey])

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-[2px] h-[1em] bg-white ml-1 align-middle animate-pulse"></span>
    </span>
  )
}
