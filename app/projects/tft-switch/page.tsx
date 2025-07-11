"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Users, Wrench, Target, Lightbulb, Gamepad2, Monitor, Smartphone } from "lucide-react"

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

      {/* Title Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="inline-block bg-zinc-900/80 backdrop-blur-md rounded-lg px-3 py-1 border border-zinc-800 text-pink-500 text-xs uppercase tracking-wider mb-6">
            UI/UX Case Study
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Adapting Teamfight Tactics for Nintendo Switch
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A comprehensive UX/UI case study exploring the challenges and solutions for bringing a PC strategy game to
            handheld console
          </p>
        </div>

        {/* Wide Banner Image */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="w-full aspect-[21/9] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,15,17,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,17,0.9)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(249,168,212,0.1)_0%,transparent_70%)]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Gamepad2 className="h-20 w-20 text-pink-500 mx-auto mb-4 opacity-60" />
                <p className="text-zinc-400 text-lg uppercase tracking-wider">Case Study Banner Image</p>
                <p className="text-zinc-500 text-sm mt-2">TFT Switch Adaptation Showcase</p>
              </div>
            </div>
          </div>
        </div>

          {/* ────────────  Content  ──────────── */}
        <div className="max-w-4xl mx-auto space-y-24">
          {/* Project Overview */}
          <section>
            <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-12 bg-pink-500"></div>
              <div>
                <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">00</p>
                <h2 className="text-2xl md:text-4xl font-bold text-white">PROJECT OVERVIEW</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-zinc-300">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-zinc-400">Timeline</p>
                  <p className="font-semibold text-white flex items-center gap-2"><Calendar className="h-4 w-4" /> Jan. 2025 - May 2025</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Team</p>
                  <p className="font-semibold text-white flex items-center gap-2"><Users className="h-4 w-4" /> Personal Project</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-zinc-400">Tools</p>
                  <p className="font-semibold text-white flex items-center gap-2"><Wrench className="h-4 w-4" /> Figma, Miro</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Role</p>
                  <p className="font-semibold text-white flex items-center gap-2"><Target className="h-4 w-4" /> UI/UX Designer</p>
                </div>
              </div>
            </div>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              Riot Game's Teamfight Tactics TFT is available on both PC and mobile platforms. I wanted to reimagine the game on the Nintendo Switch console.
            </p>
          </section>

          {/* PROBLEM DISCOVERY */}
          <section>
            <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-12 bg-pink-500"></div>
              <div>
                <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">01</p>
                <h2 className="text-2xl md:text-4xl font-bold text-white">PROBLEM DISCOVERY</h2>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mt-16 mb-2">
              The Challenge of Translating PC Games to Consoles
            </h3>

            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              As the gaming industry expands across platforms, more studios are adapting PC-first games for consoles like the Nintendo Switch, Xbox, and PlayStation. While this broadens market reach, it also presents a key design challenge: how can complex, mouse-and-keyboard-based experiences be transformed into intuitive, controller-friendly gameplay that works well on handheld devices or living room setups?

              This challenge is especially relevant for real-time tactics and auto-battler games. These genres rely on quick decision-making, drag-and-drop mechanics, and screen-wide interactions. PC interfaces are designed for precision, speed, and direct manipulation, all of which become more difficult when players are limited to joysticks and button-based inputs.
            </p>

          <div className="md:flex md:items-center gap-8 my-12">
              <img
                src="/images/crossplay-infographic.png"
                alt="Iteration sketch"
                className="md:w-1/2 w-full rounded-xl border border-zinc-700"
              />
              <p className="text-zinc-300 leading-relaxed md:w-1/2 mt-4 md:mt-0">
                I learned that early designs lacked clarity during high-speed rounds. This iteration removed unused menus and added visual cues for snap-based movement.
              </p>
            </div>


            <h3 className="text-2xl font-semibold text-white mt-16 mb-2">Teamfight Tactics as a Case Study</h3>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              Teamfight Tactics (TFT), Riot Games' popular auto-battler, highlights this challenge. Originally developed for PC and later adapted for mobile, TFT requires players to roll for champions, place units on a grid, combine items, and scout opponents. The gameplay depends on fast interactions using hotkeys and mouse clicks, all within tight time windows between rounds.

              Bringing TFT to the Nintendo Switch involves more than shrinking the interface to fit a smaller screen. It requires a full rethinking of the user experience. Without a mouse or touchscreen, players need a new way to:

              Place units quickly and accurately
              Navigate shops and inventories with minimal friction
              Maintain situational awareness across the entire board
            </p>

            <figure className="my-8">
              <img
                src="/images/TFT-hotkeys-guide.png"
                alt="TFT PC Hotkeys Overview"
                className="w-full object-cover border border-zinc-700 rounded-xl"
              />
              <figcaption className="mt-2 text-sm text-zinc-500 text-center">
                TFT PC hotkeys guide that relied heavily on keyboard shortcuts and hover states.
              </figcaption>
            </figure>

            <h3 className="text-2xl font-semibold text-white mt-16 mb-2">Why It Matters</h3>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              Many ports of PC games struggle when input methods are not redesigned with console users in mind. This often leads to slow navigation, clunky controls, and a frustrating experience. In TFT, where every second and action counts, even small interface delays can significantly impact gameplay and strategy. This case study explores how TFT can be redesigned for the Nintendo Switch. The goal is to create an experience that feels fast, intuitive, and tactically rich using only Joy-Cons or a Pro Controller, while preserving the core gameplay that makes TFT engaging.
            </p>

            <figure className="my-8">
              <img
                src="/images/TFT-hotkeys-guide.png"
                alt="TFT PC Hotkeys Overview"
                className="w-full object-cover border border-zinc-700 rounded-xl"
              />
              <figcaption className="mt-2 text-sm text-zinc-500 text-center">
                TFT PC hotkeys guide that relied heavily on keyboard shortcuts and hover states.
              </figcaption>
            </figure>

          </section>

          {/* THIN WHITE TOP/BOTTOM BORDER AROUND HMW STATEMENT */}
          {/* <div className="w-full py-12 border-y border-zinc-800">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <p className="text-sm uppercase tracking-wider text-pink-500 mb-2">
                How Might We...
              </p>
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug">
                Make complex PC games more accessible and intuitive for console players without compromising gameplay depth?
              </h2>
            </div>
          </div> */}

          <div className="w-full py-12 border-y border-pink-500/40">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-sm uppercase tracking-wider text-pink-500 mb-2">
              How Might We...
            </p>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug">
              Make complex PC games more accessible and intuitive for console players without compromising gameplay depth?
            </h2>
          </div>
        </div>


        {/* EMPATHIZING */}
          <section>
             <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-12 bg-pink-500"></div>
              <div>
                <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">02</p>
                <h2 className="text-2xl md:text-4xl font-bold text-white">EMPATHIZING</h2>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mt-16 mb-2">Understanding Console Players and Auto-Battler Fans</h3>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              To design a Nintendo Switch version of Teamfight Tactics that feels natural and engaging, I began by exploring the perspectives of two key player groups: console-first gamers and existing TFT players. Console players are accustomed to intuitive controls, fast navigation, and minimal UI complexity. They often play in handheld mode or on a television screen from a distance, which demands clear visuals, responsive input, and thoughtful information hierarchy. In contrast, TFT players on PC rely on rapid mouse movement, hotkeys, and direct interaction with a high-density interface. These differences revealed a fundamental gap between the expectations of the two audiences.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-16 mb-2">Player Personas</h3>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              To design a Nintendo Switch version of Teamfight Tactics that feels natural and engaging, I began by exploring the perspectives of two key player groups: console-first gamers and existing TFT players. Console players are accustomed to intuitive controls, fast navigation, and minimal UI complexity. They often play in handheld mode or on a television screen from a distance, which demands clear visuals, responsive input, and thoughtful information hierarchy. In contrast, TFT players on PC rely on rapid mouse movement, hotkeys, and direct interaction with a high-density interface. These differences revealed a fundamental gap between the expectations of the two audiences.
            </p>

            {/* PLAYER PERSONA IMAGES */}
            <div className="grid md:grid-cols-3 gap-8 mt-10">
                {/* Alex */}
                <figure className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 text-center">
                  <img
                    src="/images/SealBites-Logo.png"
                    alt="Alex Persona"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border border-zinc-600"
                  />
                  <figcaption className="text-white font-semibold text-lg">Alex (17)</figcaption>
                  <p className="text-zinc-400 text-sm mt-2">
                    A casual Nintendo Switch user who enjoys strategy games like Fire Emblem and Wargroove. Curious about complex tactics-based games like TFT.
                  </p>
                </figure>

                {/* Maya */}
                <figure className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 text-center">
                  <img
                    src="/images/SealBites-Logo.png"
                    alt="Maya Persona"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border border-zinc-600"
                  />
                  <figcaption className="text-white font-semibold text-lg">Maya (23)</figcaption>
                  <p className="text-zinc-400 text-sm mt-2">
                    A mobile TFT player who plays between classes. Prioritizes accessibility, fast interactions, and legible UI—especially in handheld mode.
                  </p>
                </figure>

                {/* Ryan */}
                <figure className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 text-center">
                  <img
                    src="/images/SealBites-Logo.png"
                    alt="Ryan Persona"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border border-zinc-600"
                  />
                  <figcaption className="text-white font-semibold text-lg">Ryan (29)</figcaption>
                  <p className="text-zinc-400 text-sm mt-2">
                    A competitive PC TFT veteran who wants to play on the go. Expects high performance, advanced controls, and zero lag in responsiveness.
                  </p>
                </figure>
              </div>

            <h3 className="text-2xl font-semibold text-white mt-16 mb-2">Key User Needs</h3>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              From these personas, I identified a few common expectations:
                A fast and frictionless way to move, place, and sell units using a joystick and buttons
                A UI that adapts to different viewing distances and screen sizes
                A simplified HUD that preserves key game information without overwhelming the player
                The ability to perform frequent actions—like rolling, buying XP, or scouting—quickly and intuitively
            </p>

          </section>

          <section>
            {/* TITLE */}
            <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-12 bg-pink-500"></div>
              <div>
                <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">03</p>
                <h2 className="text-2xl md:text-4xl font-bold text-white">RESEARCH</h2>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mt-16 mb-2">Competitive Analysis: How Other Strategy Games Adapt to Console</h3>

            <p className="text-zinc-300 leading-relaxed text-base md:text-lg mb-6">
              To better understand how complex strategy games are translated for console use, I studied the control schemes, UI layouts, and gameplay flows of similar titles on the Nintendo Switch. These included:
            </p>

            <ul className="list-disc list-inside text-zinc-300 text-base md:text-lg space-y-3 mb-8">
              <li>
                <span className="text-white font-medium">Fire Emblem: Three Houses</span> – grid-based tactical gameplay with clean snap-to-tile movement and minimal UI clutter.
              </li>
              <li>
                <span className="text-white font-medium">Wargroove</span> – strong visual clarity and simple icon-based HUD designed for both handheld and docked play.
              </li>
              <li>
                <span className="text-white font-medium">Slay the Spire</span> – excellent controller mapping and streamlined menu navigation for deck-based decisions.
              </li>
              <li>
                <span className="text-white font-medium">Darkest Dungeon</span> – a game that struggled with slow navigation and overwhelming UI on console due to its dense PC interface.
              </li>
            </ul>

            <p className="text-zinc-300 leading-relaxed text-base md:text-lg mb-2">
              These comparisons revealed patterns in successful adaptations. The most effective games:
            </p>

            <ul className="list-disc list-inside text-zinc-300 text-base md:text-lg space-y-3">
              <li>Used snap-based movement or grid navigation instead of freeform dragging.</li>
              <li>Consolidated frequent actions into radial menus or quick button shortcuts.</li>
              <li>Presented essential game info clearly, often with scalable text or overlays.</li>
              <li>Reduced nested menus in favor of single-screen interactions or HUD layers.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-white mt-16 mb-2">TFT-Specific Control Flow Analysis</h3>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              Next, I examined how players interact with TFT on PC and mobile, breaking down common actions such as:
              Dragging units from the bench to the board
              Rolling for champions
              Selling units
              Buying XP
              Viewing traits and enemy boards
              On PC, these actions are streamlined through hotkeys and direct clicks. However, trying to replicate this on a joystick would introduce friction—players would need to navigate small targets with a stick, losing speed and precision.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-16 mb-2">Gap in Console Auto-Battlers</h3>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              I also noted that auto-battlers are nearly absent from console platforms, likely due to the difficulty of adapting mouse-based interactions. This presented both a challenge and an opportunity: TFT could be the first successful console-native auto-battler, if reimagined thoughtfully for gamepad controls.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-16 mb-2">Key Findings</h3>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              Traditional PC interfaces do not scale well to console inputs.

              Grid-based tactical games succeed on Switch when they embrace snap-to interactions and simplified HUDs.

              TFT requires a controller-first control scheme that supports speed, readability, and depth.
            </p>

            <figure className="my-8">
              <img
                src="/images/profile.png"
                alt="Detailed wireframe overview"
                className="w-full object-cover border border-zinc-700 rounded-xl"
              />
              <figcaption className="mt-3 p-3 bg-zinc-800 text-sm text-zinc-400 rounded-lg">
                A walkthrough of the game’s snap-to grid interface and layout transition for handheld mode.
              </figcaption>
            </figure>

          </section>

          <section>
            <h2 className="text-2xl md:text-4xl font-bold text-pink-500 mb-10">THE CHALLENGE</h2>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              How can we maintain TFT’s rich strategy while making every core action feel effortless on a controller or
              touch screen? The end solution needed to be just as competitive as the PC version—without feeling like a
              second-class citizen.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 my-12">
              {/* Large image spanning 2 columns & 2 rows */}
              <figure className="col-span-2 md:col-span-3 row-span-2">
                <img src="/images/UX-wireframe-for-a-FPS-HUD.png" className="w-full h-full object-cover rounded-xl border border-zinc-700" />
                <figcaption className="text-sm text-zinc-500 mt-2">Main wireframe mockup showing HUD layout</figcaption>
              </figure>

              {/* Smaller image top-right */}
              <figure className="col-span-1 md:col-span-3">
                <img src="/images/grid-controls.png" className="w-full h-full object-cover rounded-xl border border-zinc-700" />
                <figcaption className="text-sm text-zinc-500 mt-2">Snap grid movement concept</figcaption>
              </figure>

              {/* Two small stacked images bottom-right */}
              <div className="col-span-2 md:col-span-3 grid grid-cols-2 gap-4">
                <figure>
                  <img src="/images/hud-sketch.png" className="w-full h-full object-cover rounded-xl border border-zinc-700" />
                  <figcaption className="text-sm text-zinc-500 mt-2">HUD sketch</figcaption>
                </figure>
                <figure>
                  <img src="/images/controller-mapping.png" className="w-full h-full object-cover rounded-xl border border-zinc-700" />
                  <figcaption className="text-sm text-zinc-500 mt-2">Controller layout mapping</figcaption>
                </figure>
              </div>
            </div>

          </section>

          <section>
            <h2 className="text-2xl md:text-4xl font-bold text-pink-500 mb-10">WIREFRAMES & FLOW</h2>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              I designed wireframes to showcase snap grid movement, HUD in handheld mode, and control overlays. These helped evaluate pacing, visibility, and ease of access.
            </p>
            <div className="h-80 bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center text-zinc-500">
              [ Wireframe Image Placeholder ]
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-4xl font-bold text-pink-500 mb-10">TESTING & ITERATION</h2>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              I gathered feedback from designers and casual gamers. Early mockups suffered from pacing lags and text overflow. I rebalanced layout grids, adjusted contrast, and sped up snap movement through visual cues.
            </p>
            <div className="h-80 bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center text-zinc-500">
              [ Before & After Image Placeholder ]
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-4xl font-bold text-pink-500 mb-10">FINAL SOLUTION</h2>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              The final system featured a hex snap-to grid, minimalist HUD with radial menus, and remapped controls:
              A = select/place, B = cancel, L/R = tab between menus, ZR = roll, ZL = level up.
            </p>
            <div className="h-80 bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center text-zinc-500">
              [ Final Prototype Image Placeholder ]
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-4xl font-bold text-pink-500 mb-10">LEARNINGS</h2>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              Adapting UX for console means thinking spatially—button mapping, screen distance, and timing become critical.
              Minimal UI doesn’t mean minimal depth. The smoother it feels, the more tactical thinking it unlocks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-4xl font-bold text-pink-500 mb-10">NEXT STEPS</h2>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              I'd love to build this concept in Unity and conduct full user tests. Future ideas include voice shortcuts and predictive auto-placement based on match phase.
            </p>
          </section>
        </div>
      </div>



      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-8 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,168,212,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,168,212,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="text-xs text-zinc-600">
              <span className="text-pink-500">ANNE MERIE NGUYEN</span> © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
