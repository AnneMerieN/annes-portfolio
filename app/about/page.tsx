import Image from "next/image"
import { Wrench, Coffee, Gamepad2, Heart } from "lucide-react"
import TypingText from "@/components/typing-text"

const experience = [
  { company: "UC Irvine Paul Merage School of Business", role: "Product Developer", year: "Oct. 2025 - Present" },
  { company: "Design @ UCI", role: "UI/UX Designer", year: "Sept. 2025 - Nov. 2025" },
  { company: "USC Games", role: "User Researcher", year: "Dec. 2024 - Feb. 2025" },
]

const education = [
  { school: "UC Irvine", degree: "B.S. Business Information Management" },
]

const certificates = [
  { source: "Udemy", name: "Figma UI UX Design Essentials Certificate" },
  { source: "Udemy", name: "User Experience Design Fundamentals" },
  { source: "Udemy", name: "Microsoft Power BI Desktop for Business Intelligence" },
  { source: "Udemy", name: "Claude Code - The Practical Guide" },
]

const favorites = [
  {
    icon: Wrench,
    title: "Currently Building With",
    items: ["Figma", "Vercel", "Claude", "Notion"],
    note: "the best tools",
    images: [
      { src: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg", alt: "Figma" },
      { src: "https://cdn.worldvectorlogo.com/logos/vercel.svg", alt: "Vercel", lightBg: true },
      { src: "/images/claude-logo.png", alt: "Claude", bg: "#D97757" },
      { src: "https://cdn.worldvectorlogo.com/logos/notion-2.svg", alt: "Notion", lightBg: true },
    ],
  },
  {
    icon: Gamepad2,
    title: "Currently Playing",
    items: ["Teamfight Tactics", "ARAM Mayhem", "Valorant"],
    note: "peaked Plat in TFT, still climbing",
    images: [
      { src: "/images/fav-tft.png", alt: "Teamfight Tactics", cover: true },
      { src: "/images/fav-aram.jpg", alt: "ARAM Mayhem", cover: true },
      { src: "/images/fav-valorant.jpg", alt: "Valorant", cover: true },
    ],
  },
]

const outsideWork = [
  {
    icon: Coffee,
    title: "Coffee Order",
    items: [
      "Little Ox",
      "Thank You Coffee",
      "Sip Coffee",
    ],
    note: "if you need a cafe rec in OC, ask me",
    images: [
      { src: "/images/fav-littleox.jpg", alt: "Little Ox", cover: true },
      { src: "/images/fav-thankyoucoffee.jpg", alt: "Thank You Coffee", cover: true },
      { src: "/images/fav-sipcoffee.jpg", alt: "Sip Coffee", cover: true },
    ],
  },
  {
    icon: Heart,
    title: "Hobbies",
    items: ["Badminton", "Hiking", "Fishing"],
    note: "how I recharge outside of screens",
    images: [
      { src: "/images/fav-badminton.jpg", alt: "Badminton", cover: true },
      { src: "/images/fav-hiking.jpg", alt: "Hiking", cover: true },
      { src: "/images/fav-fishing.jpg", alt: "Fishing", cover: true },
    ],
  },
]

export default function AboutPage() {
  return (
    <div className="px-6 md:px-20 py-16 bg-[#171717] min-h-screen">
      {/* Page Title */}
      <div className="mb-10">
        <h1 className="text-[34px] md:text-[44px] font-normal text-white leading-tight">
          <TypingText text="Hi there! I'm Anne" />
        </h1>
      </div>

      {/* Intro: Text left, Photo right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-center">
        <p className="text-[18px] text-[#99A1AF] leading-[1.8]">
          {"I'm a BIM student at UC Irvine who's obsessed with building things people actually want to use — from the first "}
          <span className="text-accent font-medium">{'"wait, what\'s the problem?"'}</span>
          {" all the way to a "}
          <span className="text-accent font-medium">shipped product</span>
          {". I care about "}
          <span className="text-white font-medium">clarity</span>
          {", "}
          <span className="text-white font-medium">accessibility</span>
          {", and making things feel simple without being boring. I love the space between "}
          <span className="text-accent font-medium">design</span>
          {" and "}
          <span className="text-accent font-medium">development</span>
          {" — I'm always balancing big-picture thinking with the small details. Turning messy, ambiguous problems into "}
          <span className="text-white font-medium">structured experiences</span>
          {" is kind of my thing."}
        </p>
        <div className="md:ml-auto w-full max-w-[380px]">
          <div className="rounded-2xl overflow-hidden bg-zinc-800 aspect-square relative">
            <Image
              src="/images/about-2.jpg"
              alt="Anne at UC Irvine"
              fill
              className="object-cover object-bottom"
            />
          </div>
        </div>
      </div>

      <hr className="border-zinc-800 mb-14" />

      {/* Experience */}
      <section className="mb-14">
        <h2 className="text-[13px] text-[#8B8F9A] uppercase tracking-[0.7px] mb-6">
          Experience
        </h2>
        <div className="flex flex-col">
          {experience.map((item, i) => (
            <div
              key={item.company}
              className="flex items-center justify-between py-5"
            >
              <div className="flex items-center gap-3">
                <span className="text-[16px] text-white font-bold">{item.company}</span>
                <span className="text-[16px] text-[#99A1AF] font-normal">{item.role}</span>
              </div>
              <span className="text-[16px] text-[#8B8F9A] shrink-0 ml-4">{item.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-14">
        <h2 className="text-[13px] text-[#8B8F9A] uppercase tracking-[0.7px] mb-6">
          Education
        </h2>
        <div className="flex flex-col">
          {education.map((item) => (
            <div
              key={item.school}
              className="flex items-center gap-3 py-5"
            >
              <span className="text-[16px] text-white font-bold">{item.school}</span>
              <span className="text-[16px] text-[#99A1AF] font-normal">{item.degree}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="mb-14">
        <h2 className="text-[13px] text-[#8B8F9A] uppercase tracking-[0.7px] mb-6">
          Certificates
        </h2>
        <div className="flex gap-3">
          <span className="text-[16px] text-white font-bold shrink-0 py-3">Udemy</span>
          <div className="flex flex-col">
            {certificates.map((item) => (
              <div key={item.name} className="py-3">
                <span className="text-[16px] text-[#99A1AF] font-normal">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-zinc-800 mb-14" />

      {/* Current Favorites */}
      <section className="mb-14">
        <h2 className="text-[13px] text-[#8B8F9A] uppercase tracking-[0.7px] mb-6">
          Current Favorites
        </h2>
        <div className="grid grid-cols-1 gap-y-10">
          {favorites.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.title}>
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="h-[18px] w-[18px] text-accent" />
                  <h3 className="text-[16px] text-white font-normal">
                    {category.title}
                  </h3>
                </div>
                <p className="text-[13px] text-[#8B8F9A] italic mb-3">
                  {category.note}
                </p>
                {category.spotify ? (
                  <div className="flex gap-3 overflow-x-auto">
                    {category.spotify.map((url) => (
                      <iframe
                        key={url}
                        src={url}
                        width="200"
                        height="80"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="rounded-xl border-0 shrink-0"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex gap-4">
                    {category.items.map((item, i) => (
                      <div key={item} className="flex flex-col items-center gap-2">
                        {category.images && category.images[i] && (
                          <div className={`w-24 h-24 rounded-xl overflow-hidden relative shrink-0 flex items-center justify-center ${category.images[i].cover ? "p-0" : "p-4"} ${category.images[i].lightBg ? "bg-white" : "bg-zinc-800"}`} style={category.images[i].bg ? { backgroundColor: category.images[i].bg } : undefined}>
                            <img
                              src={category.images[i].src}
                              alt={category.images[i].alt}
                              className={`w-full h-full ${category.images[i].cover ? "object-cover" : "object-contain"}`}
                            />
                          </div>
                        )}
                        <p className="text-[13px] text-[#99A1AF] text-center max-w-[96px]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <hr className="border-zinc-800 mb-14" />

      {/* When I'm Not Designing */}
      <section>
        <h2 className="text-[13px] text-[#8B8F9A] uppercase tracking-[0.7px] mb-6">
          When I&apos;m Not Designing
        </h2>
        <div className="grid grid-cols-1 gap-y-10">
          {outsideWork.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.title}>
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="h-[18px] w-[18px] text-accent" />
                  <h3 className="text-[16px] text-white font-normal">
                    {category.title}
                  </h3>
                </div>
                <p className="text-[13px] text-[#8B8F9A] italic mb-3">
                  {category.note}
                </p>
                <div className="flex gap-4">
                  {category.items.map((item, i) => (
                    <div key={item} className="flex flex-col items-center gap-2">
                      {category.images && category.images[i] && (
                        <div className="w-40 h-40 rounded-xl overflow-hidden relative shrink-0">
                          <img
                            src={category.images[i].src}
                            alt={category.images[i].alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <p className="text-[13px] text-[#99A1AF] text-center max-w-[160px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
