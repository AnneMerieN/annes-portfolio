import Image from "next/image"
import FadeIn from "@/components/fade-in"
import { Menu, Grid3X3, Swords, BarChart3 } from "lucide-react"

export default function TFTSwitchCaseStudy() {
  return (
    <div className="px-6 md:px-20 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="text-[13px] text-accent uppercase tracking-[0.7px] mb-4">
          Game UI/UX
        </p>
        <h1 className="text-[34px] md:text-[44px] font-normal text-white leading-tight mb-3">
          Teamfight Tactics for Nintendo Switch
        </h1>
        <p className="text-[16px] text-[#8B8F9A]">
          Solo Project · Jan – May 2025
        </p>
      </div>

      {/* Brief + Metadata */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-10 ">
        <p className="text-[17px] text-[#B0B3BC] leading-[1.8]">
          Exploring how Riot Games' auto-battler could be adapted for handheld and controller play — without losing what makes TFT fun.
        </p>
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          <div>
            <p className="text-[12px] text-[#8B8F9A] uppercase tracking-wider mb-1">Role</p>
            <p className="text-[16px] text-white">UX Designer</p>
          </div>
          <div>
            <p className="text-[12px] text-[#8B8F9A] uppercase tracking-wider mb-1">Tools</p>
            <p className="text-[16px] text-white">Figma</p>
          </div>
          <div>
            <p className="text-[12px] text-[#8B8F9A] uppercase tracking-wider mb-1">Timeline</p>
            <p className="text-[16px] text-white">Jan – May 2025</p>
          </div>
          <div>
            <p className="text-[12px] text-[#8B8F9A] uppercase tracking-wider mb-1">Type</p>
            <p className="text-[16px] text-white">Case Study</p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden bg-[#212121] relative aspect-[16/9] mb-16">
        <Image
          src="/images/switch (1).png"
          alt="TFT on Nintendo Switch"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* 00 — Overview */}
      <FadeIn className="mb-28">
        <SectionHeader number="00" title="Overview" />
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9]">
          TFT is a strategy auto-battler built for PC — mouse-heavy, info-dense, and fast-paced. If it launched on Switch, a straight port wouldn't cut it. Players need an experience that feels native to console. I scoped this project around the player journey leading up to gameplay — menus, lobbies, and setup flows — plus one in-game screen to show how UX principles carry into the match itself.
        </p>
      </FadeIn>

      {/* 01 — Research */}
      <FadeIn className="mb-28">
        <SectionHeader number="01" title="Research" />

        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-8">
          PC-first games like TFT rely on drag-and-drop, dense HUDs, and precise mouse control. On the Switch, these patterns become friction points.
        </p>

        <div className="space-y-4 mb-14">
          {[
            "Menus feel slow to navigate with Joy-Cons",
            "Handheld mode makes text and icons too small",
            "Drag-and-drop placement is imprecise on joystick",
            "Nested item menus overwhelm during short round timers",
          ].map((item) => (
            <p key={item} className="text-[16px] text-[#B0B3BC] pl-5 ">
              {item}
            </p>
          ))}
        </div>

        <h3 className="text-[22px] text-white mb-2">Competitive Analysis</h3>
        <p className="text-[16px] text-[#8B8F9A] mb-8">
          Three games that successfully transitioned to console or mobile.
        </p>

        <div className="space-y-6 mb-14">
          {[
            { game: "Hearthstone", takeaway: "Simplify complex interactions without losing clarity." },
            { game: "Civilization VI", takeaway: "Radial menus work but must stay fast and shallow." },
            { game: "Wild Rift", takeaway: "Balance tactical speed with accessible shortcuts." },
          ].map((item) => (
            <div key={item.game} className="pb-6  last:border-0">
              <p className="text-[17px] text-white font-medium mb-1">{item.game}</p>
              <p className="text-[16px] text-[#B0B3BC]">{item.takeaway}</p>
            </div>
          ))}
        </div>

        <h3 className="text-[22px] text-white mb-2">User Personas</h3>
        <p className="text-[16px] text-[#8B8F9A] mb-8">
          Three player types grounded my design decisions.
        </p>

        <div className="space-y-6">
          {[
            { name: "Alex", type: "PC Gamer → Switch", goal: "Casual TFT on the go with Joy-Con-friendly UI." },
            { name: "Maya", type: "Student", goal: "Fast session setup, readable in handheld mode." },
            { name: "Ryan", type: "Competitive Streamer", goal: "Controller shortcuts and detailed stats visibility." },
          ].map((p) => (
            <div key={p.name} className="pb-6  last:border-0">
              <div className="flex items-baseline gap-3 mb-1">
                <p className="text-[16px] text-white font-medium">{p.name}</p>
                <p className="text-[13px] text-[#8B8F9A]">{p.type}</p>
              </div>
              <p className="text-[16px] text-[#B0B3BC]">{p.goal}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* 02 — Define */}
      <FadeIn className="mb-28">
        <SectionHeader number="02" title="Define" />

        <div className="py-10 mb-10 ">
          <p className="text-[13px] text-accent uppercase tracking-wider mb-3">How might we...</p>
          <p className="text-[24px] text-white leading-snug">
            Bring the depth of PC-first strategy games to console with controls that feel natural and intuitive?
          </p>
        </div>

        <h3 className="text-[22px] text-white mb-6">Key Pain Points</h3>

        <div className="space-y-4 mb-14">
          {[
            { problem: "Mouse/touch-based UI", impact: "Doesn't translate to Joy-Cons" },
            { problem: "Dense on-screen info", impact: "Unreadable in handheld mode" },
            { problem: "Drag-and-drop placement", impact: "Difficult with analog sticks" },
            { problem: "Complex nested menus", impact: "Needs streamlined interaction" },
          ].map((item) => (
            <div key={item.problem} className="flex items-center text-[15px]">
              <span className="text-white flex-1">{item.problem}</span>
              <span className="text-[#8B8F9A] mx-6">→</span>
              <span className="text-[#B0B3BC] flex-1">{item.impact}</span>
            </div>
          ))}
        </div>

        <h3 className="text-[22px] text-white mb-2">Journey Map</h3>
        <p className="text-[16px] text-[#8B8F9A] mb-8">
          Breakdowns occurred at every stage of the player journey.
        </p>

        {/* Infographic journey map */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-[40px] left-0 right-0 h-[2px] bg-gradient-to-r from-accent/20 via-accent to-accent/20 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              { stage: "Menu → Lobby", goal: "Get into a match quickly", pain: "Menus feel slower on controller", icon: Menu, emotion: "Annoyed" },
              { stage: "Setup", goal: "Place early units", pain: "Drag/drop clunky with joystick", icon: Grid3X3, emotion: "Frustrated" },
              { stage: "In-Game", goal: "Manage shop, bench, items", pain: "HUD cluttered, menus nested", icon: Swords, emotion: "Overwhelmed" },
              { stage: "End Results", goal: "Review match stats", pain: "Less detailed than PC", icon: BarChart3, emotion: "Mixed" },
            ].map((step, i) => {
              const Icon = step.icon
              return (
              <div key={step.stage} className="flex flex-col items-center text-center">
                {/* Node */}
                <div className="w-16 h-16 rounded-full bg-[#2A2A2A] border-2 border-accent/50 flex items-center justify-center mb-4 relative z-10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>

                {/* Stage label */}
                <p className="text-[15px] text-white font-medium mb-1">{step.stage}</p>
                <p className="text-[13px] text-accent mb-3">{step.emotion}</p>

                {/* Goal */}
                <div className="mb-2">
                  <p className="text-[11px] text-[#8B8F9A] uppercase tracking-wider mb-1">Goal</p>
                  <p className="text-[13px] text-[#B0B3BC] leading-relaxed">{step.goal}</p>
                </div>

                {/* Pain */}
                <div>
                  <p className="text-[11px] text-[#8B8F9A] uppercase tracking-wider mb-1">Pain</p>
                  <p className="text-[13px] text-[#B0B3BC] leading-relaxed">{step.pain}</p>
                </div>

                {/* Arrow between steps (mobile) */}
                {i < 3 && (
                  <div className="text-accent text-[20px] mt-4 md:hidden">↓</div>
                )}
              </div>
              )
            })}
          </div>

          {/* Emotion curve */}
          <div className="mt-8 relative h-[100px] hidden md:block">
            <svg viewBox="0 0 800 100" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {/* Fill area under curve */}
              <path
                d="M 0,15 C 80,20 120,45 200,55 C 280,65 350,85 400,90 C 450,95 520,80 600,60 C 680,40 750,35 800,38 L 800,100 L 0,100 Z"
                fill="url(#curveGradient)"
                className="text-accent"
              />
              {/* Curve line */}
              <path
                d="M 0,15 C 80,20 120,45 200,55 C 280,65 350,85 400,90 C 450,95 520,80 600,60 C 680,40 750,35 800,38"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-accent"
              />
            </svg>
            <div className="flex justify-between text-[11px] text-[#8B8F9A] mt-2">
              <span>😒 Annoyed</span>
              <span>😠 Frustrated</span>
              <span>😡 Overwhelmed</span>
              <span>😕 Mixed</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* 03 — Ideate */}
      <FadeIn className="mb-28">
        <SectionHeader number="03" title="Ideate" />

        <h3 className="text-[22px] text-white mb-2">Concepts</h3>
        <p className="text-[16px] text-[#8B8F9A] mb-8">
          Three interaction patterns designed for controller-first play.
        </p>

        <div className="space-y-6 mb-14">
          {[
            { title: "Contextual Shortcuts", desc: "System detects what the player is hovering and shows relevant button prompts automatically." },
            { title: "Snap Grid", desc: "Cursor auto-snaps to valid board positions as the joystick moves — no pixel-level precision needed." },
            { title: "Layered HUD", desc: "Default view shows basic info. Press a button to expand advanced stats on demand." },
          ].map((c) => (
            <div key={c.title} className="pb-6  last:border-0">
              <p className="text-[17px] text-white font-medium mb-1">{c.title}</p>
              <p className="text-[16px] text-[#B0B3BC] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-[22px] text-white mb-6">Guiding Principles</h3>

        <div className="grid grid-cols-3 gap-8 mb-14">
          {[
            { title: "Fast First", desc: "Core actions are always one press away." },
            { title: "Readable Anywhere", desc: "UI scales for handheld and docked." },
            { title: "Depth Preserved", desc: "Advanced details via progressive disclosure." },
          ].map((p) => (
            <div key={p.title}>
              <p className="text-[15px] text-accent font-medium mb-2">{p.title}</p>
              <p className="text-[15px] text-[#B0B3BC] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-[22px] text-white mb-2">Controller Mapping</h3>
        <p className="text-[16px] text-[#8B8F9A] mb-6">
          Joy-Con layout mirroring Nintendo conventions while prioritizing TFT's most common actions.
        </p>
        <img
          src="/images/tft-controller-mapping.png"
          alt="Joy-Con Controller Mapping"
          className="w-full rounded-2xl"
        />
      </FadeIn>

      {/* 04 — Prototype */}
      <FadeIn className="mb-28">
        <SectionHeader number="04" title="Prototype" />
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-10">
          Black-and-white wireframes to test layout, flows, and controller mappings before visual polish.
        </p>

        <div className="space-y-6 mb-12">
          {[
            "/images/Loading Screen - Wireframe.png",
            "/images/Lobby - Wireframe.png",
            "/images/Match Found - Wireframe.png",
            "/images/Loading Screen - Wireframe (1).png",
            "/images/In-Game - Wireframe.png",
          ].map((src) => (
            <img key={src} src={src} alt="Wireframe" className="w-full rounded-2xl" />
          ))}
        </div>

        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-6">
          Video prototype with color mockups exploring readability and HUD scaling.
        </p>
        <div className="rounded-2xl overflow-hidden">
          <video
            className="w-full"
            controls
            playsInline
            preload="metadata"
            poster="/images/Home Tile 2.png"
          >
            <source src="/images/prototype.mp4" type="video/mp4" />
          </video>
        </div>
      </FadeIn>

      {/* 05 — Reflections */}
      <FadeIn className="mb-28">
        <SectionHeader number="05" title="Reflections" />

        <div className="space-y-6 mb-10">
          {[
            { title: "Controller First", desc: "Reduce steps, favor direct actions, keep frequent inputs on primary buttons." },
            { title: "Clarity Over Detail", desc: "Scale type and HUD for distance — show only what matters in the moment." },
            { title: "Responsive Feedback", desc: "Immediate audio/visual confirmation beats dense menus under round timers." },
          ].map((item) => (
            <div key={item.title} className="pb-6  last:border-0">
              <p className="text-[17px] text-white font-medium mb-1">{item.title}</p>
              <p className="text-[16px] text-[#B0B3BC] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-[17px] text-[#B0B3BC] leading-[1.9]">
          I initially scoped too broadly. Narrowing to menus, setup flows, and one in-game proof of concept made the work more focused. The biggest takeaway: console UX succeeds when focus, legibility, and fast actions align — depth should come from gameplay decisions, not UI complexity.
        </p>
      </FadeIn>

      {/* 06 — Next Steps */}
      <FadeIn>
        <SectionHeader number="06" title="Next Steps" />
        <div className="space-y-6">
          {[
            { title: "Expand the Prototype", desc: "Add HUD states and onboarding flows to the current proof of concept." },
            { title: "Grow UI Skills", desc: "Improve visual polish in Figma while keeping a UX-first approach." },
            { title: "Test With Players", desc: "Validate Joy-Con mappings and HUD readability with usability sessions." },
            { title: "Keep Iterating", desc: "Evolve the design alongside TFT as an ongoing project." },
          ].map((step) => (
            <div key={step.title} className="pb-6  last:border-0">
              <p className="text-[17px] text-white font-medium mb-1">{step.title}</p>
              <p className="text-[16px] text-[#B0B3BC] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  )
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex gap-4 mb-8">
      <div className="w-1 bg-accent rounded-full self-stretch" />
      <div>
        <p className="text-[14px] text-accent font-medium uppercase tracking-widest">{number}</p>
        <h2 className="text-[22px] md:text-[28px] text-white font-normal">
          {title}
        </h2>
      </div>
    </div>
  )
}
