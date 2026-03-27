"use client"

import { useState, useEffect } from "react"

export default function TypingText({ text, className }: { text: string; className?: string }) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [text])

  return (
    <span className={className}>
      {displayed}
      <span className={`inline-block w-[3px] h-[1em] bg-white ml-1 align-middle ${done ? "animate-blink" : ""}`} />
    </span>
  )
}
