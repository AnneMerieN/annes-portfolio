"use client"

import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { caseStudies } from "@/data/case-studies"

export default function CaseStudyPage() {
  const params = useParams()
  const slug = params.slug as string
  const caseStudy = caseStudies.find((study) => study.slug === slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-zinc-900 font-mono">
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

      {/* Banner */}
      <div className="w-full h-[30vh] md:h-[40vh] relative bg-zinc-800 border-b border-zinc-700">
        {caseStudy.bannerImage && (
          <Image
            src={caseStudy.bannerImage || "/placeholder.svg"}
            alt={`${caseStudy.title} banner`}
            fill
            className="object-cover opacity-70"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(24,24,27,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.9)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(249,168,212,0.1)_0%,transparent_70%)]"></div>

        {/* Project title overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block bg-zinc-900/80 backdrop-blur-md rounded-lg px-3 py-1 border border-zinc-800 text-pink-500 text-xs uppercase tracking-wider mb-2">
              {caseStudy.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white px-4 py-2 bg-zinc-900/30 backdrop-blur-sm rounded-lg border border-zinc-800/30">
              {caseStudy.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Project links */}
          <div className="flex justify-center gap-6 mb-12">
            {caseStudy.demoUrl && (
              <Link
                href={caseStudy.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-300 hover:text-pink-500 transition-colors px-4 py-2 border border-zinc-700 rounded-lg hover:border-pink-500"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="text-sm uppercase tracking-wider">Live Demo</span>
              </Link>
            )}
            {caseStudy.githubUrl && (
              <Link
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-300 hover:text-pink-500 transition-colors px-4 py-2 border border-zinc-700 rounded-lg hover:border-pink-500"
              >
                <Github className="h-4 w-4" />
                <span className="text-sm uppercase tracking-wider">View Code</span>
              </Link>
            )}
          </div>

          {/* Overview */}
          <section className="mb-16">
            <div className="bg-zinc-800/50 rounded-lg border border-zinc-700 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
                Overview
                <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
              </h2>
              <div className="text-zinc-300 space-y-4">
                {caseStudy.overview.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Problem Statement */}
          <section className="mb-16">
            <div className="bg-zinc-800/30 rounded-lg border border-zinc-700 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
                Problem Statement
                <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
              </h2>
              <div className="text-zinc-300 space-y-4">
                {caseStudy.problemStatement.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Research */}
          {caseStudy.research && (
            <section className="mb-16">
              <div className="bg-zinc-800/50 rounded-lg border border-zinc-700 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
                  Research
                  <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
                </h2>
                <div className="text-zinc-300 space-y-4">
                  {caseStudy.research.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Design Process */}
          {caseStudy.designProcess && (
            <section className="mb-16">
              <div className="bg-zinc-800/30 rounded-lg border border-zinc-700 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
                  Design Process
                  <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
                </h2>
                <div className="text-zinc-300 space-y-4">
                  {caseStudy.designProcess.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Wireframes */}
          {caseStudy.wireframes && caseStudy.wireframes.length > 0 && (
            <section className="mb-16">
              <div className="bg-zinc-800/50 rounded-lg border border-zinc-700 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
                  Wireframes
                  <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.wireframes.map((wireframe, index) => (
                    <div key={index} className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-700">
                      <div className="aspect-video relative">
                        <Image
                          src={wireframe.image || "/placeholder.svg"}
                          alt={wireframe.caption || `Wireframe ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {wireframe.caption && (
                        <div className="p-4 text-sm text-zinc-400 text-center">{wireframe.caption}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Final Design */}
          {caseStudy.finalDesign && (
            <section className="mb-16">
              <div className="bg-zinc-800/30 rounded-lg border border-zinc-700 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
                  Final Design
                  <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
                </h2>
                <div className="text-zinc-300 space-y-4 mb-8">
                  {caseStudy.finalDesign.description.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Final design images */}
                {caseStudy.finalDesign.images && caseStudy.finalDesign.images.length > 0 && (
                  <div className="grid grid-cols-1 gap-8">
                    {caseStudy.finalDesign.images.map((image, index) => (
                      <div key={index} className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-700">
                        <div className="aspect-video relative">
                          <Image
                            src={image.image || "/placeholder.svg"}
                            alt={image.caption || `Design ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {image.caption && <div className="p-4 text-sm text-zinc-400 text-center">{image.caption}</div>}
                      </div>
                    ))}
                  </div>
                )}

                {/* Figma embed */}
                {caseStudy.finalDesign.figmaEmbed && (
                  <div className="mt-8">
                    <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-700 p-4">
                      <h3 className="text-lg font-bold text-white mb-4">Interactive Prototype</h3>
                      <div className="aspect-[16/9] w-full">
                        <iframe
                          className="w-full h-full"
                          src={caseStudy.finalDesign.figmaEmbed}
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Key Learnings */}
          {caseStudy.keyLearnings && (
            <section className="mb-16">
              <div className="bg-zinc-800/50 rounded-lg border border-zinc-700 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="h-px flex-grow bg-pink-500/30 mr-4"></span>
                  Key Learnings
                  <span className="h-px flex-grow bg-pink-500/30 ml-4"></span>
                </h2>
                <ul className="text-zinc-300 space-y-4 list-disc pl-5">
                  {caseStudy.keyLearnings.map((learning, index) => (
                    <li key={index} className="leading-relaxed">
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Next/Previous Project Navigation */}
          <div className="flex justify-between mt-16 border-t border-zinc-800 pt-8">
            {caseStudy.prevProject ? (
              <Link
                href={`/projects/${caseStudy.prevProject.slug}`}
                className="flex items-center gap-2 text-zinc-400 hover:text-pink-500 transition-colors group"
              >
                <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-70">Previous Project</div>
                  <div className="text-sm">{caseStudy.prevProject.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {caseStudy.nextProject ? (
              <Link
                href={`/projects/${caseStudy.nextProject.slug}`}
                className="flex items-center gap-2 text-zinc-400 hover:text-pink-500 transition-colors group text-right"
              >
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-70">Next Project</div>
                  <div className="text-sm">{caseStudy.nextProject.title}</div>
                </div>
                <ArrowLeft className="h-5 w-5 transform rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-8 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,168,212,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,168,212,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="text-pink-500 font-bold tracking-wider uppercase">JANE_DOE</div>
            </div>

            <div className="flex gap-6 mb-4 md:mb-0">
              {["HOME", "PROJECTS", "SKILLS", "ABOUT", "CONTACT"].map((item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="text-zinc-500 text-xs hover:text-pink-500 transition-colors uppercase tracking-wider"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
