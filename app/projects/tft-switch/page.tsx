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
            UX/UI Case Study
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
            <h2 className="text-3xl font-bold text-white mb-8">Project Overview</h2>
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
            <p className="text-zinc-300 leading-relaxed">
              Riot Game's Teamfight Tactics TFT is available on both PC and mobile platforms. I wanted to reimagine the game on the Nintendo Switch console.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Problem Exploration</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Direct ports of the PC UI proved unusable: hover-dependent tooltips, precise drag-and-drop, and tiny text
              clashed with handheld ergonomics. Early testing surfaced frustration around speed and information access
              during fast decision windows.
            </p>

            {/* Inserted image */}
            <div className="rounded-xl overflow-hidden border border-zinc-700">
              <img
                src="/images/TFT-hotkeys-guide.png"
                alt="TFT PC Hotkeys Overview"
                className="w-full object-cover"
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Empathizing</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Interviews with regular Switch players highlighted a desire for “native-feeling” controls and the ability
              to play brief sessions. They expect large touch targets, consistent button mapping, and clarity at a
              glance—even in tabletop mode two-feet away.
            </p>
            <div className="h-64 bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center text-zinc-500">
              [ Empathizing Image Placeholder ]
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Research</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 mb-4">
              <li><strong className="text-white">Competitive Analysis:</strong> Hearthstone &amp; Auto Chess mobile flows</li>
              <li><strong className="text-white">Heuristic Review:</strong> Identified info density &amp; hover reliance as top issues</li>
              <li><strong className="text-white">Guideline Audit:</strong> Mapped UI against Nintendo accessibility specs</li>
            </ul>
            <div className="h-64 bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center text-zinc-500">
              [ Research Image Placeholder ]
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">The Challenge</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              How can we maintain TFT’s rich strategy while making every core action feel effortless on a controller or
              touch screen? The end solution needed to be just as competitive as the PC version—without feeling like a
              second-class citizen.
            </p>
            <div className="h-64 bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center text-zinc-500">
              [ Challenge Image Placeholder ]
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Wireframes & Flow</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              I designed wireframes to showcase snap grid movement, HUD in handheld mode, and control overlays. These helped evaluate pacing, visibility, and ease of access.
            </p>
            <div className="h-80 bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center text-zinc-500">
              [ Wireframe Image Placeholder ]
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Testing & Iteration</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              I gathered feedback from designers and casual gamers. Early mockups suffered from pacing lags and text overflow. I rebalanced layout grids, adjusted contrast, and sped up snap movement through visual cues.
            </p>
            <div className="h-80 bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center text-zinc-500">
              [ Before & After Image Placeholder ]
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Final Solution</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              The final system featured a hex snap-to grid, minimalist HUD with radial menus, and remapped controls:
              A = select/place, B = cancel, L/R = tab between menus, ZR = roll, ZL = level up.
            </p>
            <div className="h-80 bg-zinc-800 rounded-lg border border-zinc-700 flex items-center justify-center text-zinc-500">
              [ Final Prototype Image Placeholder ]
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Learnings</h2>
            <p className="text-zinc-300 leading-relaxed">
              Adapting UX for console means thinking spatially—button mapping, screen distance, and timing become critical.
              Minimal UI doesn’t mean minimal depth. The smoother it feels, the more tactical thinking it unlocks.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Next Steps</h2>
            <p className="text-zinc-300 leading-relaxed">
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
