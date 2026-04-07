"use client"

import { useEffect, useState } from "react"
import FadeIn from "./fade-in"

function LiveClock() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: "America/Los_Angeles",
        })
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return <span>{time || "--:--"}</span>
}

const tools = [
  "Figma",
  "Next.js",
  "React",
  "Tailwind",
  "TypeScript",
  "Framer",
]

export default function BentoHero() {
  return (
    <div className="w-full h-full grid grid-cols-2 md:grid-cols-6 gap-2.5 md:gap-3 auto-rows-[minmax(160px,1fr)] md:auto-rows-[1fr]">
      {/* Row 1: Name (4 cols) + Role (2 cols) */}

      {/* Name — hero tile */}
      <FadeIn className="col-span-2 md:col-span-4 md:row-span-2">
        <div className="h-full rounded-2xl border border-zinc-700 bg-white/[0.01] hover:border-zinc-500 transition-all duration-500 p-8 md:p-10 flex flex-col justify-end">
          <div className="flex items-end gap-2 mb-1">
            <span className="text-accent text-[24px] md:text-[32px] font-display font-bold leading-none mb-1">_</span>
          </div>
          <h1 className="font-display text-[48px] md:text-[64px] lg:text-[76px] leading-[0.95] tracking-tight text-white font-bold">
            Anne
            <br />
            Merie
          </h1>
        </div>
      </FadeIn>

      {/* Role tile */}
      <FadeIn className="col-span-1 md:col-span-2" delay={100}>
        <div className="h-full rounded-2xl border border-zinc-700 bg-white/[0.01] hover:border-zinc-500 transition-all duration-500 p-5 md:p-6 flex flex-col justify-between">
          <p className="text-[18px] md:text-[22px] text-white font-display font-medium leading-snug">
            Product
            <br />
            Designer
          </p>
          <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mt-3">
            <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          </div>
        </div>
      </FadeIn>

      {/* Bunny tile */}
      <FadeIn className="col-span-1 md:col-span-2" delay={150}>
        <div className="h-full rounded-2xl border border-zinc-700 bg-white/[0.01] hover:border-zinc-500 transition-all duration-500 flex items-center justify-center">
          <div className="text-center">
            <span className="text-[44px] block animate-wiggle">🐰</span>
            <p className="text-[11px] text-[#8B8F9A] mt-2 uppercase tracking-wider">Hi, there</p>
          </div>
        </div>
      </FadeIn>

      {/* Row 2: Clock (2 cols) + Tagline (2 cols) + Status (2 cols) */}

      {/* Clock tile */}
      <FadeIn className="col-span-1 md:col-span-2" delay={200}>
        <div className="h-full rounded-2xl border border-zinc-700 bg-white/[0.01] hover:border-zinc-500 transition-all duration-500 p-5 md:p-6 flex flex-col justify-between">
          <p className="text-[10px] text-[#8B8F9A] uppercase tracking-widest">Local time</p>
          <div>
            <p className="text-[26px] md:text-[30px] text-white font-display font-bold tracking-tight">
              <LiveClock />
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <svg className="h-3 w-3 text-[#8B8F9A]" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="7" r="2.5" />
                <path d="M8 1.5C5 1.5 2.5 4 2.5 7C2.5 10.5 8 14.5 8 14.5S13.5 10.5 13.5 7C13.5 4 11 1.5 8 1.5Z" />
              </svg>
              <span className="text-[12px] text-[#8B8F9A]">Irvine, CA</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Tagline tile */}
      <FadeIn className="col-span-1 md:col-span-2" delay={250}>
        <div className="h-full rounded-2xl border border-zinc-700 bg-white/[0.01] hover:border-zinc-500 transition-all duration-500 p-5 md:p-6 flex flex-col justify-center">
          <p className="text-[16px] md:text-[18px] text-white/80 font-light leading-relaxed">
            From user insights to polished UI to shipped prototypes.
          </p>
        </div>
      </FadeIn>

      {/* Status tile */}
      <FadeIn className="col-span-2 md:col-span-2" delay={300}>
        <div className="h-full rounded-2xl border border-zinc-700 bg-white/[0.01] hover:border-zinc-500 transition-all duration-500 p-5 md:p-6 flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <p className="text-[11px] text-[#8B8F9A] uppercase tracking-widest">Available</p>
          </div>
          <div>
            <p className="text-[16px] text-white font-display font-medium">Open to opportunities</p>
            <p className="text-[12px] text-[#8B8F9A] mt-0.5">Let&apos;s work together</p>
          </div>
        </div>
      </FadeIn>

      {/* Row 3: Skills (4 cols) + Design focus (2 cols) */}

      {/* Skills tile */}
      <FadeIn className="col-span-2 md:col-span-4" delay={350}>
        <div className="h-full rounded-2xl border border-zinc-700 bg-white/[0.01] hover:border-zinc-500 transition-all duration-500 p-5 md:p-6 flex flex-col justify-center">
          <p className="text-[10px] text-[#8B8F9A] uppercase tracking-widest mb-3">Tools & Skills</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 text-[11px] rounded-full border border-zinc-800 text-[#B0B3BC] bg-white/[0.02] font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* View Projects tile */}
      <FadeIn className="col-span-2 md:col-span-2" delay={400}>
        <a href="#projects" className="h-full block group">
          <div className="h-full rounded-2xl border border-zinc-700 bg-white/[0.01] hover:border-zinc-500 transition-all duration-500 p-5 md:p-6 flex items-center justify-center gap-3">
            <span className="text-[28px] font-display font-semibold text-accent tracking-tight uppercase">VIEW PROJECTS</span>
            <div className="flex items-center transition-all duration-300 group-hover:translate-x-1 shrink-0">
              <svg
                width="38" height="30" viewBox="0 0 38 30" fill="none"
                style={{}}
              >
                <path d="M4 3 L15 15 L4 27" stroke="#C6FE21" strokeOpacity="0.85" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/>
                <path d="M19 3 L30 15 L19 27" stroke="#C6FE21" strokeOpacity="0.85" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"/>
              </svg>
            </div>
          </div>
        </a>
      </FadeIn>
    </div>
  )
}
