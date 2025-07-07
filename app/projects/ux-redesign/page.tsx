"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Users, Wrench, Target, Shield, Globe, Heart, Accessibility } from "lucide-react"

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
          <div className="inline-block bg-zinc-900/80 backdrop-blur-md rounded-lg px-3 py-1 border border-zinc-800 text-blue-400 text-xs uppercase tracking-wider mb-6">
            Accessibility-First UX Case Study
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Redesigning the U.S. Immigration Website
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A comprehensive accessibility-first redesign focused on improving user experience for one of America's most
            critical government services
          </p>
        </div>

        {/* Wide Banner Image */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="w-full aspect-[21/9] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,15,17,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,17,0.9)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Globe className="h-20 w-20 text-blue-400 mx-auto mb-4 opacity-60" />
                <p className="text-zinc-400 text-lg uppercase tracking-wider">Case Study Banner Image</p>
                <p className="text-zinc-500 text-sm mt-2">Immigration Website Redesign Showcase</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Project Overview */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8 hover:border-blue-400/30 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-blue-400/30 mr-4"></span>
              Project Overview
              <span className="h-px flex-grow bg-blue-400/30 ml-4"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-zinc-400 text-sm">Timeline</div>
                    <div className="text-white font-semibold">12 weeks (Q1 2023)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-zinc-400 text-sm">Team</div>
                    <div className="text-white font-semibold">Lead UX Designer + 2 Researchers</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-zinc-400 text-sm">Tools</div>
                    <div className="text-white font-semibold">Figma, Axure, UserTesting, WAVE</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-zinc-400 text-sm">Goal</div>
                    <div className="text-white font-semibold">WCAG 2.1 AA compliance + improved UX</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-zinc-300 leading-relaxed">
              <p className="mb-4">
                The U.S. Immigration website serves millions of users annually, many of whom are non-native English
                speakers, elderly, or have disabilities. The existing site failed basic accessibility standards and
                created significant barriers for users navigating complex immigration processes.
              </p>
              <p>
                This project aimed to redesign the entire user experience with accessibility as the foundation, ensuring
                equal access to critical government services while improving overall usability for all users.
              </p>
            </div>
          </section>

          {/* Problem Exploration */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-blue-400/30 mr-4"></span>
              Problem Exploration
              <span className="h-px flex-grow bg-blue-400/30 ml-4"></span>
            </h2>

            <div className="text-zinc-300 leading-relaxed">
              <p>
                Comprehensive analysis of the existing immigration website revealed systemic accessibility failures that
                created insurmountable barriers for vulnerable populations. The site's architecture was built around
                government departmental structures rather than user needs, resulting in a labyrinthine navigation system
                that confused even experienced users. Technical audits uncovered over 200 WCAG violations, while
                analytics showed that 73% of users abandoned critical processes before completion. The complexity was
                compounded by legal requirements that demanded precise language, creating a tension between compliance
                and usability that had never been properly addressed.
              </p>
            </div>
          </section>

          {/* Empathizing */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-blue-400/30 mr-4"></span>
              Empathizing
              <span className="h-px flex-grow bg-blue-400/30 ml-4"></span>
            </h2>

            <div className="text-zinc-300 leading-relaxed">
              <p>
                Through extensive interviews with immigrants, legal aid workers, and disability advocates, we uncovered
                the profound emotional toll of the website's failures. Users described feelings of helplessness,
                frustration, and fear when navigating processes that could determine their future in the country. Many
                had to rely on expensive legal services simply to complete basic online forms, creating additional
                financial barriers. Screen reader users reported spending hours trying to complete tasks that should
                take minutes, while non-native English speakers struggled with complex legal terminology that wasn't
                properly translated or explained. The human cost of poor digital design became starkly apparent through
                these conversations.
              </p>
            </div>
          </section>

          {/* The Challenge */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-blue-400/30 mr-4"></span>
              The Challenge
              <span className="h-px flex-grow bg-blue-400/30 ml-4"></span>
            </h2>

            <div className="text-zinc-300 space-y-4 leading-relaxed">
              <p>
                <strong className="text-blue-400">Core Problem:</strong> How do we redesign a complex government website
                to be fully accessible while serving users with diverse needs, languages, and technical abilities?
              </p>
              <p>
                The existing immigration website had a 73% task failure rate, with users frequently abandoning critical
                processes like visa applications and status checks. The site violated numerous WCAG guidelines, had poor
                mobile responsiveness, and used confusing navigation patterns that left users lost in bureaucratic maze.
              </p>
              <p>
                <strong className="text-cyan-400">Key Question:</strong> Can we create an accessible, user-friendly
                experience that maintains compliance with government regulations while dramatically improving success
                rates?
              </p>
            </div>
          </section>

          {/* Research */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-blue-400/30 mr-4"></span>
              Research
              <span className="h-px flex-grow bg-blue-400/30 ml-4"></span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Accessibility Audit</h3>
                <div className="text-zinc-300 space-y-3">
                  <p>
                    • <strong>WCAG Violations:</strong> 247 accessibility issues across critical user paths
                  </p>
                  <p>
                    • <strong>Screen Reader Issues:</strong> Poor semantic structure, missing alt text, unclear focus
                    states
                  </p>
                  <p>
                    • <strong>Color Contrast:</strong> 68% of text failed minimum contrast requirements
                  </p>
                  <p>
                    • <strong>Keyboard Navigation:</strong> Many interactive elements unreachable via keyboard
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">User Research</h3>
                <div className="text-zinc-300 space-y-3">
                  <p>• Interviewed 24 users including immigrants, legal aid workers, and disability advocates</p>
                  <p>• Conducted usability testing with assistive technology users</p>
                  <p>• Analyzed support ticket data revealing common pain points</p>
                  <p>• Studied successful government website redesigns (UK.gov, Canada.ca)</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Stakeholder Insights</h3>
                <div className="text-zinc-300 space-y-3">
                  <p>• Legal requirements create complex information architecture challenges</p>
                  <p>• Multi-language support needed for 12+ languages</p>
                  <p>• Integration with existing government systems limits some design options</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Insights */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-blue-400/30 mr-4"></span>
              Key Insights
              <span className="h-px flex-grow bg-blue-400/30 ml-4"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/80 rounded-xl p-6 border border-blue-400/20">
                <Accessibility className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Universal Design Benefits All</h3>
                <p className="text-zinc-300 text-sm">
                  Accessibility improvements like clear language and logical flow helped all users, not just those with
                  disabilities.
                </p>
              </div>

              <div className="bg-zinc-900/80 rounded-xl p-6 border border-emerald-400/20">
                <Globe className="h-8 w-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Language is a Barrier</h3>
                <p className="text-zinc-300 text-sm">
                  Complex legal language and poor translations created insurmountable obstacles for non-native speakers.
                </p>
              </div>

              <div className="bg-zinc-900/80 rounded-xl p-6 border border-purple-400/20">
                <Shield className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Trust Through Transparency</h3>
                <p className="text-zinc-300 text-sm">
                  Users needed clear progress indicators and status updates to trust the complex immigration process.
                </p>
              </div>

              <div className="bg-zinc-900/80 rounded-xl p-6 border border-pink-400/20">
                <Heart className="h-8 w-8 text-pink-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Emotional Support Matters</h3>
                <p className="text-zinc-300 text-sm">
                  Immigration processes are emotionally charged; the interface needed to provide reassurance and
                  guidance.
                </p>
              </div>
            </div>
          </section>

          {/* Design Principles */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-blue-400/30 mr-4"></span>
              Design Principles
              <span className="h-px flex-grow bg-blue-400/30 ml-4"></span>
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Accessibility First</h3>
                  <p className="text-zinc-300">
                    Every design decision evaluated through accessibility lens before aesthetic considerations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Plain Language</h3>
                  <p className="text-zinc-300">
                    Complex legal concepts explained in clear, actionable language at 8th grade reading level
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Progressive Disclosure</h3>
                  <p className="text-zinc-300">
                    Present information in digestible chunks to prevent cognitive overload
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Cultural Sensitivity</h3>
                  <p className="text-zinc-300">
                    Design patterns and content that respect diverse cultural backgrounds and contexts
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Error Prevention</h3>
                  <p className="text-zinc-300">
                    Proactive guidance and validation to prevent costly mistakes in critical processes
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Wireframes & Flow */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-blue-400/30 mr-4"></span>
              Wireframes & Flow
              <span className="h-px flex-grow bg-blue-400/30 ml-4"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-700">
                <div className="aspect-video relative bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,15,17,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,17,0.9)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="h-12 w-12 text-blue-400 mx-auto mb-2 opacity-60" />
                      <p className="text-zinc-400 text-sm">Wireframe Placeholder</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-sm text-zinc-400 text-center">
                  Simplified navigation structure with clear visual hierarchy
                </div>
              </div>

              <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-700">
                <div className="aspect-video relative bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,15,17,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,17,0.9)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Accessibility className="h-12 w-12 text-emerald-400 mx-auto mb-2 opacity-60" />
                      <p className="text-zinc-400 text-sm">User Flow</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-sm text-zinc-400 text-center">
                  Accessible form flow with clear progress indicators and help text
                </div>
              </div>
            </div>
          </section>

          {/* Testing & Iteration */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-blue-400/30 mr-4"></span>
              Testing & Iteration
              <span className="h-px flex-grow bg-blue-400/30 ml-4"></span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Accessibility Testing Results</h3>
                <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700">
                  <div className="text-zinc-300 space-y-3">
                    <p>
                      • <strong className="text-emerald-400">WCAG Compliance:</strong> Achieved AA level compliance
                      across all tested scenarios
                    </p>
                    <p>
                      • <strong className="text-blue-400">Screen Reader Testing:</strong> 95% task completion rate with
                      NVDA and JAWS users
                    </p>
                    <p>
                      • <strong className="text-purple-400">Keyboard Navigation:</strong> All interactive elements
                      accessible via keyboard with clear focus indicators
                    </p>
                    <p>
                      • <strong className="text-pink-400">Cognitive Load:</strong> 40% reduction in time-to-completion
                      for complex forms
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
                      <p className="text-zinc-400 text-sm">73% Task Failure Rate</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3">After</h4>
                  <div className="bg-zinc-900 rounded-lg border border-zinc-700 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-8 w-8 bg-emerald-500/20 rounded mx-auto mb-2"></div>
                      <p className="text-zinc-400 text-sm">91% Task Success Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Solution */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-blue-400/30 mr-4"></span>
              Final Solution
              <span className="h-px flex-grow bg-blue-400/30 ml-4"></span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Simplified Information Architecture</h3>
                <p className="text-zinc-300 mb-4">
                  Restructured the entire site around user goals rather than government departments, reducing navigation
                  complexity by 60% while maintaining all required legal information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Accessible Form Design</h3>
                <p className="text-zinc-300 mb-4">
                  Implemented progressive disclosure, clear error messaging, and contextual help that reduced form
                  abandonment by 45% while achieving full WCAG 2.1 AA compliance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Multi-language Support</h3>
                <p className="text-zinc-300 mb-4">
                  Created a scalable translation system with cultural adaptation, not just literal translation,
                  improving comprehension for non-native English speakers by 67%.
                </p>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-blue-400/30 mr-4"></span>
              Learnings
              <span className="h-px flex-grow bg-blue-400/30 ml-4"></span>
            </h2>

            <div className="text-zinc-300 space-y-4 leading-relaxed">
              <p>
                <strong className="text-blue-400">Accessibility is not optional:</strong> Government services must be
                accessible to all citizens. What started as compliance became a driver for better design for everyone.
              </p>
              <p>
                <strong className="text-emerald-400">Language matters more than design:</strong> Clear, simple language
                had a bigger impact on user success than visual design improvements. Content strategy is UX strategy.
              </p>
              <p>
                <strong className="text-purple-400">Stakeholder education is crucial:</strong> Success required
                extensive education of government stakeholders about accessibility requirements and user-centered design
                principles.
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-blue-400/30 mr-4"></span>
              Next Steps
              <span className="h-px flex-grow bg-blue-400/30 ml-4"></span>
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">AI-Powered Assistance</h3>
                  <p className="text-zinc-300">
                    Implement chatbot with multilingual support to guide users through complex processes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Mobile-First Redesign</h3>
                  <p className="text-zinc-300">
                    Optimize for mobile usage patterns as 70% of users access the site via mobile devices
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Continuous Accessibility Monitoring</h3>
                  <p className="text-zinc-300">
                    Implement automated accessibility testing in the development pipeline to prevent regressions
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
