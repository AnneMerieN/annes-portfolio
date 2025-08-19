"use client"

import Link from "next/link"
import Image from "next/image";
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
            Teamfight Tactics for Nintendo Switch
          </h1>
        </div>



{/* Wide Banner Image */}
<div className="max-w-6xl mx-auto mb-16">
  {/* Hairline gradient frame */}
  
    {/* Actual banner */}
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
              Teamfight Tactics (TFT) is Riot Games’ popular auto-battler strategy game, originally designed for PC and mobile platforms. It requires high-level decision-making, spatial awareness, and real-time reactions to dynamic in-game scenarios. However, the user interface (UI) is built around mouse and touch interactions, making it a challenge to adapt for game consoles.<br></br><br></br>

              This case study explores the reimagining of TFT for the Nintendo Switch, leveraging the Design Thinking process to preserve gameplay depth while ensuring intuitive, controller-based interactions.<br></br><br></br>

              As a dedicated TFT player and aspiring Riot UX designer, this was not just a design exercise but a passion project. I wanted to explore how one of my favorite games could evolve for a different player environment and better meet accessibility and usability standards.
            </p>
          </section>

          {/* PROBLEM DISCOVERY */}
          <section>
            <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-12 bg-pink-500"></div>
              <div>
                <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">01</p>
                <h2 className="text-2xl md:text-4xl font-bold text-white">THE DESIGN CHALLENGE</h2>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mt-16 mb-2">
              The Challenge of Translating PC Games to Consoles
            </h3>

            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              As the gaming industry expands across platforms, many studios are adapting PC-first games for consoles. This introduces a major design challenge:
            </p>

            <div className="mt-6 mb-10 max-w-4xl mx-auto bg-pink-500/10 border border-pink-500/20 text-pink-300 text-center px-6 py-5 rounded-xl">
              <p className="text-lg md:text-xl font-semibold leading-relaxed">
                How can complex, mouse-and-keyboard-based experiences be transformed into intuitive, controller-friendly gameplay that works on handheld devices and living room setups?
              </p>
            </div>

            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              This challenge is particularly tough for auto-battlers and tactics games, which rely on:
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


            <h3 className="text-2xl font-semibold text-white mt-16 mb-2">Constraints</h3>
<ul className="list-disc list-inside text-zinc-300 space-y-2 text-base md:text-lg">
  <li>Limited screen space (especially in handheld mode)</li>
  <li>Absence of touch or mouse input</li>
  <li>Need for quick, accurate unit interaction under time pressure</li>
  <li>Complex gameplay that can overwhelm new players</li>
</ul>


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
                <h2 className="text-2xl md:text-4xl font-bold text-white">EMPATHIZE</h2>
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
                    src="/images/gamer_boy_icon.png"
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
                    src="/images/gamer_girl_icon.png"
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
                    src="/images/gamer_boy_icon.png"
                    alt="Ryan Persona"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border border-zinc-600"
                  />
                  <figcaption className="text-white font-semibold text-lg">Ryan (29)</figcaption>
                  <p className="text-zinc-400 text-sm mt-2">
                    A competitive PC TFT veteran who wants to play on the go. Expects high performance, advanced controls, and zero lag in responsiveness.
                  </p>
                </figure>
              </div>

            <h3 className="text-2xl font-semibold text-white mt-16 mb-2">Key Findings</h3>
            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>Players feared losing matches due to clunky joystick placement controls</li>
                <li>Strategic menus like shop and scouting needed to be fast and accessible</li>
                <li>Handheld mode required enlarged UI elements and better contrast</li>
                <li>Controller users favored button combinations (A/B/X/Y + L/R) for layered navigation</li>
              </ul>
            </p>

          </section>

          <section>
            {/* TITLE */}
            <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-12 bg-pink-500"></div>
              <div>
                <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">03</p>
                <h2 className="text-2xl md:text-4xl font-bold text-white">DEFINE</h2>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mt-16 mb-2">Problem Statement</h3>

            <p className="text-zinc-300 leading-relaxed text-base md:text-lg mb-6">
              Console-based TFT players need a streamlined way to interact with the board, shop, and champions using joystick and button inputs—without sacrificing the game’s complexity.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-16 mb-2">Design Goals:</h3>

            <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              <ul className="list-disc list-inside text-zinc-300 space-y-2">
                <li>Re-map core interactions to intuitive controller inputs</li>
                <li>Reduce UI clutter while maintaining access to all game-critical info</li>
                <li>Ensure rapid user flows between board, shop, and scouting screens</li>
              </ul>
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-4xl font-bold text-pink-500 mb-10">IDEATE</h2>
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
