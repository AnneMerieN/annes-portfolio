"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, Users, Wrench, Target, Heart, Utensils, Smartphone, Star } from "lucide-react"

export default function SealbitesAppCaseStudy() {
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
          <div className="inline-block bg-zinc-900/80 backdrop-blur-md rounded-lg px-3 py-1 border border-zinc-800 text-emerald-400 text-xs uppercase tracking-wider mb-6">
            Product & UX Case Study
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            SealBites – A Cozy Bento Recipe App
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            A delightful mobile app that makes Japanese bento box creation accessible and enjoyable for home cooks of
            all skill levels
          </p>
        </div>

        {/* Wide Banner Image */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="w-full aspect-[21/9] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl border border-zinc-700 overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,15,17,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,17,0.9)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,197,94,0.1)_0%,transparent_70%)]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Utensils className="h-20 w-20 text-emerald-400 mx-auto mb-4 opacity-60" />
                <p className="text-zinc-400 text-lg uppercase tracking-wider">Case Study Banner Image</p>
                <p className="text-zinc-500 text-sm mt-2">SealBites App Design Showcase</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Project Overview */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8 hover:border-emerald-400/30 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-emerald-400/30 mr-4"></span>
              Project Overview
              <span className="h-px flex-grow bg-emerald-400/30 ml-4"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-emerald-400" />
                  <div>
                    <div className="text-zinc-400 text-sm">Timeline</div>
                    <div className="text-white font-semibold">16 weeks (Q3-Q4 2023)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-emerald-400" />
                  <div>
                    <div className="text-zinc-400 text-sm">Team</div>
                    <div className="text-white font-semibold">Product Designer + Developer + Food Stylist</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-emerald-400" />
                  <div>
                    <div className="text-zinc-400 text-sm">Tools</div>
                    <div className="text-white font-semibold">Figma, Principle, React Native, Firebase</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-emerald-400" />
                  <div>
                    <div className="text-zinc-400 text-sm">Goal</div>
                    <div className="text-white font-semibold">Democratize bento box creation</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-zinc-300 leading-relaxed">
              <p className="mb-4">
                SealBites was born from the observation that while bento boxes are beautiful and nutritious, many people
                find them intimidating to create. The app needed to bridge the gap between inspiration and execution,
                making Japanese lunch culture accessible to busy families and food enthusiasts worldwide.
              </p>
              <p>
                The challenge was to create an experience that felt both educational and delightful, respecting the
                cultural significance of bento while making it approachable for newcomers.
              </p>
            </div>
          </section>

          {/* Problem Exploration */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-emerald-400/30 mr-4"></span>
              Problem Exploration
              <span className="h-px flex-grow bg-emerald-400/30 ml-4"></span>
            </h2>

            <div className="text-zinc-300 leading-relaxed">
              <p>
                Market research revealed a significant gap between the popularity of bento culture on social media and
                actual home preparation. While Instagram and TikTok showcased millions of beautiful bento creations,
                surveys indicated that 78% of interested users never attempted making their own due to perceived
                complexity and cultural barriers. Existing recipe apps treated bento components as isolated dishes,
                missing the holistic philosophy of balance, seasonality, and visual harmony that defines authentic bento
                culture. This fragmented approach left users with ingredients and techniques but no understanding of the
                underlying principles that make bento both nutritious and aesthetically pleasing.
              </p>
            </div>
          </section>

          {/* Empathizing */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-emerald-400/30 mr-4"></span>
              Empathizing
              <span className="h-px flex-grow bg-emerald-400/30 ml-4"></span>
            </h2>

            <div className="text-zinc-300 leading-relaxed">
              <p>
                Deep conversations with potential users revealed that bento creation represented more than just meal
                preparation—it was an act of care, creativity, and cultural connection. Parents expressed desire to
                create nutritious, visually appealing lunches for their children but felt overwhelmed by the perceived
                "rules" and worried about cultural appropriation. Food enthusiasts were drawn to the aesthetic and
                mindful aspects of bento but lacked confidence in balancing flavors, colors, and nutritional content.
                Many users had attempted bento creation after seeing social media posts, only to feel discouraged when
                their results didn't match the polished images they'd seen, leading to abandonment of the practice
                entirely.
              </p>
            </div>
          </section>

          {/* The Challenge */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-emerald-400/30 mr-4"></span>
              The Challenge
              <span className="h-px flex-grow bg-emerald-400/30 ml-4"></span>
            </h2>

            <div className="text-zinc-300 space-y-4 leading-relaxed">
              <p>
                <strong className="text-emerald-400">Core Problem:</strong> How do we make the art of bento creation
                accessible to beginners while respecting its cultural significance and maintaining authenticity?
              </p>
              <p>
                Bento boxes require balancing nutrition, aesthetics, and cultural traditions. Many existing recipe apps
                focus solely on individual dishes, missing the holistic approach that makes bento special. Users needed
                guidance on portion balance, color harmony, and seasonal ingredients—concepts that are intuitive to
                experienced bento makers but overwhelming to newcomers.
              </p>
              <p>
                <strong className="text-cyan-400">Key Question:</strong> Can we create a digital experience that
                captures the mindful, artistic nature of bento making while providing practical, step-by-step guidance?
              </p>
            </div>
          </section>

          {/* Research */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-emerald-400/30 mr-4"></span>
              Research
              <span className="h-px flex-grow bg-emerald-400/30 ml-4"></span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Cultural Research</h3>
                <div className="text-zinc-300 space-y-3">
                  <p>
                    • <strong>Traditional Principles:</strong> Studied ichijuu-sansai (one soup, three dishes) and
                    seasonal eating concepts
                  </p>
                  <p>
                    • <strong>Modern Adaptations:</strong> Interviewed Japanese mothers about contemporary bento
                    practices
                  </p>
                  <p>
                    • <strong>Western Adoption:</strong> Analyzed how bento culture has been adapted in Western
                    countries
                  </p>
                  <p>
                    • <strong>Instagram Analysis:</strong> Studied 500+ bento posts to understand visual patterns and
                    user motivations
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-4">User Interviews</h3>
                <div className="text-zinc-300 space-y-3">
                  <p>• Spoke with 18 participants: busy parents, food enthusiasts, and cultural learners</p>
                  <p>• Key insight: Users wanted guidance on "the rules" but feared being culturally insensitive</p>
                  <p>• Time constraint was the biggest barrier to bento creation</p>
                  <p>• Visual inspiration was important, but practical guidance was lacking</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Competitive Analysis</h3>
                <div className="text-zinc-300 space-y-3">
                  <p>• Recipe apps focused on individual dishes, not complete meal composition</p>
                  <p>• Existing bento apps were either too complex or culturally superficial</p>
                  <p>• Opportunity identified for educational yet practical approach</p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Insights */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-emerald-400/30 mr-4"></span>
              Key Insights
              <span className="h-px flex-grow bg-emerald-400/30 ml-4"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/80 rounded-xl p-6 border border-emerald-400/20">
                <Heart className="h-8 w-8 text-emerald-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Emotional Connection</h3>
                <p className="text-zinc-300 text-sm">
                  Bento making is an act of care and creativity. The app needed to honor this emotional aspect, not just
                  provide recipes.
                </p>
              </div>

              <div className="bg-zinc-900/80 rounded-xl p-6 border border-yellow-400/20">
                <Utensils className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Balance Over Perfection</h3>
                <p className="text-zinc-300 text-sm">
                  Users needed guidance on achieving nutritional and visual balance rather than pursuing
                  Instagram-perfect presentations.
                </p>
              </div>

              <div className="bg-zinc-900/80 rounded-xl p-6 border border-blue-400/20">
                <Smartphone className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Mobile-First Mindset</h3>
                <p className="text-zinc-300 text-sm">
                  Users wanted to reference the app while cooking, requiring clear, glanceable information and
                  hands-free interaction options.
                </p>
              </div>

              <div className="bg-zinc-900/80 rounded-xl p-6 border border-purple-400/20">
                <Star className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Progressive Learning</h3>
                <p className="text-zinc-300 text-sm">
                  Users wanted to start simple and gradually learn more complex techniques and cultural nuances over
                  time.
                </p>
              </div>
            </div>
          </section>

          {/* Design Principles */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-emerald-400/30 mr-4"></span>
              Design Principles
              <span className="h-px flex-grow bg-emerald-400/30 ml-4"></span>
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Cultural Respect</h3>
                  <p className="text-zinc-300">
                    Honor traditional bento principles while making them accessible to global audiences
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Gentle Guidance</h3>
                  <p className="text-zinc-300">
                    Provide supportive education without overwhelming beginners or constraining creativity
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Visual Harmony</h3>
                  <p className="text-zinc-300">
                    Create an interface that reflects the aesthetic principles of bento: balance, seasonality, and
                    mindful composition
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Practical Magic</h3>
                  <p className="text-zinc-300">
                    Make the complex simple through smart defaults and contextual assistance
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Community Connection</h3>
                  <p className="text-zinc-300">
                    Foster a supportive community where users can share creations and learn from each other
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Wireframes & Flow */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-emerald-400/30 mr-4"></span>
              Wireframes & Flow
              <span className="h-px flex-grow bg-emerald-400/30 ml-4"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-700">
                <div className="aspect-video relative bg-gradient-to-br from-emerald-500/20 to-green-500/20">
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,15,17,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,17,0.9)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Utensils className="h-12 w-12 text-emerald-400 mx-auto mb-2 opacity-60" />
                      <p className="text-zinc-400 text-sm">Wireframe Placeholder</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-sm text-zinc-400 text-center">
                  Bento builder interface with drag-and-drop compartment design
                </div>
              </div>

              <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-700">
                <div className="aspect-video relative bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,15,17,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(15,15,17,0.9)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Heart className="h-12 w-12 text-yellow-400 mx-auto mb-2 opacity-60" />
                      <p className="text-zinc-400 text-sm">User Journey</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-sm text-zinc-400 text-center">
                  Onboarding flow introducing bento principles through interactive tutorials
                </div>
              </div>
            </div>
          </section>

          {/* Testing & Iteration */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-emerald-400/30 mr-4"></span>
              Testing & Iteration
              <span className="h-px flex-grow bg-emerald-400/30 ml-4"></span>
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-4">User Testing Insights</h3>
                <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700">
                  <div className="text-zinc-300 space-y-3">
                    <p>
                      • <strong className="text-emerald-400">Success:</strong> 89% of users successfully created their
                      first bento using the guided mode
                    </p>
                    <p>
                      • <strong className="text-yellow-400">Iteration:</strong> Simplified color balance indicator after
                      users found the original too complex
                    </p>
                    <p>
                      • <strong className="text-blue-400">Discovery:</strong> Users loved the seasonal ingredient
                      suggestions and cultural context notes
                    </p>
                    <p>
                      • <strong className="text-purple-400">Improvement:</strong> Added quick-swap feature for dietary
                      restrictions and preferences
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Before</h4>
                  <div className="bg-zinc-900 rounded-lg border border-zinc-700 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-8 w-8 bg-orange-500/20 rounded mx-auto mb-2"></div>
                      <p className="text-zinc-400 text-sm">Complex Interface</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3">After</h4>
                  <div className="bg-zinc-900 rounded-lg border border-zinc-700 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-8 w-8 bg-emerald-500/20 rounded mx-auto mb-2"></div>
                      <p className="text-zinc-400 text-sm">Intuitive & Delightful</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Solution */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-emerald-400/30 mr-4"></span>
              Final Solution
              <span className="h-px flex-grow bg-emerald-400/30 ml-4"></span>
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Smart Bento Builder</h3>
                <p className="text-zinc-300 mb-4">
                  An intuitive drag-and-drop interface that automatically suggests complementary dishes based on
                  nutritional balance, color harmony, and seasonal availability. Users can start with templates or build
                  from scratch with real-time guidance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Cultural Learning Integration</h3>
                <p className="text-zinc-300 mb-4">
                  Contextual education woven throughout the experience, teaching users about seasonal eating, color
                  significance, and traditional techniques without interrupting the creative flow.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">Community & Sharing</h3>
                <p className="text-zinc-300 mb-4">
                  A supportive community feature where users can share their creations, get feedback, and discover new
                  ideas while maintaining privacy controls and cultural sensitivity guidelines.
                </p>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-emerald-400/30 mr-4"></span>
              Learnings
              <span className="h-px flex-grow bg-emerald-400/30 ml-4"></span>
            </h2>

            <div className="text-zinc-300 space-y-4 leading-relaxed">
              <p>
                <strong className="text-emerald-400">Cultural sensitivity requires deep research:</strong> Understanding
                the cultural context was as important as the UX design. Superficial treatment would have been
                disrespectful and ineffective.
              </p>
              <p>
                <strong className="text-yellow-400">Education and creation can coexist:</strong> Users appreciated
                learning cultural context while creating, as long as it felt natural and optional rather than mandatory.
              </p>
              <p>
                <strong className="text-blue-400">Community amplifies individual creativity:</strong> The sharing
                features became unexpectedly popular, with users finding inspiration and confidence through community
                interaction.
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <section className="bg-zinc-800/30 rounded-2xl border border-zinc-700 p-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="h-px flex-grow bg-emerald-400/30 mr-4"></span>
              Next Steps
              <span className="h-px flex-grow bg-emerald-400/30 ml-4"></span>
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">AR Portion Visualization</h3>
                  <p className="text-zinc-300">
                    Implement AR features to help users visualize portion sizes and arrangement in their actual bento
                    boxes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Meal Planning Integration</h3>
                  <p className="text-zinc-300">
                    Expand to weekly meal planning with bento-focused grocery lists and prep schedules
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Global Lunch Box Traditions</h3>
                  <p className="text-zinc-300">
                    Explore other cultural lunch traditions to create a comprehensive global lunch culture app
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
