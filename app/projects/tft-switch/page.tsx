import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Users, Wrench, Target } from "lucide-react";
import { Gamepad2, Sparkles, Zap } from "lucide-react";
import { Palette, UserCheck, RefreshCcw } from "lucide-react";

export default function TFTSwitchCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0f0f11] font-mono">
      {/* Header */}
      <header className="bg-zinc-900/60 backdrop-blur-lg border-b border-zinc-800/50 shadow-[0_0_15px_rgba(249,168,212,0.1)] sticky top-0 z-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 px-4">
            <Link
              href="/#projects"
              className="flex items-center gap-2 text-zinc-400 hover:text-pink-500 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wider">Back to Projects</span>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Title + Banner */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="eyebrow mb-4">
              UX Design
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
              Teamfight Tactics for Nintendo Switch
            </h1>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden relative">
              <Image
                src="/images/Thumbnail.png"
                alt="TFT Switch Adaptation Showcase Banner"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          </div>
        </section>

        {/* Single centered wrapper for ALL case study sections */}
        <div className="max-w-4xl mx-auto px-4">
          {/* 00 — Project Overview */}
          <section id="overview" aria-labelledby="overview-heading">
            <div className="section-header">
              <div className="w-1 h-12 bg-pink-500" />
              <div>
                <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">00</p>
                <h2 id="overview-heading" className="text-2xl md:text-4xl font-bold text-white">
                  PROJECT OVERVIEW
                </h2>
              </div>
            </div>

            <div className="section-block grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-300">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-zinc-400">Timeline</p>
                  <p className="font-semibold text-white flex items-center gap-2"><Calendar className="h-4 w-4" /> Jan. 2025 - May 2025</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Team</p>
                  <p className="font-semibold text-white flex items-center gap-2"><Users className="h-4 w-4" /> Solo Project</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-zinc-400">Tools</p>
                  <p className="font-semibold text-white flex items-center gap-2"><Wrench className="h-4 w-4" /> Figma</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Role</p>
                  <p className="font-semibold text-white flex items-center gap-2"><Target className="h-4 w-4" /> UX Designer</p>
                </div>
              </div>
            </div>

            <div className="section-block">
              <p className="body-text">
                Teamfight Tactics (TFT) is Riot Games' popular auto-battler strategy game, originally designed for PC with mouse-and-keyboard inputs. This project explores how TFT could be adapted for the Nintendo Switch by focusing on usability, controller interaction, and readability.
              </p>
              <p className="body-text mt-6">
                Rather than redesigning the entire game, I scoped the work around the player journey up to the in-game experience—menus, lobbies, and setup flows—with a single proof-of-concept in-game screen to demonstrate how UX principles extend into gameplay.
              </p>
            </div>
          </section>

          {/* 01 — EMPATHIZE */}
          <section id="empathize" aria-labelledby="empathize-heading" className="section-block-lg">
            <div className="section-header">
              <div className="w-1 h-12 bg-pink-500" />
              <div>
                <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">01</p>
                <h2 id="empathize-heading" className="text-2xl md:text-4xl font-bold text-white">
                  EMPATHIZE
                </h2>
              </div>
            </div>

            <h3 className="subheading">Why PC → Switch Is Challenging</h3>

            <div className="section-block">
              <p className="body-text">
                PC-first games like TFT rely heavily on drag-and-drop mechanics, dense HUD layouts, 
                and precise mouse control. On the Switch, these same patterns become friction points:
              </p>

              <ul className="list-disc list-inside space-y-2 body-text mt-6">
                <li>Menus feel slower to navigate with Joy-Cons.</li>
                <li>Handheld mode makes lobby text/icons too small to read comfortably.</li>
                <li>Drag-and-drop placement feels imprecise on joystick controls.</li>
                <li>Nested item menus overwhelm players during short round timers.</li>
                <li>Endgame stats are less detailed and harder to read compared to PC.</li>
              </ul>

              <p className="body-text mt-6">
                If TFT were to launch on Switch, it couldn't just be a direct port. 
                It would need to feel <span className="font-semibold">console-native</span>.
              </p>
            </div>

            {/* Competitive Analysis */}
            <div className="section-block">
              <h3 className="subheading">Competitive Analysis</h3>

              <p className="body-text mb-8">I studied similar strategy games that transitioned to mobile or console:</p>

              {/* Game Analysis Cards */}
              <div className="space-y-8">
                {[
                  {
                    game: "Hearthstone",
                    platform: "Mobile/Console",
                    strengths: ["Streamlined UI", "Simplified menus", "Controller-friendly card selection"],
                    weaknesses: ["Limited visual depth", "Slower pace compared to PC"],
                    takeaways: "Simplify complex interactions without losing clarity",
                  },
                  {
                    game: "Civilization VI",
                    platform: "Switch",
                    strengths: ["Radial menus", "Zoom/pan navigation", "Readability scaling"],
                    weaknesses: ["Menus feel nested and slow", "Precision actions cumbersome"],
                    takeaways: "Radial menus work but must remain fast and shallow",
                  },
                  {
                    game: "League of Legends: Wild Rift",
                    platform: "Mobile",
                    strengths: ["Joystick movement", "Quick-cast ability wheels"],
                    weaknesses: ["Fast actions require dexterity", "Can overwhelm casual players"],
                    takeaways: "Balance tactical speed with accessible shortcuts",
                  },
                ].map((game) => (
                  <div key={game.game} className="border border-zinc-800 p-6 bg-zinc-900/50">
                    {/* Header */}
                    <div className="mb-6 pb-4 border-b border-zinc-800">
                      <h4 className="text-xl font-bold text-white">
                        {game.game}
                      </h4>
                      <p className="text-zinc-400 text-sm mt-1">
                        {game.platform}
                      </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Strengths */}
                      <div>
                        <h5 className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-3">
                          ✅ Strengths
                        </h5>
                        <ul className="space-y-2">
                          {game.strengths.map((strength, i) => (
                            <li key={i} className="text-zinc-300 text-sm flex items-start">
                              <span className="text-green-400 mr-2 mt-1">•</span>
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Weaknesses */}
                      <div>
                        <h5 className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-3">
                          ❌ Weaknesses
                        </h5>
                        <ul className="space-y-2">
                          {game.weaknesses.map((weakness, i) => (
                            <li key={i} className="text-zinc-300 text-sm flex items-start">
                              <span className="text-red-400 mr-2 mt-1">•</span>
                              {weakness}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Takeaways */}
                      <div>
                        <h5 className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">
                          💡 Key Takeaway
                        </h5>
                        <p className="text-white text-sm leading-relaxed font-medium italic border-l-2 border-yellow-400 pl-3">
                          {game.takeaways}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Persona Cards Section */}
            <div className="section-block">
              <h3 className="subheading">User Personas</h3>

              <p className="body-text mb-8">
                Three player types grounded my design priorities:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Persona 1 */}
                <div className="card flex flex-col items-center text-center p-6 hover:bg-zinc-900/70 transition">
                  <img
                    src="/images/gamer_boy.png"
                    alt="Persona Profile"
                    className="w-20 h-20 rounded-full mb-4 border-2 border-pink-500 shadow-md"
                  />
                  <h4 className="text-lg font-semibold text-white mb-1">Alex Chen</h4>
                  <p className="text-sm text-zinc-400 mb-4">UX Researcher · 26</p>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    PC gamer shifting to Switch. Loves TFT but finds handheld controls clunky.
                  </p>
                  <div className="w-full text-left mt-auto">
                    <h5 className="text-pink-500 font-semibold text-xs uppercase mb-2">Goals</h5>
                    <ul className="list-disc list-inside text-zinc-300 text-sm leading-snug space-y-1">
                      <li>Casual TFT on the go</li>
                      <li>UI tuned for Joy-Cons</li>
                      <li>Keep tactical depth</li>
                    </ul>
                  </div>
                </div>

                {/* Persona 2 */}
                <div className="card flex flex-col items-center text-center p-6 hover:bg-zinc-900/70 transition">
                  <img
                    src="/images/gamer_girl.png"
                    alt="Persona Profile"
                    className="w-20 h-20 rounded-full mb-4 border-2 border-pink-500 shadow-md"
                  />
                  <h4 className="text-lg font-semibold text-white mb-1">Maya Lopez</h4>
                  <p className="text-sm text-zinc-400 mb-4">Student · 20</p>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    Busy student who games on Switch during commutes and short breaks.
                  </p>
                  <div className="w-full text-left mt-auto">
                    <h5 className="text-pink-500 font-semibold text-xs uppercase mb-2">Goals</h5>
                    <ul className="list-disc list-inside text-zinc-300 text-sm leading-snug space-y-1">
                      <li>Fast session setup</li>
                      <li>Readable in handheld mode</li>
                      <li>Accessible controls</li>
                    </ul>
                  </div>
                </div>

                {/* Persona 3 */}
                <div className="card flex flex-col items-center text-center p-6 hover:bg-zinc-900/70 transition">
                  <img
                    src="/images/gamer_boy.png"
                    alt="Persona Profile"
                    className="w-20 h-20 rounded-full mb-4 border-2 border-pink-500 shadow-md"
                  />
                  <h4 className="text-lg font-semibold text-white mb-1">Ryan Patel</h4>
                  <p className="text-sm text-zinc-400 mb-4">Esports Enthusiast · 29</p>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    Competitive gamer who streams TFT and wants console parity with PC.
                  </p>
                  <div className="w-full text-left mt-auto">
                    <h5 className="text-pink-500 font-semibold text-xs uppercase mb-2">Goals</h5>
                    <ul className="list-disc list-inside text-zinc-300 text-sm leading-snug space-y-1">
                      <li>Stream-friendly UI</li>
                      <li>Controller shortcuts</li>
                      <li>Detailed stats visibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Empathy Map */}
            <div className="section-block">
              <h3 className="subheading">Empathy Map (Alex's POV)</h3>

              <div className="relative">
                {/* Central User Circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-24 h-24 bg-zinc-900 border-2 border-pink-500 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 border border-pink-500 overflow-hidden mb-1">
                      <img
                        src="/images/gamer_boy.png"
                        alt="Alex Chen"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-pink-500 text-xs font-semibold">ALEX</p>
                  </div>
                </div>

                {/* Quadrant Grid */}
                <div className="grid grid-cols-2 border border-zinc-800 min-h-[400px]">
                  {/* Top Left - Says */}
                  <div className="border-r border-b border-zinc-800 p-8 relative">
                    <div className="absolute top-4 left-4 text-pink-500 text-xl font-bold">
                      1
                    </div>
                    <h4 className="font-bold text-pink-500 uppercase tracking-wider text-sm mb-6 text-center">
                      Says
                    </h4>
                    <p className="text-zinc-300 leading-relaxed text-sm italic mt-8">
                      "It feels clunky to move units with the joystick."
                    </p>
                  </div>

                  {/* Top Right - Thinks */}
                  <div className="border-b border-zinc-800 p-8 relative">
                    <div className="absolute top-4 right-4 text-pink-500 text-xl font-bold">
                      2
                    </div>
                    <h4 className="font-bold text-blue-400 uppercase tracking-wider text-sm mb-6 text-center">
                      Thinks
                    </h4>
                    <p className="text-zinc-300 leading-relaxed text-sm italic mt-8">
                      "Why can't this be as smooth as my other Switch games?"
                    </p>
                  </div>

                  {/* Bottom Left - Does */}
                  <div className="border-r border-zinc-800 p-8 relative">
                    <div className="absolute bottom-4 left-4 text-pink-500 text-xl font-bold">
                      3
                    </div>
                    <h4 className="font-bold text-green-400 uppercase tracking-wider text-sm mb-6 text-center">
                      Does
                    </h4>
                    <p className="text-zinc-300 leading-relaxed text-sm mt-8">
                      Struggles with drag-and-drop mechanics designed for mouse/touch.
                    </p>
                  </div>

                  {/* Bottom Right - Feels */}
                  <div className="p-8 relative">
                    <div className="absolute bottom-4 right-4 text-pink-500 text-xl font-bold">
                      4
                    </div>
                    <h4 className="font-bold text-yellow-400 uppercase tracking-wider text-sm mb-6 text-center">
                      Feels
                    </h4>
                    <p className="text-zinc-300 leading-relaxed text-sm mt-8">
                      Frustrated when controls break immersion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 02 — DEFINE */}
          <section id="define" aria-labelledby="define-heading" className="section-block-lg">
            <div className="section-header">
              <div className="w-1 h-12 bg-pink-500" />
              <div>
                <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">02</p>
                <h2 id="define-heading" className="text-2xl md:text-4xl font-bold text-white">
                  DEFINE
                </h2>
              </div>
            </div>

            {/* Context / Storytelling */}
            <div className="section-block">
              <p className="body-text">
                After listening to player frustrations and studying other console adaptations, it became
                clear that simply porting TFT to the Switch wouldn't work. Players weren't just asking for
                the game to "fit" — they wanted an experience that felt native to console play.
              </p>
            </div>

            {/* Problem Statement */}
            <div className="section-block text-center border-y border-pink-500/30 py-10">
              <p className="text-sm uppercase tracking-widest text-pink-500 mb-4">
                Our Challenge...
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                Bring the depth of PC-first strategy games to console with controls that feel natural and intuitive
              </h3>
            </div>

            <div className="section-block">
              <h3 className="subheading">Key Pain Points</h3>
              
              <div className="space-y-6 mt-8">
                {/* Pain Point 1 */}
                <div className="border border-zinc-800 bg-zinc-900/50 p-6 flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-base mb-2">
                      Mouse/touch-based UI
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Original interface design optimized for precise cursor control
                    </p>
                  </div>
                  <div className="mx-6 text-zinc-600">
                    →
                  </div>
                  <div className="flex-1">
                    <h5 className="text-pink-500 font-medium text-sm uppercase tracking-wider mb-2">
                      UX Impact
                    </h5>
                    <p className="text-zinc-300 text-sm">
                      Doesn't translate to Joy-Cons
                    </p>
                  </div>
                </div>

                {/* Pain Point 2 */}
                <div className="border border-zinc-800 bg-zinc-900/50 p-6 flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-base mb-2">
                      Dense on-screen information
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      UI designed for large PC monitors with high information density
                    </p>
                  </div>
                  <div className="mx-6 text-zinc-600">
                    →
                  </div>
                  <div className="flex-1">
                    <h5 className="text-pink-500 font-medium text-sm uppercase tracking-wider mb-2">
                      UX Impact
                    </h5>
                    <p className="text-zinc-300 text-sm">
                      Unreadable in handheld mode
                    </p>
                  </div>
                </div>

                {/* Pain Point 3 */}
                <div className="border border-zinc-800 bg-zinc-900/50 p-6 flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-base mb-2">
                      Drag-and-drop grid placement
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Unit positioning relies on precise mouse movements
                    </p>
                  </div>
                  <div className="mx-6 text-zinc-600">
                    →
                  </div>
                  <div className="flex-1">
                    <h5 className="text-pink-500 font-medium text-sm uppercase tracking-wider mb-2">
                      UX Impact
                    </h5>
                    <p className="text-zinc-300 text-sm">
                      Difficult with analog sticks
                    </p>
                  </div>
                </div>

                {/* Pain Point 4 */}
                <div className="border border-zinc-800 bg-zinc-900/50 p-6 flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-base mb-2">
                      Complex menus and item usage
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Multi-layered interface with nested item management
                    </p>
                  </div>
                  <div className="mx-6 text-zinc-600">
                    →
                  </div>
                  <div className="flex-1">
                    <h5 className="text-pink-500 font-medium text-sm uppercase tracking-wider mb-2">
                      UX Impact
                    </h5>
                    <p className="text-zinc-300 text-sm">
                      Requires streamlined interaction models
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey Map */}
            <div className="section-block">
              <h3 className="subheading">Journey Map</h3>
              <p className="body-text mb-8">
                This mapping showed that breakdowns occurred at every step, guiding my priorities
              </p>

              {/* Mobile: Card layout */}
              <div className="md:hidden space-y-4">
                {[
                  {
                    stage: "Menu → Lobby",
                    goal: "Get into a match quickly",
                    pain: "Menus feel slower on controller",
                    emotion: "😒 Annoyed",
                  },
                  {
                    stage: "Setup",
                    goal: "Place early units, prep bench",
                    pain: "Drag/drop clunky with joystick",
                    emotion: "😠 Frustrated",
                  },
                  {
                    stage: "In-Game",
                    goal: "Manage shop, bench, items",
                    pain: "Menus too nested, HUD cluttered",
                    emotion: "😡 Overwhelmed",
                  },
                  {
                    stage: "End Results",
                    goal: "Review match stats",
                    pain: "Screen less detailed vs PC",
                    emotion: "😕 Mixed",
                  },
                ].map((row) => (
                  <div key={row.stage} className="card">
                    <h4 className="text-pink-500 font-semibold text-lg mb-4">{row.stage}</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-zinc-400 uppercase tracking-wide text-xs mb-1">Goal</p>
                        <p className="text-zinc-300 text-sm">{row.goal}</p>
                      </div>
                      <div>
                        <p className="text-zinc-400 uppercase tracking-wide text-xs mb-1">Pain Point</p>
                        <p className="text-zinc-300 text-sm">{row.pain}</p>
                      </div>
                      <div>
                        <p className="text-zinc-400 uppercase tracking-wide text-xs mb-1">Emotion</p>
                        <p className="text-zinc-300 text-sm">{row.emotion}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop: Larger table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse text-base text-left min-w-[800px]">
                  <colgroup>
                    <col className="w-[20%]" />
                    <col className="w-[30%]" />
                    <col className="w-[35%]" />
                    <col className="w-[15%]" />
                  </colgroup>

                  <thead>
                    <tr className="bg-zinc-900/80">
                      {["Stage", "Goal", "Pain Point", "Emotion"].map((h) => (
                        <th
                          key={h}
                          className="px-6 py-4 border border-zinc-700 text-pink-500 uppercase tracking-widest text-sm font-semibold text-left"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      {
                        stage: "Menu → Lobby",
                        goal: "Get into a match quickly",
                        pain: "Menus feel slower on controller",
                        emotion: "😒 Annoyed",
                      },
                      {
                        stage: "Setup",
                        goal: "Place early units, prep bench",
                        pain: "Drag/drop clunky with joystick",
                        emotion: "😠 Frustrated",
                      },
                      {
                        stage: "In-Game",
                        goal: "Manage shop, bench, items",
                        pain: "Menus too nested, HUD cluttered",
                        emotion: "😡 Overwhelmed",
                      },
                      {
                        stage: "End Results",
                        goal: "Review match stats",
                        pain: "Screen less detailed vs PC",
                        emotion: "😕 Mixed",
                      },
                    ].map((row, i) => (
                      <tr key={row.stage} className={`hover:bg-zinc-800/30 transition-colors ${i % 2 === 1 ? "bg-zinc-900/40" : ""}`}>
                        <td className="px-6 py-5 font-semibold text-white border border-zinc-700 align-top">
                          {row.stage}
                        </td>
                        <td className="px-6 py-5 text-zinc-300 border border-zinc-700 align-top leading-relaxed">
                          {row.goal}
                        </td>
                        <td className="px-6 py-5 text-zinc-300 border border-zinc-700 align-top leading-relaxed">
                          {row.pain}
                        </td>
                        <td className="px-6 py-5 text-zinc-300 border border-zinc-700 align-top text-center">
                          {row.emotion}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* HMW Statement */}
            <div className="section-block text-center border-y border-pink-500/30 py-10">
              <p className="text-sm uppercase tracking-widest text-pink-500 mb-4">
                How might we...
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
                Make complex PC games more accessible <br />
                and intuitive for console players <br />
                without compromising gameplay depth?
              </h3>
            </div>
          </section>

          {/* 03 — IDEATE */}
          <section id="ideate" aria-labelledby="ideate-heading" className="section-block-lg">
            {/* Section header */}
            <div className="section-header">
              <div className="w-1 h-12 bg-pink-500" />
              <div>
                <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">03</p>
                <h2 id="ideate-heading" className="text-2xl md:text-4xl font-bold text-white">
                  IDEATE
                </h2>
              </div>
            </div>

            {/* Concept directions */}
<div className="section-block">
  <h3 className="subheading">Exploring Concepts</h3>
  
  <div className="mt-8 space-y-10">
    {/* Concept 1 - Enhanced */}
    <div className="bg-zinc-900/30 p-6">
      <h4 className="text-white font-bold text-xl mb-6">Contextual Shortcuts</h4>
      
      <div className="flex items-center gap-4 overflow-x-auto">
        <div className="bg-zinc-800 border border-zinc-600 px-4 py-3 rounded">
          <span className="text-zinc-200 font-medium">Player hovers item</span>
        </div>
        <div className="text-pink-500 text-lg">→</div>
        <div className="bg-zinc-800 border border-zinc-600 px-4 py-3 rounded">
          <span className="text-zinc-200 font-medium">System detects context</span>
        </div>
        <div className="text-pink-500 text-lg">→</div>
        <div className="bg-pink-500/20 border-2 border-pink-500 px-4 py-3 rounded">
          <span className="text-white font-semibold">Shows button prompts</span>
        </div>
      </div>
    </div>

    {/* Concept 2 - Enhanced */}
    <div className="bg-zinc-900/30 p-6">
      <h4 className="text-white font-bold text-xl mb-6">Snap Grid</h4>
      
      <div className="flex items-center gap-4 overflow-x-auto">
        <div className="bg-zinc-800 border border-zinc-600 px-4 py-3 rounded">
          <span className="text-zinc-200 font-medium">Player moves joystick</span>
        </div>
        <div className="text-pink-500 text-lg">→</div>
        <div className="bg-zinc-800 border border-zinc-600 px-4 py-3 rounded">
          <span className="text-zinc-200 font-medium">Cursor approaches grid</span>
        </div>
        <div className="text-pink-500 text-lg">→</div>
        <div className="bg-pink-500/20 border-2 border-pink-500 px-4 py-3 rounded">
          <span className="text-white font-semibold">Auto-snaps to position</span>
        </div>
      </div>
    </div>

    {/* Concept 3 - Enhanced */}
    <div className="bg-zinc-900/30 p-6">
      <h4 className="text-white font-bold text-xl mb-6">Layered HUD</h4>
      
      <div className="flex items-center gap-4 overflow-x-auto">
        <div className="bg-zinc-800 border border-zinc-600 px-4 py-3 rounded">
          <span className="text-zinc-200 font-medium">Default: Basic info</span>
        </div>
        <div className="text-pink-500 text-lg">→</div>
        <div className="bg-zinc-800 border border-zinc-600 px-4 py-3 rounded">
          <span className="text-zinc-200 font-medium">Player presses detail</span>
        </div>
        <div className="text-pink-500 text-lg">→</div>
        <div className="bg-pink-500/20 border-2 border-pink-500 px-4 py-3 rounded">
          <span className="text-white font-semibold">Expands advanced stats</span>
        </div>
      </div>
    </div>
  </div>
</div>



            {/* Controller mapping */}
            <div className="section-block">
              <h3 className="subheading">Controller Mapping</h3>
              <p className="body-text mb-6">
                I designed an optimized Joy-Con mapping to keep frequent actions fast. 
                This layout mirrored Nintendo's conventions while prioritizing TFT's most common tasks.
              </p>

              {/* Image goes here */}
              <img
                src="/images/tft-controller-mapping.png"
                alt="TFT Switch Joy-Con Controller Mapping"
                className="border-zinc-800 shadow-lg mx-auto"
              />
            </div>

            {/* Design principles */}
<div className="section-block">
  <h3 className="subheading">Guiding Principles</h3>
  <div className="grid md:grid-cols-3 gap-8 mt-8">
    <div className="group relative bg-zinc-900/50 border border-zinc-800 p-8 hover:border-pink-500/50 transition-all duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-transparent"></div>
      <h4 className="text-white font-bold text-xl mb-4 group-hover:text-pink-400 transition-colors">Fast First</h4>
      <p className="text-zinc-300 text-base leading-relaxed">
        Core actions are always one press away, reducing friction and maintaining gameplay flow.
      </p>
      <div className="mt-6 pt-4 border-t border-zinc-700">
        <span className="text-pink-500 text-xs uppercase tracking-wider font-semibold">Priority: Speed</span>
      </div>
    </div>
    
    <div className="group relative bg-zinc-900/50 border border-zinc-800 p-8 hover:border-pink-500/50 transition-all duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-transparent"></div>
      <h4 className="text-white font-bold text-xl mb-4 group-hover:text-pink-400 transition-colors">Readable Anywhere</h4>
      <p className="text-zinc-300 text-base leading-relaxed">
        Handheld or docked, the UI scales without losing clarity or essential information.
      </p>
      <div className="mt-6 pt-4 border-t border-zinc-700">
        <span className="text-pink-500 text-xs uppercase tracking-wider font-semibold">Priority: Clarity</span>
      </div>
    </div>
    
    <div className="group relative bg-zinc-900/50 border border-zinc-800 p-8 hover:border-pink-500/50 transition-all duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-transparent"></div>
      <h4 className="text-white font-bold text-xl mb-4 group-hover:text-pink-400 transition-colors">Depth Preserved</h4>
      <p className="text-zinc-300 text-base leading-relaxed">
        Advanced details remain accessible through progressive disclosure, never buried or removed.
      </p>
      <div className="mt-6 pt-4 border-t border-zinc-700">
        <span className="text-pink-500 text-xs uppercase tracking-wider font-semibold">Priority: Access</span>
      </div>
    </div>
  </div>
</div>
          </section>

          {/* 04 — PROTOTYPE */}
          <section id="prototype" aria-labelledby="prototype-heading" className="section-block-lg">
            <div className="section-header">
              <div className="w-1 h-12 bg-pink-500" />
              <div>
                <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">04</p>
                <h2 id="prototype-heading" className="text-2xl md:text-4xl font-bold text-white">
                  PROTOTYPE
                </h2>
              </div>
            </div>

            <p className="body-text">
              I created <span className="font-semibold">black-and-white wireframes</span> to test layout, flows, and controller mappings without focusing on visuals.
            </p>

            <ul className="list-disc list-inside space-y-2 body-text mt-6">
              <li><span className="font-semibold">Main Menu</span> → Joy-Con friendly navigation.</li>
              <li><span className="font-semibold">Lobby</span> → Readable party setup.</li>
              <li><span className="font-semibold">Shop</span> → Embedded <em>A Buy</em> button + economy anchors (ZL/ZR).</li>
              <li><span className="font-semibold">In-Game Screen</span> → Contextual prompts, snap-to-grid, opponent cycling (R).</li>
            </ul>

            {/* Wireframe images stacked */}
            <div className="space-y-6 mt-8 mb-8">
              <img src="/images/Loading Screen - Wireframe.png" alt="Main Menu Wireframe" className="w-full border-zinc-800" />
              <img src="/images/Lobby - Wireframe.png" alt="Lobby Wireframe" className="w-full border-zinc-800" />
              <img src="/images/Match Found - Wireframe.png" alt="Match Found Wireframe" className="w-full border-zinc-800" />
              <img src="/images/Loading Screen - Wireframe (1).png" alt="Loading Screen Wireframe" className="w-full border-zinc-800" />
              <img src="/images/In-Game - Wireframe.png" alt="In-Game Wireframe" className="w-full border-zinc-800" />
            </div>

            <p className="body-text">
              I also created a video prototype showcasing color mockups, which I used to explore readability and HUD scaling in context. These were early experiments in visual direction rather than finalized designs.
            </p>

            {/* Responsive video container */}
            <div className="border-zinc-800 bg-zinc-900/40 overflow-hidden shadow-lg mt-8">
              <div className="aspect-video">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/Home Tile 2.png"
                  aria-label="TFT Switch prototype video showing HUD scaling and controller interactions"
                >
                  <source src="/images/prototype.mp4" type="video/mp4"/>
                  <track
                    kind="captions"
                    srcLang="en"
                    src="/videos/tft-switch-prototype-captions.vtt"
                    label="English"
                    default
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          {/* 05 — REFLECTIONS */}
          <section id="reflection" aria-labelledby="reflection-heading" className="section-block-lg">
            <div className="section-header">
              <div className="w-1 h-12 bg-pink-500" />
              <div>
                <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">05</p>
                <h2 id="reflection-heading" className="text-2xl md:text-4xl font-bold text-white">
                  REFLECTIONS
                </h2>
              </div>
            </div>

            <p className="body-text">
              A few clear lessons stood out while adapting TFT to a controller-first experience:
            </p>

            {/* Horizontal timeline */}
            <div className="relative mt-10">
              {/* timeline line */}
              <div className="absolute top-5 left-0 right-0 h-px bg-zinc-800" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* 1 */}
                <div className="flex flex-col items-center text-center px-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-pink-500 text-pink-400 z-10">
                    <Gamepad2 className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 text-white font-semibold text-base">Controller First</h4>
                  <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                    Reduce steps, favor direct actions, and keep frequent inputs on primary buttons.
                  </p>
                </div>

                {/* 2 */}
                <div className="flex flex-col items-center text-center px-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-pink-500 text-pink-400 z-10">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 text-white font-semibold text-base">Clarity Over Detail</h4>
                  <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                    Scale type and HUD for distance; show only what matters in the moment.
                  </p>
                </div>

                {/* 3 */}
                <div className="flex flex-col items-center text-center px-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-pink-500 text-pink-400 z-10">
                    <Zap className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 text-white font-semibold text-base">Responsive Feedback</h4>
                  <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                    Immediate audio/visual confirmation beats dense menus under round timers.
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="mt-12 space-y-6">
              <p className="body-text">
                I initially scoped too broadly. Narrowing to menus, setup flows, and one in-game proof of concept made the work
                tractable and more insightful. It forced me to prioritize player friction and design around the most common tasks.
              </p>

              <p className="body-text">
                I'm still growing my visual polish in Figma, but this project improved my comfort with the tool and sharpened how I
                reason about readability, input mapping, and state management on console.
              </p>

              <p className="body-text">
                As a TFT fan, I'll keep iterating. The biggest takeaway: console UX succeeds when <strong>focus, legibility, and fast actions</strong> align—depth should come from gameplay decisions, not UI complexity.
              </p>
            </div>
          </section>

          {/* 06 — NEXT STEPS */}
          <section id="nextsteps" aria-labelledby="nextsteps-heading" className="section-block-lg">
            <div className="section-header">
              <div className="w-1 h-12 bg-pink-500" />
              <div>
                <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">06</p>
                <h2 id="nextsteps-heading" className="text-2xl md:text-4xl font-bold text-white">
                  NEXT STEPS
                </h2>
              </div>
            </div>

            <p className="body-text">
              What I'll tackle next to keep pushing this project forward:
            </p>

            {/* Horizontal roadmap */}
            <div className="relative mt-8">
              {/* timeline line */}
              <div className="absolute top-6 left-0 right-0 h-px bg-zinc-800" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {/* 1 — Expand the Prototype */}
                <div className="flex flex-col items-center text-center px-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-pink-500 text-pink-400 z-10">
                    <Gamepad2 className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 text-white font-semibold text-base">Expand the Prototype</h4>
                  <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                    Add HUD states and onboarding flows to the current proof of concept.
                  </p>
                </div>

                {/* 2 — Grow My UI Skills */}
                <div className="flex flex-col items-center text-center px-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-pink-500 text-pink-400 z-10">
                    <Palette className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 text-white font-semibold text-base">Grow My UI Skills</h4>
                  <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                    Improve visual polish in Figma while keeping a UX-first approach.
                  </p>
                </div>

                {/* 3 — Test With Players */}
                <div className="flex flex-col items-center text-center px-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-pink-500 text-pink-400 z-10">
                    <UserCheck className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 text-white font-semibold text-base">Test With Players</h4>
                  <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                    Validate Joy-Con mappings and HUD readability with usability sessions.
                  </p>
                </div>

                {/* 4 — Keep Iterating */}
                <div className="flex flex-col items-center text-center px-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-pink-500 text-pink-400 z-10">
                    <RefreshCcw className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 text-white font-semibold text-base">Keep Iterating</h4>
                  <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                    Evolve the design alongside TFT—and my skills—as ongoing work.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-8 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,168,212,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,168,212,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="text-xs text-zinc-600">
              <span className="text-pink-500">ANNE MERIE NGUYEN</span> © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}