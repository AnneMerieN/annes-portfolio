"use client"

import { useEffect, useRef, useState } from "react"

export default function GlowOrb() {
  const orbRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const parent = orbRef.current?.parentElement
    if (!parent) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return
      const rect = parent.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      orbRef.current.style.left = `${x - 200}px`
      orbRef.current.style.top = `${y - 200}px`
    }

    const handleEnter = () => setVisible(true)
    const handleLeave = () => setVisible(false)

    parent.addEventListener("mousemove", handleMouseMove)
    parent.addEventListener("mouseenter", handleEnter)
    parent.addEventListener("mouseleave", handleLeave)

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove)
      parent.removeEventListener("mouseenter", handleEnter)
      parent.removeEventListener("mouseleave", handleLeave)
    }
  }, [])

  return (
    <div
      ref={orbRef}
      className="pointer-events-none absolute w-[400px] h-[400px] rounded-full transition-opacity duration-500"
      style={{
        opacity: visible ? 1 : 0,
        background: "radial-gradient(circle, rgba(234,162,118,0.15) 0%, rgba(234,162,118,0.05) 40%, transparent 70%)",
        filter: "blur(50px)",
      }}
    />
  )
}
