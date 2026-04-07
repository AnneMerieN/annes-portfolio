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

function SkillsRadar() {
  const skills = [
    { label: "UX Design", value: 0.92 },
    { label: "Research", value: 0.80 },
    { label: "Strategy", value: 0.70 },
    { label: "Dev", value: 0.75 },
    { label: "Product", value: 0.88 },
  ]

  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 350)
    return () => clearTimeout(t)
  }, [])

  const n = skills.length
  const cx = 100, cy = 105, r = 66

  const pt = (i: number, v: number) => {
    const a = (2 * Math.PI / n) * i - Math.PI / 2
    return { x: cx + r * v * Math.cos(a), y: cy + r * v * Math.sin(a) }
  }

  const poly = (level: number) =>
    Array.from({ length: n }, (_, i) => {
      const { x, y } = pt(i, level)
      return `${x},${y}`
    }).join(" ")

  const dataPoints = skills.map((s, i) => {
    const { x, y } = pt(i, s.value)
    return `${x},${y}`
  }).join(" ")

  return (
    <div
      className="h-full rounded-2xl border border-zinc-700 bg-white/[0.01] hover:border-zinc-500 transition-all duration-500 p-4 flex items-center justify-center"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 1s cubic-bezier(0.16,1,0.3,1)" }}
    >
      <svg viewBox="-20 0 240 200" className="w-full h-full">
        {/* Grid polygons */}
        {[0.25, 0.5, 0.75, 1].map((lvl) => (
          <polygon key={lvl} points={poly(lvl)} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        ))}
        {/* Axis lines */}
        {skills.map((_, i) => {
          const { x, y } = pt(i, 1)
          return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
        })}
        {/* Data polygon */}
        <polygon points={dataPoints} fill="rgba(198,254,33,0.12)" stroke="#C6FE21" strokeWidth="1.5" />
        {/* Dots */}
        {skills.map((s, i) => {
          const { x, y } = pt(i, s.value)
          return <circle key={i} cx={x} cy={y} r="3.5" fill="#C6FE21" />
        })}
        {/* Labels */}
        {skills.map((s, i) => {
          const { x, y } = pt(i, 1.32)
          return (
            <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fill="#8B8F9A" fontSize="9.5">
              {s.label}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

export default function BentoHero() {
  return (
    <div className="w-full h-full grid grid-cols-2 md:grid-cols-6 gap-2.5 md:gap-3 auto-rows-[minmax(160px,1fr)] md:auto-rows-[1fr]">

      {/* Name — hero tile: 4 cols, 2 rows */}
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

      {/* Skills Radar — 2 cols, 2 rows (replaces Role + Bunny) */}
      <FadeIn className="col-span-2 md:col-span-2 md:row-span-2" delay={100}>
        <SkillsRadar />
      </FadeIn>

      {/* Clock tile */}
      <FadeIn className="col-span-1 md:col-span-2" delay={200}>
        <div className="h-full rounded-2xl border border-zinc-700 bg-white/[0.01] hover:border-zinc-500 transition-all duration-500 p-5 md:p-6 flex flex-col justify-between">
          <p className="text-[10px] text-[#8B8F9A] uppercase tracking-widest">Local time</p>
          <div>
            <p className="text-[26px] md:text-[30px] text-white font-display font-bold tracking-tight">
              <LiveClock />
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <svg className="h-3 w-3 text-[#8B8F9A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="10" r="3" />
                <path d="M12 2a8 8 0 0 1 8 8c0 5.4-7.2 12.5-7.5 12.8a.75.75 0 0 1-1 0C11.2 22.5 4 15.4 4 10a8 8 0 0 1 8-8z" />
              </svg>
              <span className="text-[12px] text-[#8B8F9A]">Irvine, CA</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Tagline tile — with bunny */}
      <FadeIn className="col-span-1 md:col-span-2" delay={250}>
        <div className="h-full rounded-2xl border border-zinc-700 bg-white/[0.01] hover:border-zinc-500 transition-all duration-500 p-5 md:p-6 flex flex-col items-center justify-center gap-2">
          <p className="text-[11px] text-[#8B8F9A] uppercase tracking-wider">Hi, there</p>
          <span className="text-[44px] animate-wiggle">🐰</span>
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

      {/* Now Playing tile */}
      <FadeIn className="col-span-2 md:col-span-4" delay={350}>
        <div className="h-full rounded-2xl border border-zinc-700 bg-white/[0.01] hover:border-zinc-500 transition-all duration-500 p-5 md:p-6 flex items-center gap-5">
          {/* Album art */}
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg shrink-0 overflow-hidden">
            <img src="/images/stateside.jpg" alt="Stateside" className="w-full h-full object-cover" />
          </div>

          {/* Song info + progress */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              {/* Animated sound bars */}
              <div className="flex items-end gap-[2px] h-3">
                {[0.4, 1, 0.6, 0.8, 0.5].map((h, i) => (
                  <div
                    key={i}
                    className="w-[2px] rounded-full bg-accent"
                    style={{
                      height: `${h * 100}%`,
                      animation: `soundbar 0.8s ease-in-out ${i * 0.12}s infinite alternate`,
                    }}
                  />
                ))}
              </div>
              <p className="text-[10px] text-[#8B8F9A] uppercase tracking-widest">Now Playing</p>
            </div>
            <p className="text-[15px] md:text-[16px] text-white font-display font-semibold truncate">Stateside</p>
            <p className="text-[12px] text-[#8B8F9A] truncate">PinkPantheress & Zara Larsson</p>

            {/* Progress bar */}
            <div className="mt-3 flex items-center gap-2">
              <span className="text-[10px] text-[#8B8F9A]">1:12</span>
              <div className="flex-1 h-[3px] bg-zinc-700 rounded-full overflow-hidden">
                <div className="h-full w-[38%] bg-accent rounded-full" />
              </div>
              <span className="text-[10px] text-[#8B8F9A]">2:58</span>
            </div>
          </div>

          {/* Spotify logo */}
          <svg className="w-6 h-6 shrink-0 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </div>
      </FadeIn>

      <style>{`
        @keyframes soundbar {
          from { transform: scaleY(0.3); }
          to { transform: scaleY(1); }
        }
      `}</style>

      {/* View Projects tile */}
      <FadeIn className="col-span-2 md:col-span-2" delay={400}>
        <a href="#projects" className="h-full block group">
          <div className="h-full rounded-2xl border border-zinc-700 bg-white/[0.01] hover:border-accent transition-all duration-500 p-5 md:p-6 flex items-center justify-center gap-3">
            <span className="text-[28px] font-display font-semibold text-accent tracking-tight uppercase">VIEW PROJECTS</span>
            <div className="flex items-center transition-all duration-300 group-hover:translate-x-1 shrink-0">
              <svg width="38" height="30" viewBox="0 0 38 30" fill="none">
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
