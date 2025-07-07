"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Users, Wrench, Target, Lightbulb, Gamepad2, Monitor, Smartphone } from "lucide-react"

export default function UXRedesignCaseStudy() {
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

        {/* Project Overview */}
        <div className="max-w-4xl mx-auto space-y-16">
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8 hover:border-pink-500/30 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
              Project Overview
              <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-pink-500" />
                  <div>
                    <div className="text-zinc-400 text-sm">Timeline</div>
                    <div className="text-white font-semibold">8 weeks (Q2 2023)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-pink-500" />
                  <div>
                    <div className="text-zinc-400 text-sm">Team</div>
                    <div className="text-white font-semibold">Solo UX Designer</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-pink-500" />
                  <div>
                    <div className="text-zinc-400 text-sm">Tools</div>
                    <div className="text-white font-semibold">Figma, Unity, Photoshop</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-pink-500" />
                  <div>
                    <div className="text-zinc-400 text-sm">Goal</div>
                    <div className="text-white font-semibold">Seamless PC-to-Switch adaptation</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-zinc-300 leading-relaxed">
              <p className="mb-4">
                Teamfight Tactics, Riot Games' auto-battler strategy game, needed to transition from PC to Nintendo
                Switch while maintaining its core gameplay experience. This project focused on redesigning the user
                interface and interaction patterns to work seamlessly on a handheld console with limited screen real
                estate and different input methods.
              </p>
              <p>
                The challenge was to preserve the strategic depth and visual clarity that made TFT successful on PC
                while adapting to the Switch's unique constraints and opportunities.
              </p>
            </div>
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
