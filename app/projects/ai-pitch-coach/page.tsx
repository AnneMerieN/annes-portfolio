import Image from "next/image"
import FadeIn from "@/components/fade-in"
import { Search, Target, Lightbulb, Code2, FlaskConical, BarChart3, Repeat } from "lucide-react"

export default function AIPitchCoachCaseStudy() {
  return (
    <div className="px-6 md:px-20 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="text-[13px] text-accent uppercase tracking-[0.7px] mb-4">
          Product Design
        </p>
        <h1 className="text-[34px] md:text-[44px] font-normal text-white leading-tight mb-3">
          AI Pitch Coach
        </h1>
        <p className="text-[16px] text-[#8B8F9A]">
          An AI-powered pitch practice tool for student entrepreneurs in the Stella Zhang New Venture Competition
        </p>
      </div>

      {/* Brief + Metadata */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-10">
        <p className="text-[17px] text-[#B0B3BC] leading-[1.8]">
          AI Pitch Coach is an AI-powered practice tool for student entrepreneurs competing in the Stella Zhang New Venture Competition. The tool provides rubric-based feedback, scorecards, and top fixes across text, voice, video, and file uploads.
        </p>
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          <div>
            <p className="text-[12px] text-[#8B8F9A] uppercase tracking-wider mb-1">Role</p>
            <p className="text-[16px] text-white">Product Designer</p>
          </div>
          <div>
            <p className="text-[12px] text-[#8B8F9A] uppercase tracking-wider mb-1">Tools</p>
            <p className="text-[16px] text-white">Figma, Next.js</p>
          </div>
          <div>
            <p className="text-[12px] text-[#8B8F9A] uppercase tracking-wider mb-1">Timeline</p>
            <p className="text-[16px] text-white">Oct – Dec 2025</p>
          </div>
          <div>
            <p className="text-[12px] text-[#8B8F9A] uppercase tracking-wider mb-1">Team</p>
            <p className="text-[16px] text-white">Stella Zhang NVC</p>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="rounded-2xl overflow-hidden bg-[#212121] relative aspect-[16/9] mb-16">
        <Image
          src="/images/ai-pitch-coach-thumbnail.png"
          alt="AI Pitch Coach"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* 00 — Overview */}
      <FadeIn className="mb-28">
        <SectionHeader number="00" title="overview" />
        <h3 className="text-[22px] text-white mb-4">What is AI Pitch Coach?</h3>
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-8">
          AI Pitch Coach is an AI-powered practice tool built for student entrepreneurs competing in the Stella Zhang New Venture Competition at UCI. The tool analyzes pitches and delivers rubric-aligned feedback, scorecards, and top fixes — giving teams real-time insights to sharpen their pitch clarity, delivery, and structure.
        </p>

        <h3 className="text-[22px] text-white mb-4">Context</h3>
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9]">
          SZNVC is a semester-long startup competition where teams present pitches before judges under strict time limits. Access to quality, rubric-specific practice feedback is limited outside of mentor sessions, and most teams rely on peer feedback alone. SZNVC runs on a tight cycle, so the product had to ship fast to be useful before the competition rounds began.
        </p>
      </FadeIn>

      {/* 01 — The Problem */}
      <FadeIn className="mb-28">
        <SectionHeader number="01" title="the problem" />
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-10">
          Students consistently rely on the same mentors for feedback, often receiving surface-level advice that doesn't map to the actual judging rubric. Practice sessions are infrequent, and there's no way to get structured, repeatable feedback between rounds.
        </p>

        <div className="py-8 px-6 rounded-xl bg-white/[0.03] border border-zinc-800 mb-10">
          <p className="text-[13px] text-accent uppercase tracking-wider mb-3">Problem Statement</p>
          <p className="text-[20px] text-white leading-snug">
            Student entrepreneurs in SZNVC need a way to practice pitching more frequently and receive immediate feedback aligned to the competition rubric, so they can improve pitch clarity and confidence before presenting to judges.
          </p>
        </div>

        <h3 className="text-[22px] text-white mb-4">Design Principles that guided decisions</h3>
        <div className="space-y-3 mb-10">
          {[
            "Focus on feedback. Feedback should be rubric-first and map to how SZNVC judges score.",
            "Practice, not perfection. The goal is to help teams get reps in, not create a perfect pitch.",
            "Fast to open. Pitching and upload must feel fast with familiar and low-anxiety paths.",
            "Minimal UI. The interface should get out of the way and prioritize the feedback.",
          ].map((item) => (
            <p key={item} className="text-[16px] text-[#B0B3BC] pl-5 border-l-2 border-zinc-700">
              {item}
            </p>
          ))}
        </div>

        <h3 className="text-[22px] text-white mb-4">Defining Product Requirements</h3>
        <div className="space-y-3">
          {[
            "Accept pitches via text, file upload, audio, and video",
            "Fully functional AI with speech parsing",
            "Rubric-aligned analysis and scorecard generation",
            "Receiving detailed, rubric-scored feedback, decks, and auto-coach confirmation",
          ].map((item) => (
            <p key={item} className="text-[16px] text-[#B0B3BC] pl-5 border-l-2 border-zinc-700">
              {item}
            </p>
          ))}
        </div>
      </FadeIn>

      {/* 02 — Discover + Research */}
      <FadeIn className="mb-28">
        <SectionHeader number="02" title="discover + research" />
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-8">
          During the first SZNVC iteration, I spent time in research sessions to understand pitch workflows and existing pain points — talking to participants, mentors, club organizers, and competition alumni.
        </p>
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9]">
          This research informed the core product decisions and helped prioritize which features would have the most impact for student teams on a tight competition timeline.
        </p>
      </FadeIn>

      {/* 03 — Define + Scope */}
      <FadeIn className="mb-28">
        <SectionHeader number="03" title="define + scope" />
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-8">
          Based on these findings, I scoped the product into a single-purpose experience: coach a pitch — upload or record, get rubric-based feedback — no fancy bells, no distracting features, just feedback. Coaches agree, Since SZNVC judges have fixed rubrics, I focused on features that would create the biggest impact for improving pitch quality.
        </p>
      </FadeIn>

      {/* 04 — Solution */}
      <FadeIn className="mb-28">
        <SectionHeader number="04" title="solution" />
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-8">
          AI Pitch Coach supports the way students already rehearse. The core solution is a practice tool that mimics the real feedback students need to sharpen their pitch.
        </p>

        <h3 className="text-[22px] text-white mb-4">Practice Inputs</h3>
        <div className="space-y-3 mb-10">
          {[
            "Type in a quick solo pitch rehearsal",
            "Upload a deck for visual presentation practice",
            "Record a live pitch to analyze delivery and pacing",
            "Drop files for async practice and asynchronous review",
          ].map((item) => (
            <p key={item} className="text-[16px] text-[#B0B3BC] pl-5 border-l-2 border-zinc-700">
              {item}
            </p>
          ))}
        </div>

        <h3 className="text-[22px] text-white mb-4">Pitch Modes</h3>
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-8">
          Students choose the time limit to practice for: 60 seconds, 3 minutes, or 10 minutes. This maps feedback relevant to the format and structure of the pitch round.
        </p>

        <h3 className="text-[22px] text-white mb-4">Feedback Structure</h3>
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-4">
          Feedback is delivered using three lenses: the rubric to objectively see each trait, the top-up for actionable fixes.
        </p>
        <div className="space-y-3">
          {[
            "Rubric scorecard to visibly see each category scored and ranked",
            "Top actionable fixes with specific, prioritized improvements",
            "A large perspective or future feedback for one evaluation across the whole pitch",
          ].map((item) => (
            <p key={item} className="text-[16px] text-[#B0B3BC] pl-5 border-l-2 border-zinc-700">
              {item}
            </p>
          ))}
        </div>
      </FadeIn>

      {/* 05 — Key Decisions + Tradeoffs */}
      <FadeIn className="mb-28">
        <SectionHeader number="05" title="key decisions + tradeoffs" />

        <div className="space-y-10">
          {[
            {
              title: "Decision 1: Scorecard-first, not chat-first feedback",
              desc: "Students don't want a full AI chat history after each pitch. A single rubric scorecard with key rubric-anchored fixes is more useful than endless conversation in a feedback loop.",
            },
            {
              title: "Decision 2: Rules-first theming to match existing platforms",
              desc: "Because SZNVC is judges, the tool needed to feel aligned with the scoring system. I made rubric-first judging habits simple, clear and intuitive to map to the competition format.",
            },
            {
              title: "Decision 3: Treat audio as part of the product, not a gimmick",
              desc: "Pitching is a verbal activity — voice should feel native to the product, not bolted on. Features like recording pitch audio, speech-to-text transcription, and audio-coach confirmation make voice a first-class citizen.",
            },
          ].map((item) => (
            <div key={item.title}>
              <p className="text-[17px] text-white font-medium mb-2">{item.title}</p>
              <p className="text-[16px] text-[#B0B3BC] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* 06 — Iteration */}
      <FadeIn className="mb-28">
        <SectionHeader number="06" title="iteration" />
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-8">
          I iterated on components based on repeated student feedback and shared friction points. Feedback from beta usage — including converted prompts for open-text feedback and a clearer attention-tracking scorecard — helped confirm which patterns worked and which created confusion.
        </p>

        <div className="space-y-3">
          {[
            "Links to rubric, Stella's Guide (resource doc), pitch templates, and competition FAQs",
            "Auto-save sessions and improved prompts for open-text feedback",
            "Clearer attention-tracking scorecard — subtle accents on reliability, rubric, and confirmation status",
          ].map((item) => (
            <p key={item} className="text-[16px] text-[#B0B3BC] pl-5 border-l-2 border-zinc-700">
              {item}
            </p>
          ))}
        </div>
      </FadeIn>

      {/* 07 — Results */}
      <FadeIn className="mb-28">
        <SectionHeader number="07" title="results" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {[
            { stat: "130+", label: "students onboarded" },
            { stat: "85%", label: "return rate" },
            { stat: "4.7/5", label: "satisfaction score" },
          ].map((item) => (
            <div key={item.label} className="py-6 px-6 rounded-xl bg-white/[0.03] border border-zinc-800 text-center">
              <p className="text-[36px] text-accent font-medium mb-1">{item.stat}</p>
              <p className="text-[14px] text-[#8B8F9A] uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>

        <h3 className="text-[22px] text-white mb-4">Qualitative Feedback</h3>
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-8">
          Students who actively used the tool saw measurable improvement in how judges scored their pitches. Teams that used Pitch Coach reported feeling more prepared, structured, and confident heading into competition rounds.
        </p>

        <h3 className="text-[22px] text-white mb-4">Outcomes</h3>
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9]">
          The tool successfully improved pitch quality across the cohort. Faculty and mentors recognized its value, and the team plans to continue iterating for future competition cycles.
        </p>
      </FadeIn>

      {/* 08 — Reflection */}
      <FadeIn>
        <SectionHeader number="08" title="reflection" />

        <div className="space-y-8">
          {[
            {
              title: "Design the flow before the interface",
              desc: "The first prototype focused too heavily on visual layout. When I shifted to mapping the pitch-to-feedback flow first, the interface became much clearer and more intuitive for students to navigate.",
            },
            {
              title: "Stay flexible and detached from solutions",
              desc: "When the scores at stage 01 gave strong feedback, I didn't hold on to the initial wireframes. Early delivery decisions and flows were quickly replaced by ones closer to how students actually practice.",
            },
            {
              title: "Balance ambition with focus",
              desc: "Pitch coaching can grow in many directions — but scoping early decisions to the rubric-based feedback loop was what made the product useful within the tight SZNVC timeline.",
            },
          ].map((item) => (
            <div key={item.title}>
              <p className="text-[17px] text-white font-medium mb-2">{item.title}</p>
              <p className="text-[16px] text-[#B0B3BC] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  )
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex gap-4 mb-8">
      <div className="w-1 bg-accent rounded-full self-stretch" />
      <div>
        <p className="text-[14px] text-accent font-medium uppercase tracking-widest">{number}</p>
        <h2 className="text-[28px] md:text-[36px] text-white font-normal">
          {title}
        </h2>
      </div>
    </div>
  )
}
