import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowUpRight } from "lucide-react"

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
    image: "/images/Thumbnail.png",
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
    <div className="px-6 md:px-20 py-16">
      {/* Hero heading */}
      <div className="mb-6">
        <h1 className="text-[40px] md:text-[54px] leading-[1.25] text-white font-normal max-w-[896px]">
          {"I'm Anne\u2014an "}
          <em className="italic">impact-driven</em>
          {" product designer who builds end-to-end experiences from user insights to polished UI to shipped prototypes"}
        </h1>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 mb-16">
        <MapPin className="h-5 w-5 text-[#99A1AF]" />
        <span className="text-[#99A1AF] text-[17px]">Irvine, CA</span>
      </div>

      {/* Project Cards Stacked */}
      <div className="flex flex-col gap-16">
        {projects.map((project) => (
          <Link key={project.title} href={project.href} className="group">
            <div className="relative bg-sidebar border border-[#363636] rounded-card p-8 md:p-10 transition-all duration-300 hover:border-[#4A4A4A] hover:scale-[1.02]">
              {/* Pop out icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#363636] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="h-5 w-5 text-white" />
              </div>
              {/* Top section: tags, title, subtitle, description */}
              <div className="mb-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-[12px] rounded-md font-medium"
                      style={{
                        backgroundColor: chipColors[tool]?.bg || "#2A2A2A",
                        color: chipColors[tool]?.text || "#B0B3BC",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Title + Description row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
                  <div>
                    <h3 className="text-[28px] text-white font-normal leading-snug group-hover:text-[#D1D5DB] transition-colors">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-[15px] text-[#8B8F9A] mt-1">{project.subtitle}</p>
                    )}
                  </div>
                  <p className="text-[16px] leading-[1.7] text-[#B0B3BC]">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Image below */}
              {project.image && (
                <div className="rounded-2xl overflow-hidden bg-[#1E1E1E] relative h-[360px] md:h-[480px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
