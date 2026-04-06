import Image from "next/image"
import FadeIn from "@/components/fade-in"
import { Search, Target, Lightbulb, Code2, FlaskConical, BarChart3, Repeat, Type, Upload, Mic, FileText, Brain, ListChecks, Sparkles, MessageSquare, ArrowRight, X, Check, Volume2, Video } from "lucide-react"

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

        {/* Infographic: Feedback Gap */}
        <div className="rounded-2xl bg-white/[0.02] border border-zinc-800/60 p-8 mb-10">
          <p className="text-[12px] text-accent uppercase tracking-widest mb-6">The Feedback Gap</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What students have */}
            <div className="space-y-4">
              <p className="text-[14px] text-[#8B8F9A] uppercase tracking-wider mb-2">What students have</p>
              {[
                { label: "Mentor availability", pct: 15 },
                { label: "Rubric-specific feedback", pct: 10 },
                { label: "Practice frequency", pct: 20 },
                { label: "Structured iteration", pct: 8 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[13px] text-[#B0B3BC]">{item.label}</span>
                    <span className="text-[13px] text-[#8B8F9A]">{item.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-600 rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            {/* What students need */}
            <div className="space-y-4">
              <p className="text-[14px] text-accent uppercase tracking-wider mb-2">What students need</p>
              {[
                { label: "On-demand feedback", pct: 95 },
                { label: "Rubric-aligned scoring", pct: 90 },
                { label: "Repeatable practice", pct: 85 },
                { label: "Actionable next steps", pct: 80 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[13px] text-[#B0B3BC]">{item.label}</span>
                    <span className="text-[13px] text-accent">{item.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-accent/80 rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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

        {/* Infographic: Research Overview */}
        <div className="rounded-2xl bg-white/[0.02] border border-zinc-800/60 p-8 mb-10">
          <p className="text-[12px] text-accent uppercase tracking-widest mb-8">Research at a Glance</p>

          {/* Interview stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {[
              { num: "50+", label: "Interviewees" },
              { num: "4", label: "User groups" },
              { num: "3", label: "Weeks of research" },
              { num: "12", label: "Key insights" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-[28px] text-white font-light">{s.num}</p>
                <p className="text-[11px] text-[#8B8F9A] uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Who we talked to */}
          <p className="text-[12px] text-[#8B8F9A] uppercase tracking-wider mb-4">Who we talked to</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { group: "Participants", count: "28", icon: "participant" },
              { group: "Mentors", count: "11", icon: "mentor" },
              { group: "Organizers", count: "6", icon: "organizer" },
              { group: "Alumni", count: "8", icon: "alumni" },
            ].map((g) => (
              <div key={g.group} className="rounded-xl bg-white/[0.03] border border-zinc-800/50 p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[14px] text-accent font-medium">{g.count}</span>
                </div>
                <p className="text-[13px] text-white">{g.group}</p>
              </div>
            ))}
          </div>

          {/* Key pain points — editorial, 2-col grid, equal weight */}
          <p className="text-[12px] text-[#8B8F9A] uppercase tracking-wider mb-6">What we heard, again and again</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                headline: "No way to practice outside mentor sessions",
                quote: "We only get to run our pitch like once a week — if our mentor even shows up.",
              },
              {
                headline: "Feedback doesn't map to the judging rubric",
                quote: "My mentor said it was great, but then the judges scored us low on market validation. No one told us that mattered.",
              },
              {
                headline: "Peer feedback is too vague to act on",
                quote: "My teammate just said 'good energy' — I needed to know if my ask slide made sense.",
              },
              {
                headline: "No visibility into what judges actually score on",
                quote: "I didn't really understand the rubric until after we got our scores back.",
              },
              {
                headline: "Only 1–2 real practice runs before competing",
                quote: "Between classes and group projects, we maybe practiced twice before the actual pitch day.",
              },
              {
                headline: "No way to track improvement over time",
                quote: "Every time we practiced it felt like starting over. We had no idea if we were actually getting better.",
              },
            ].map((p) => (
              <div key={p.headline} className="rounded-xl bg-white/[0.02] border border-zinc-800/40 border-l-2 border-l-accent/50 px-5 py-5">
                <p className="text-[14px] text-white mb-3 leading-snug">{p.headline}</p>
                <p className="text-[13px] text-[#B0B3BC]/70 leading-[1.7] italic">&ldquo;{p.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>

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

        {/* Infographic: Horizontal Arrow Flow */}
        <p className="text-[12px] text-accent uppercase tracking-widest mb-8">From broad to focused</p>

        {/* Horizontal on md+, vertical on mobile */}
        <div className="flex flex-col md:flex-row md:items-start">
          {[
            {
              stage: "Explored",
              features: ["Coaching platform", "Dashboards", "Mentor matching", "Analytics", "Peer review", "Multi-format input"],
            },
            {
              stage: "Considered",
              features: ["Multi-format input", "Rubric library", "Session history", "Progress tracking"],
            },
            {
              stage: "Prioritized",
              features: ["Text / voice / file input", "Rubric scoring", "Top fixes"],
            },
            {
              stage: "Shipped",
              features: ["Rubric-aligned pitch coach"],
            },
          ].map((s, i) => {
            const isLast = i === 3
            return (
              <div key={s.stage} className="flex flex-col md:flex-row md:items-start flex-1 min-w-0">
                {/* Stage block */}
                <div className={`flex-1 min-w-0 rounded-xl px-4 py-5 border text-center ${isLast ? "bg-accent/[0.06] border-accent/30" : "bg-white/[0.02] border-zinc-800/50"}`}>
                  <p className={`text-[11px] uppercase tracking-widest font-medium mb-3 ${isLast ? "text-accent" : "text-[#8B8F9A]"}`}>{s.stage}</p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {s.features.map((f) => (
                      <span
                        key={f}
                        className={`text-[11px] px-2 py-1 rounded-full ${
                          isLast
                            ? "bg-accent/10 text-accent border border-accent/25"
                            : "bg-white/[0.03] text-[#B0B3BC] border border-zinc-800/50"
                        }`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow connector — vertical on mobile, horizontal on md+ */}
                {!isLast && (
                  <>
                    {/* Mobile: vertical arrow */}
                    <div className="flex flex-col items-center py-1 md:hidden">
                      <div className="w-px h-5 bg-zinc-700" />
                      <svg width="12" height="8" viewBox="0 0 12 8" className="text-zinc-600">
                        <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
                      </svg>
                    </div>
                    {/* Desktop: horizontal arrow */}
                    <div className="hidden md:flex items-center px-1 self-center">
                      <div className="h-px w-4 bg-zinc-700" />
                      <svg width="8" height="12" viewBox="0 0 8 12" className="text-zinc-600">
                        <path d="M8 6L0 0v12l8-6z" fill="currentColor" />
                      </svg>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </FadeIn>

      {/* 04 — Solution */}
      <FadeIn className="mb-28">
        <SectionHeader number="04" title="solution" />
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-8">
          AI Pitch Coach supports the way students already rehearse. The core solution is a practice tool that mimics the real feedback students need to sharpen their pitch.
        </p>

        {/* Infographic: Solution Flow */}
        <div className="rounded-2xl bg-white/[0.02] border border-zinc-800/60 p-8 mb-10">
          <p className="text-[12px] text-accent uppercase tracking-widest mb-8">How it works</p>
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            {/* Input */}
            <div className="flex-1 rounded-xl bg-white/[0.02] border border-zinc-800/50 p-5">
              <p className="text-[11px] text-[#8B8F9A] uppercase tracking-wider mb-4">Input</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: Type, label: "Text" },
                  { icon: Upload, label: "File" },
                  { icon: Mic, label: "Voice" },
                  { icon: Video, label: "Video" },
                ].map((inp) => (
                  <div key={inp.label} className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-3 py-2.5">
                    <inp.icon className="w-3.5 h-3.5 text-accent" />
                    <span className="text-[12px] text-[#B0B3BC]">{inp.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center py-2 md:py-0">
              <ArrowRight className="w-5 h-5 text-zinc-600 rotate-90 md:rotate-0" />
            </div>

            {/* AI Engine */}
            <div className="flex-1 rounded-xl bg-accent/[0.06] border border-accent/20 p-5 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-3">
                <Brain className="w-5 h-5 text-accent" />
              </div>
              <p className="text-[13px] text-white font-medium mb-1">AI Analysis</p>
              <p className="text-[11px] text-[#8B8F9A] leading-relaxed">Speech parsing, rubric mapping, scoring engine</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center py-2 md:py-0">
              <ArrowRight className="w-5 h-5 text-zinc-600 rotate-90 md:rotate-0" />
            </div>

            {/* Output */}
            <div className="flex-1 rounded-xl bg-white/[0.02] border border-zinc-800/50 p-5">
              <p className="text-[11px] text-[#8B8F9A] uppercase tracking-wider mb-4">Output</p>
              <div className="space-y-2">
                {[
                  { icon: ListChecks, label: "Rubric Scorecard" },
                  { icon: Sparkles, label: "Top Fixes" },
                  { icon: MessageSquare, label: "Overall Eval" },
                ].map((out) => (
                  <div key={out.label} className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-3 py-2.5">
                    <out.icon className="w-3.5 h-3.5 text-accent" />
                    <span className="text-[12px] text-[#B0B3BC]">{out.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-[22px] text-white mb-4">Pitch Modes</h3>
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-8">
          Students choose the time limit to practice for: 60 seconds, 3 minutes, or 10 minutes. This maps feedback relevant to the format and structure of the pitch round.
        </p>
      </FadeIn>

      {/* 05 — Key Decisions + Tradeoffs */}
      <FadeIn className="mb-28">
        <SectionHeader number="05" title="key decisions + tradeoffs" />

        {/* Infographic: Tradeoff cards */}
        <div className="space-y-4">
          {[
            {
              title: "Scorecard-first, not chat-first feedback",
              rejected: "Conversational AI chat after each pitch",
              chosen: "Single rubric scorecard with anchored fixes",
              why: "Students don't want a full AI chat history — a structured scorecard is faster to scan and act on between practice runs.",
            },
            {
              title: "Rules-first theming to match existing platforms",
              rejected: "Generic feedback categories",
              chosen: "Rubric-mapped scoring tied to SZNVC judging criteria",
              why: "The tool needed to feel aligned with how judges actually score, so feedback is immediately applicable to competition rounds.",
            },
            {
              title: "Treat audio as part of the product, not a gimmick",
              rejected: "Text-only input with optional recording",
              chosen: "Voice as a first-class input with speech parsing",
              why: "Pitching is a verbal activity — voice should feel native, not bolted on. Recording, transcription, and audio coaching are core features.",
            },
          ].map((d, i) => (
            <div key={d.title} className="rounded-xl bg-white/[0.02] border border-zinc-800/60 p-6">
              <p className="text-[13px] text-accent font-medium mb-4">Decision {i + 1}</p>
              <p className="text-[16px] text-white mb-4">{d.title}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="flex items-start gap-3 rounded-lg bg-white/[0.02] border border-zinc-800/40 px-4 py-3">
                  <X className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] text-[#8B8F9A] uppercase tracking-wider mb-1">Rejected</p>
                    <p className="text-[13px] text-[#8B8F9A]">{d.rejected}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-accent/[0.05] border border-accent/20 px-4 py-3">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] text-accent uppercase tracking-wider mb-1">Chosen</p>
                    <p className="text-[13px] text-[#B0B3BC]">{d.chosen}</p>
                  </div>
                </div>
              </div>
              <p className="text-[13px] text-[#8B8F9A] leading-relaxed">{d.why}</p>
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

        {/* Infographic: Results with progress rings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { stat: "130+", label: "students onboarded", pct: 87, sub: "of cohort adopted" },
            { stat: "85%", label: "return rate", pct: 85, sub: "came back to practice" },
            { stat: "4.7/5", label: "satisfaction score", pct: 94, sub: "overall rating" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl bg-white/[0.02] border border-zinc-800/60 p-6 text-center">
              {/* SVG ring */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
                  <circle cx="48" cy="48" r="40" fill="none" stroke="rgba(63,63,70,0.4)" strokeWidth="4" />
                  <circle
                    cx="48" cy="48" r="40" fill="none"
                    stroke="#E8833A" strokeWidth="4" strokeLinecap="round"
                    strokeDasharray={`${item.pct * 2.51} ${251 - item.pct * 2.51}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[22px] text-white font-light">{item.stat}</span>
                </div>
              </div>
              <p className="text-[13px] text-white mb-1">{item.label}</p>
              <p className="text-[11px] text-[#8B8F9A]">{item.sub}</p>
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
        <h2 className="text-[22px] md:text-[28px] text-white font-normal">
          {title}
        </h2>
      </div>
    </div>
  )
}
