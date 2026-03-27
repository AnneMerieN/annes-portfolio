import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowUpRight } from "lucide-react"
import FadeIn from "@/components/fade-in"
import FloatingParticles from "@/components/floating-particles"

const chipColors: Record<string, { bg: string; text: string }> = {
  // Design — purple
  "Game UI/UX": { bg: "#2D1B69", text: "#B794F4" },
  "Product Design": { bg: "#2D1B69", text: "#B794F4" },
  // Research — blue
  "User Research": { bg: "#1B3A4B", text: "#63B3ED" },
  "Heuristic Evaluation": { bg: "#1B3A4B", text: "#63B3ED" },
  // Dev — green
  "Prototyping": { bg: "#1C3D2E", text: "#68D391" },
  "Full-Stack": { bg: "#1C3D2E", text: "#68D391" },
}

const projects = [
  {
    title: "Teamfight Tactics for Nintendo Switch",
    subtitle: "Riot Games | 2025",
    description:
      "A UX/UI case study adapting TFT for handheld and controller play, with a focus on controls, readability, and accessibility.",
    tools: ["Game UI/UX", "Prototyping"],
    image: "/images/switch (1).png",
    href: "/projects/tft-switch",
  },
  {
    title: "AI Pitch Coach",
    subtitle: "SZNVC | 2025",
    description:
      "An AI pitch practice tool that gives rubric-based feedback, scorecards, and top fixes across text, voice, video, and file uploads.",
    tools: ["Product Design", "Full-Stack"],
    image: "/images/ai-pitch-coach-thumbnail.png",
    href: "/projects/ai-pitch-coach",
  },
  {
    title: "USC Games",
    subtitle: "USC Games | 2024",
    description:
      "User research focused on playtesting, heuristic evaluations, and improving player experience for USC game studios.",
    tools: ["User Research", "Heuristic Evaluation"],
    image: null,
    href: "/projects/usc-games",
  },
]

export default function HomePage() {
  return (
    <div className="px-6 md:px-20">
      {/* Hero section — full viewport */}
      <div className="h-screen flex flex-col relative overflow-hidden">
        <FloatingParticles />
        <div className="flex-1 flex items-center relative z-10">
          <div>
            <FadeIn>
              <p className="flex items-center gap-2 text-[20px] md:text-[24px] text-[#99A1AF] mb-3">
                <span className="inline-block animate-wiggle text-[25px]">🐰</span>
                Hi, there
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <h1 className="text-[40px] md:text-[52px] leading-[1.15] text-white font-normal mb-6">
                {"I'm Anne \u2014 I design products\npeople "}
                <em className="italic text-accent">love</em>.
              </h1>
            </FadeIn>
            <FadeIn delay={400}>
              <p className="text-[18px] md:text-[20px] text-[#99A1AF] leading-relaxed max-w-[640px] mb-6">
                From user insights to polished UI to shipped prototypes.
              </p>
            </FadeIn>
            <FadeIn delay={600}>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 text-[14px] text-[#99A1AF]">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="7" r="2.5" />
                    <path d="M8 1.5C5 1.5 2.5 4 2.5 7C2.5 10.5 8 14.5 8 14.5S13.5 10.5 13.5 7C13.5 4 11 1.5 8 1.5Z" />
                  </svg>
                  <span>Irvine, CA</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 text-[14px] text-[#99A1AF]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span>Open to opportunities</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator — pinned to bottom */}
        <FadeIn delay={800}>
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 pb-10 text-[#8B8F9A] hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-[13px] uppercase tracking-[0.15em]">Projects</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </FadeIn>
      </div>

      {/* Project Cards Stacked */}
      <div id="projects" className="flex flex-col gap-16 py-16 scroll-mt-8">
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 150}>
          <Link href={project.href} className="group">
            <div className="relative rounded-2xl border border-zinc-700 hover:border-zinc-500 transition-all duration-500 overflow-hidden bg-white/[0.01]">
              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 flex-1">
                    {/* Left: Title + Chips */}
                    <div>
                      <h3 className="text-[24px] text-white font-normal leading-snug group-hover:text-accent transition-colors duration-300 mb-3">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 text-[12px] rounded-full border border-zinc-700 text-[#99A1AF]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Description */}
                    <p className="text-[15px] leading-[1.7] text-[#99A1AF]">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-zinc-500 shrink-0 ml-4 mt-1">
                    <ArrowUpRight className="h-4 w-4 text-[#99A1AF]" />
                  </div>
                </div>
              </div>

              {/* Image */}
              {project.image && (
                <div className="mx-6 md:mx-8 mb-6 md:mb-8 rounded-xl overflow-hidden bg-[#1A1A1A] relative h-[320px] md:h-[440px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              )}
            </div>
          </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
