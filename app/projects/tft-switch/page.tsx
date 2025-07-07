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

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Project Overview */}
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

          {/* Problem Exploration */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
              Problem Exploration
              <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
            </h2>

            <div className="text-zinc-300 leading-relaxed">
              <p>
                Initial analysis revealed that TFT's PC interface relied heavily on desktop-specific interaction
                patterns that would fundamentally break on Nintendo Switch. The game's success on PC stemmed from
                precise mouse controls, hover states for information display, and multi-window layouts that simply don't
                translate to console gaming. Early prototyping sessions showed that direct ports of PC interfaces to
                handheld devices resulted in frustrating user experiences, with players unable to access critical game
                information efficiently during time-pressured decision-making moments.
              </p>
            </div>
          </section>

          {/* Empathizing */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
              Empathizing
              <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
            </h2>

            <div className="text-zinc-300 leading-relaxed">
              <p>
                Through observational studies and interviews with both PC TFT players and Nintendo Switch enthusiasts,
                we discovered that Switch players have fundamentally different expectations and behaviors. They value
                quick, intuitive interactions that work seamlessly in both handheld and docked modes. Many expressed
                frustration with games that felt like "lazy PC ports" and emphasized the importance of interfaces that
                felt native to the Nintendo ecosystem. Players also revealed that they often play in shorter, more
                casual sessions compared to PC gaming, requiring interfaces that could accommodate both quick matches
                and longer strategic sessions.
              </p>
            </div>
          </section>

          {/* The Challenge */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
              The Challenge
              <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
            </h2>

            <div className="text-zinc-300 space-y-4 leading-relaxed">
              <p>
                <strong className="text-pink-500">Core Problem:</strong> How do we adapt a complex PC strategy game
                designed for mouse and keyboard to work intuitively on a handheld console with touch and controller
                inputs?
              </p>
              <p>
                The Nintendo Switch presents unique constraints: a 6.2-inch screen in handheld mode, Joy-Con controllers
                with limited precision, and the need to support both docked and portable play modes. TFT's PC interface
                relies heavily on hover states, right-click menus, and precise cursor positioning—none of which
                translate directly to console gaming.
              </p>
              <p>
                <strong className="text-cyan-400">Key Question:</strong> Can we maintain TFT's strategic depth while
                creating an interface that feels native to Nintendo Switch players?
              </p>
            </div>
          </section>

          {/* Research */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
              Research
              <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-pink-500 mb-4">Competitive Analysis</h3>
                <div className="text-zinc-300 space-y-3">
                  <p>
                    • <strong>Chess.com Mobile:</strong> Simplified board interaction with tap-to-select mechanics
                  </p>
                  <p>
                    • <strong>Hearthstone:</strong> Card-based UI optimized for touch with clear visual hierarchy
                  </p>
                  <p>
                    • <strong>Civilization VI (Switch):</strong> Successful PC-to-console adaptation with redesigned
                    menus
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-pink-500 mb-4">Heuristic Evaluation</h3>
                <div className="text-zinc-300 space-y-3">
                  <p>• Information density too high for small screens</p>
                  <p>• Hover-dependent interactions need alternatives</p>
                  <p>• Text sizes below Nintendo's accessibility guidelines</p>
                  <p>• Complex nested menus difficult with controller navigation</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-pink-500 mb-4">User Expectations</h3>
                <div className="text-zinc-300 space-y-3">
                  <p>• Switch players expect intuitive button mapping</p>
                  <p>• Touch controls should feel responsive and precise</p>
                  <p>• UI should scale appropriately between docked/handheld modes</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Insights */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
              Key Insights
              <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/80 rounded-xl p-6 border border-pink-500/20">
                <Lightbulb className="h-8 w-8 text-pink-500 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Context is King</h3>
                <p className="text-zinc-300 text-sm">
                  Switch players need immediate visual context without hover states. All critical information must be
                  visible at a glance.
                </p>
              </div>

              <div className="bg-zinc-900/80 rounded-xl p-6 border border-cyan-400/20">
                <Gamepad2 className="h-8 w-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Input Flexibility</h3>
                <p className="text-zinc-300 text-sm">
                  Supporting both touch and controller inputs simultaneously creates the most accessible experience for
                  all play styles.
                </p>
              </div>

              <div className="bg-zinc-900/80 rounded-xl p-6 border border-purple-400/20">
                <Monitor className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Adaptive Scaling</h3>
                <p className="text-zinc-300 text-sm">
                  UI elements need to dynamically scale based on play mode while maintaining consistent interaction
                  patterns.
                </p>
              </div>

              <div className="bg-zinc-900/80 rounded-xl p-6 border border-emerald-400/20">
                <Smartphone className="h-8 w-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Gesture Economy</h3>
                <p className="text-zinc-300 text-sm">
                  Reducing the number of required gestures and taps improves both speed and accessibility for handheld
                  play.
                </p>
              </div>
            </div>
          </section>

          {/* Design Principles */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
              Design Principles
              <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Immediate Clarity</h3>
                  <p className="text-zinc-300">All game state information visible without additional input</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Consistent Navigation</h3>
                  <p className="text-zinc-300">Unified button mapping across all game modes and menus</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Adaptive Interface</h3>
                  <p className="text-zinc-300">Dynamic scaling and layout adjustments for different play modes</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Gesture Efficiency</h3>
                  <p className="text-zinc-300">Minimize required inputs while maintaining strategic depth</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Accessibility First</h3>
                  <p className="text-zinc-300">Meet Nintendo's accessibility standards for text size and contrast</p>
                </div>
              </div>
            </div>
          </section>

          {/* Wireframes & Flow */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
              Wireframes & Flow
              <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-700">
                <div className="aspect-video relative bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,15,17,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,17,0.9)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Monitor className="h-12 w-12 text-pink-500 mx-auto mb-2 opacity-60" />
                      <p className="text-zinc-400 text-sm">Wireframe Placeholder</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-sm text-zinc-400 text-center">
                  Initial board layout wireframes showing champion positioning grid
                </div>
              </div>

              <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-700">
                <div className="aspect-video relative bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,15,17,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,17,0.9)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="h-12 w-12 text-cyan-400 mx-auto mb-2 opacity-60" />
                      <p className="text-zinc-400 text-sm">Flow Diagram</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-sm text-zinc-400 text-center">
                  User flow for champion selection and positioning in handheld mode
                </div>
              </div>
            </div>
          </section>

          {/* Testing & Iteration */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
              Testing & Iteration
              <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-pink-500 mb-4">Feedback Summary</h3>
                <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700">
                  <div className="text-zinc-300 space-y-3">
                    <p>
                      • <strong className="text-emerald-400">Positive:</strong> Touch controls felt intuitive, visual
                      hierarchy improved readability
                    </p>
                    <p>
                      • <strong className="text-yellow-400">Concerns:</strong> Some buttons too small in handheld mode,
                      shop interface cluttered
                    </p>
                    <p>
                      • <strong className="text-red-400">Issues:</strong> Controller navigation inconsistent, item
                      tooltips hard to read
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Before</h4>
                  <div className="bg-zinc-900 rounded-lg border border-zinc-700 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-8 w-8 bg-red-500/20 rounded mx-auto mb-2"></div>
                      <p className="text-zinc-400 text-sm">Original PC Interface</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3">After</h4>
                  <div className="bg-zinc-900 rounded-lg border border-zinc-700 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-8 w-8 bg-emerald-500/20 rounded mx-auto mb-2"></div>
                      <p className="text-zinc-400 text-sm">Optimized Switch Interface</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Solution */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
              Final Solution
              <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-pink-500 mb-4">Snap Grid System</h3>
                <p className="text-zinc-300 mb-4">
                  Implemented a magnetic grid system that automatically snaps champions to valid positions, eliminating
                  the need for precise cursor placement while maintaining strategic positioning options.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Redesigned HUD</h3>
                <p className="text-zinc-300 mb-4">
                  Consolidated critical information into persistent UI elements with larger touch targets and improved
                  contrast ratios for handheld visibility.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Smart Control Remapping</h3>
                <p className="text-zinc-300 mb-4">
                  Created context-sensitive button mappings that adapt based on current game state, reducing cognitive
                  load while maintaining quick access to all functions.
                </p>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
              Learnings
              <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
            </h2>

            <div className="text-zinc-300 space-y-4 leading-relaxed">
              <p>
                <strong className="text-pink-500">Platform constraints drive innovation:</strong> The Switch's
                limitations forced creative solutions that ultimately improved the overall user experience, even for PC
                players.
              </p>
              <p>
                <strong className="text-cyan-400">Context switching is expensive:</strong> Users struggled when
                interface patterns changed between game modes. Consistency across all interactions proved more important
                than mode-specific optimizations.
              </p>
              <p>
                <strong className="text-purple-400">Accessibility benefits everyone:</strong> Designing for handheld
                visibility and touch accessibility created a more inclusive experience that worked better for all
                players.
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
              Next Steps
              <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Advanced Gesture Support</h3>
                  <p className="text-zinc-300">
                    Implement multi-touch gestures for power users who want faster interaction methods
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Cross-Platform Progression</h3>
                  <p className="text-zinc-300">Develop seamless account syncing and cross-platform play features</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Performance Optimization</h3>
                  <p className="text-zinc-300">
                    Continue optimizing for stable 60fps in both docked and handheld modes
                  </p>
                </div>
              </div>
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
