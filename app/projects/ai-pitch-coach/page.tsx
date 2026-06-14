import Image from "next/image"
import FadeIn from "@/components/fade-in"
import BrowserFrame from "@/components/browser-frame"
import { Type, Upload, Mic, Video, Brain, ListChecks, Sparkles, MessageSquare, ArrowRight, X, Check } from "lucide-react"

export default function AIPitchCoachCaseStudy() {
  return (
    <div className="px-6 md:px-20 py-16">

      {/* Header */}
      <div className="mb-10">
        <p className="text-[13px] text-accent uppercase tracking-[0.7px] mb-4">Product Design · Full-Stack</p>
        <h1 className="text-[34px] md:text-[44px] font-normal text-white leading-tight mb-3">
          AI Pitch Coach
        </h1>
        <p className="text-[16px] text-[#8B8F9A]">
          An AI-powered pitch practice tool built for the Stella Zhang New Venture Competition at UCI
        </p>
      </div>

      {/* Metadata */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8 mb-10 pb-10 border-b border-zinc-800">
        {[
          { label: "Role", value: "Product Designer + Developer" },
          { label: "Tools", value: "Figma, Next.js, Claude API" },
          { label: "Timeline", value: "Oct – Dec 2025" },
          { label: "Team", value: "Team of 5" },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-[12px] text-[#8B8F9A] uppercase tracking-wider mb-1">{item.label}</p>
            <p className="text-[15px] text-white">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Hero Image */}
      <div className="mb-16">
        <BrowserFrame url="ai-pitch-coach.vercel.app">
          <div className="relative aspect-[16/9] bg-[#212121]">
            <Image
              src="/images/ai-pitch-coach-thumbnail.png"
              alt="AI Pitch Coach"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </BrowserFrame>
      </div>

      {/* 00 — Overview */}
      <FadeIn className="mb-28">
        <SectionLabel sprint="00" phase="Overview" />
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-6">
          SZNVC is a semester-long startup pitch competition at UCI. Teams spend months developing their venture — then get 1 to 10 minutes in front of judges to make their case. The problem: most teams had never received structured pitch feedback before that moment.
        </p>
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9]">
          AI Pitch Coach was built to change that. It&apos;s a practice tool that analyzes pitch submissions — via text, voice, video, or file upload — and returns rubric-aligned feedback, a scorecard, and specific fixes. Students could run it as many times as they wanted, at any hour, without waiting on a mentor.
        </p>
      </FadeIn>

      {/* SPRINT 0 */}
      <SprintDivider sprint="Sprint 0" phase="Empathize" description="Understanding the space before writing a single line of code" />

      {/* 01 — Research */}
      <FadeIn className="mb-28">
        <SectionLabel sprint="01" phase="Research + Discovery" />
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-8">
          Before defining the product, I spent time inside SZNVC — talking to participants, mentors, organizers, and alumni to understand how teams actually prepared for pitch day.
        </p>

        {/* Research stats */}
        <div className="rounded-2xl bg-white/[0.02] border border-zinc-800/60 p-8 mb-10">
          <p className="text-[12px] text-accent uppercase tracking-widest mb-8">Research at a Glance</p>
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

          <p className="text-[12px] text-[#8B8F9A] uppercase tracking-wider mb-4">Who we talked to</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { group: "Participants", count: "28" },
              { group: "Mentors", count: "11" },
              { group: "Organizers", count: "6" },
              { group: "Alumni", count: "8" },
            ].map((g) => (
              <div key={g.group} className="rounded-xl bg-white/[0.03] border border-zinc-800/50 p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[14px] text-accent font-medium">{g.count}</span>
                </div>
                <p className="text-[13px] text-white">{g.group}</p>
              </div>
            ))}
          </div>

          <p className="text-[12px] text-[#8B8F9A] uppercase tracking-wider mb-6">What we heard, again and again</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                headline: "No way to practice outside mentor sessions",
                quote: "We only get to run our pitch like once a week — if our mentor even shows up.",
              },
              {
                headline: "Feedback didn't map to judging criteria",
                quote: "My mentor said it was great, but then judges scored us low on market validation. No one told us that mattered.",
              },
              {
                headline: "Peer feedback was too vague to act on",
                quote: "My teammate just said 'good energy' — I needed to know if my ask slide made sense.",
              },
              {
                headline: "Students didn't know what judges looked for",
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

        {/* Two key insights callout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              number: "Insight 1",
              headline: "Students didn't know what judges were actually scoring",
              body: "The rubric existed but wasn't accessible during practice. Teams were guessing what mattered until it was too late.",
            },
            {
              number: "Insight 2",
              headline: "Practice felt pointless without real feedback",
              body: "Running a pitch in a vacuum didn't build confidence. Without a feedback loop, reps didn't compound.",
            },
          ].map((insight) => (
            <div key={insight.number} className="rounded-xl bg-accent/[0.04] border border-accent/20 p-6">
              <p className="text-[11px] text-accent uppercase tracking-widest mb-2">{insight.number}</p>
              <p className="text-[15px] text-white mb-2 leading-snug">{insight.headline}</p>
              <p className="text-[13px] text-[#8B8F9A] leading-relaxed">{insight.body}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* SPRINT 1 */}
      <SprintDivider sprint="Sprint 1" phase="Define + Ideate" description="Translating research into a focused problem and a clear direction" />

      {/* 02 — Define */}
      <FadeIn className="mb-28">
        <SectionLabel sprint="02" phase="Define" />

        {/* Feedback gap infographic */}
        <div className="rounded-2xl bg-white/[0.02] border border-zinc-800/60 p-8 mb-8">
          <p className="text-[12px] text-accent uppercase tracking-widest mb-6">The Feedback Gap</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

        {/* Problem statement */}
        <div className="py-8 px-6 rounded-xl bg-white/[0.03] border border-zinc-800 mb-8">
          <p className="text-[13px] text-accent uppercase tracking-wider mb-3">Problem Statement</p>
          <p className="text-[20px] text-white leading-snug">
            Student entrepreneurs in SZNVC need a way to practice pitching more frequently and receive immediate feedback aligned to the competition rubric — so they can improve pitch clarity and confidence before presenting to judges.
          </p>
        </div>

        {/* How Might We */}
        <p className="text-[13px] text-[#8B8F9A] uppercase tracking-wider mb-4">How Might We</p>
        <div className="space-y-3 mb-10">
          {[
            "How might we make rubric-based feedback available on demand, without a mentor?",
            "How might we give students visibility into exactly what judges score — before it's too late?",
            "How might we make every practice session feel like it actually moves the needle?",
          ].map((hmw) => (
            <p key={hmw} className="text-[16px] text-[#B0B3BC] pl-5 border-l-2 border-accent/30">{hmw}</p>
          ))}
        </div>

        <p className="text-[13px] text-[#8B8F9A] uppercase tracking-wider mb-4">Design Principles</p>
        <div className="space-y-3">
          {[
            "Feedback first — every screen exists to surface better feedback faster.",
            "Practice over perfection — the goal is reps, not a polished product.",
            "Rubric-native — feedback must map directly to how SZNVC judges score.",
            "Get out of the way — minimal UI so students focus on the pitch, not the tool.",
          ].map((item) => (
            <p key={item} className="text-[16px] text-[#B0B3BC] pl-5 border-l-2 border-zinc-700">{item}</p>
          ))}
        </div>
      </FadeIn>

      {/* 03 — Ideate + Scope */}
      <FadeIn className="mb-28">
        <SectionLabel sprint="03" phase="Ideate + Scope" />
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-8">
          With the problem defined, I mapped everything the tool could be — then ruthlessly scoped down to what would matter most within the SZNVC timeline.
        </p>

        <p className="text-[12px] text-accent uppercase tracking-widest mb-8">From broad to focused</p>
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
                {!isLast && (
                  <>
                    <div className="flex flex-col items-center py-1 md:hidden">
                      <div className="w-px h-5 bg-zinc-700" />
                      <svg width="12" height="8" viewBox="0 0 12 8" className="text-zinc-600">
                        <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
                      </svg>
                    </div>
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

      {/* SPRINT 2 */}
      <SprintDivider sprint="Sprint 2" phase="Prototype + Test" description="Build the simplest version, then learn from it" />

      {/* 04 — MVP */}
      <FadeIn className="mb-28">
        <SectionLabel sprint="04" phase="MVP: Text-Only First" />
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-6">
          We launched with a text-only input. The idea was simple: type or paste your pitch, hit submit, get rubric feedback back in seconds. No recording setup, no file uploads — just the core loop.
        </p>
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-8">
          The goal was to validate the feedback engine before adding any complexity around input format. Could we generate feedback that students actually found useful? That was the only question Sprint 2 needed to answer.
        </p>

        {/* Sprint 2 decisions */}
        <div className="space-y-3 mb-10">
          {[
            "Text input only — reduce setup friction to zero so students could try it immediately.",
            "Hardcoded SZNVC rubric — no customization, just the actual criteria judges use.",
            "Single feedback view — scorecard + top 3 fixes, nothing else.",
          ].map((item) => (
            <p key={item} className="text-[16px] text-[#B0B3BC] pl-5 border-l-2 border-zinc-700">{item}</p>
          ))}
        </div>

        {/* Pivot callout */}
        <div className="rounded-xl border border-zinc-700 bg-white/[0.02] p-6">
          <div className="flex items-start gap-4">
            <div className="w-1 self-stretch bg-accent rounded-full shrink-0" />
            <div>
              <p className="text-[12px] text-accent uppercase tracking-widest mb-2">The Pivot</p>
              <p className="text-[16px] text-white mb-3 leading-snug">
                Testing revealed a gap: pitching is verbal. Text felt unnatural.
              </p>
              <p className="text-[15px] text-[#B0B3BC] leading-[1.8]">
                Students would paste in their pitch script — but the way they typed their pitch wasn&apos;t the way they delivered it. The tool was coaching a document, not a speaker. Multiple users asked the same thing: <em>&ldquo;Can I just record myself?&rdquo;</em>
              </p>
              <p className="text-[15px] text-[#B0B3BC] leading-[1.8] mt-3">
                That feedback shaped everything in Sprint 3. Voice and video had to be first-class inputs — not an afterthought.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* SPRINT 3 */}
      <SprintDivider sprint="Sprint 3" phase="Build + Ship" description="Expand inputs, sharpen the feedback loop, and ship before competition rounds" />

      {/* 05 — Solution */}
      <FadeIn className="mb-28">
        <SectionLabel sprint="05" phase="Full Product Solution" />
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-8">
          Sprint 3 expanded the input surface and locked in the feedback UI. The core loop stayed the same — submit a pitch, get rubric-aligned feedback — but now students could pitch in the way they actually practice: talking.
        </p>

        {/* Solution flow */}
        <div className="rounded-2xl bg-white/[0.02] border border-zinc-800/60 p-8 mb-10">
          <p className="text-[12px] text-accent uppercase tracking-widest mb-8">How it works</p>
          <div className="flex flex-col md:flex-row items-stretch gap-4">
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

            <div className="flex items-center justify-center py-2 md:py-0">
              <ArrowRight className="w-5 h-5 text-zinc-600 rotate-90 md:rotate-0" />
            </div>

            <div className="flex-1 rounded-xl bg-accent/[0.06] border border-accent/20 p-5 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-3">
                <Brain className="w-5 h-5 text-accent" />
              </div>
              <p className="text-[13px] text-white font-medium mb-1">AI Analysis</p>
              <p className="text-[11px] text-[#8B8F9A] leading-relaxed">Speech parsing · rubric mapping · scoring engine</p>
            </div>

            <div className="flex items-center justify-center py-2 md:py-0">
              <ArrowRight className="w-5 h-5 text-zinc-600 rotate-90 md:rotate-0" />
            </div>

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

        <h3 className="text-[18px] text-white mb-3">Pitch Modes</h3>
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9]">
          Students select a time limit — 60 seconds, 3 minutes, or 10 minutes — matching SZNVC&apos;s actual pitch rounds. The AI calibrates feedback to the format: a 60-second pitch gets scored on clarity and hook; a 10-minute pitch gets scored on depth, financials, and market validation.
        </p>
      </FadeIn>

      {/* 06 — Key Decisions */}
      <FadeIn className="mb-28">
        <SectionLabel sprint="06" phase="Key Decisions + Tradeoffs" />

        <div className="space-y-4">
          {[
            {
              title: "Scorecard-first, not chat-first feedback",
              rejected: "Conversational AI chat after each pitch",
              chosen: "Single rubric scorecard with anchored top fixes",
              why: "Students don't want to read through a conversation to find what they need to improve. A scorecard is scannable, actionable, and easy to reference between reps.",
            },
            {
              title: "Rubric-mapped scoring, not generic AI feedback",
              rejected: "Generic feedback categories like 'clarity' and 'structure'",
              chosen: "Feedback tied directly to SZNVC judging criteria",
              why: "Generic feedback might be useful in any context, but it's not useful here. Students needed to know they were improving on the exact dimensions judges would score.",
            },
            {
              title: "Voice as a first-class input, not an add-on",
              rejected: "Text-only with optional recording",
              chosen: "Voice and video as native inputs with speech parsing",
              why: "The pivot from Sprint 2 made this clear — pitching is a verbal activity. Recording had to feel as natural as typing, not like a bonus feature bolted on after the fact.",
            },
          ].map((d, i) => (
            <div key={d.title} className="rounded-xl bg-white/[0.02] border border-zinc-800/60 p-6">
              <p className="text-[13px] text-accent font-medium mb-3">Decision {i + 1}</p>
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

      {/* 07 — Iteration */}
      <FadeIn className="mb-28">
        <SectionLabel sprint="07" phase="Iteration" />
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-8">
          Beta usage surfaced a few patterns that shaped the final shipped version. None were blockers — but each one made the tool meaningfully easier to use between sessions.
        </p>

        <div className="space-y-4">
          {[
            {
              change: "Auto-save sessions",
              why: "Students were closing the tab between rounds and losing context. Auto-save let them come back to previous feedback without starting over.",
            },
            {
              change: "Rubric resource links in the sidebar",
              why: "Students kept asking where to find the judging rubric and Stella's Guide. Linking them directly inside the tool removed the need to search.",
            },
            {
              change: "Clearer scorecard hierarchy",
              why: "Early scorecards listed every rubric dimension equally. Reordering by impact — and visually emphasizing top fixes — helped students know what to work on first.",
            },
          ].map((item) => (
            <div key={item.change} className="rounded-xl bg-white/[0.02] border border-zinc-800/60 p-5 flex gap-4">
              <div className="w-1 bg-zinc-700 rounded-full shrink-0" />
              <div>
                <p className="text-[15px] text-white mb-1">{item.change}</p>
                <p className="text-[13px] text-[#8B8F9A] leading-relaxed">{item.why}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* RETROSPECTIVE */}
      <SprintDivider sprint="Retrospective" phase="Ship + Reflect" description="What shipped, what it did, and what I'd do differently" />

      {/* 08 — Results */}
      <FadeIn className="mb-28">
        <SectionLabel sprint="08" phase="Impact at SZNVC" />
        <p className="text-[17px] text-[#B0B3BC] leading-[1.9] mb-10">
          AI Pitch Coach shipped in time for SZNVC&apos;s competition rounds and was used by the actual cohort throughout the event cycle. These are the outcomes from that first season.
        </p>

        {/* Progress rings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { stat: "130+", label: "students onboarded", pct: 87, sub: "of cohort adopted" },
            { stat: "85%", label: "return rate", pct: 85, sub: "came back to practice" },
            { stat: "4.7/5", label: "satisfaction score", pct: 94, sub: "overall rating" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl bg-white/[0.02] border border-zinc-800/60 p-6 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
                  <circle cx="48" cy="48" r="40" fill="none" stroke="rgba(63,63,70,0.4)" strokeWidth="4" />
                  <circle
                    cx="48" cy="48" r="40" fill="none"
                    stroke="#C6FE21" strokeWidth="4" strokeLinecap="round"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Teams who used the tool reported feeling more structured and confident heading into pitch day.",
            "Faculty and mentors recognized the tool's impact and are planning to continue it for future SZNVC cycles.",
          ].map((quote) => (
            <div key={quote} className="rounded-xl bg-white/[0.02] border border-zinc-800/60 p-5">
              <p className="text-[15px] text-[#B0B3BC] leading-[1.8]">{quote}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* 09 — Reflection */}
      <FadeIn>
        <SectionLabel sprint="09" phase="Reflection" />

        <div className="space-y-8">
          {[
            {
              title: "Ship the loop before the interface",
              desc: "The most important thing Sprint 2 taught me was to validate the feedback loop — not the visual design. Getting one working cycle (submit → score → fix) in front of students early was worth more than any polished wireframe.",
            },
            {
              title: "The pivot was a feature, not a failure",
              desc: "Expanding from text to voice/video felt like scope creep at first. It wasn't. It was the research doing its job — students told us what they needed, and we listened fast enough to act on it.",
            },
            {
              title: "Focus is a constraint, not a compromise",
              desc: "Scoping to rubric-aligned feedback and skipping dashboards, history, and peer review wasn't settling. It was what made the product usable within a real competition timeline. The constraint forced the right decisions.",
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

function SectionLabel({ sprint, phase }: { sprint: string; phase: string }) {
  return (
    <div className="flex gap-4 mb-8">
      <div className="w-1 bg-accent rounded-full self-stretch" />
      <div>
        <p className="text-[13px] text-accent font-medium uppercase tracking-widest">{sprint}</p>
        <h2 className="text-[22px] md:text-[28px] text-white font-normal">{phase}</h2>
      </div>
    </div>
  )
}

function SprintDivider({ sprint, phase, description }: { sprint: string; phase: string; description: string }) {
  return (
    <div className="flex items-center gap-6 mb-16">
      <div className="flex-1 h-px bg-zinc-800" />
      <div className="text-center shrink-0">
        <p className="text-[11px] text-accent uppercase tracking-widest mb-0.5">{sprint}</p>
        <p className="text-[15px] text-white font-normal">{phase}</p>
        <p className="text-[12px] text-[#8B8F9A] mt-0.5">{description}</p>
      </div>
      <div className="flex-1 h-px bg-zinc-800" />
    </div>
  )
}
