import React from "react";
import { User, FlaskConical, Users, MonitorPlay } from "lucide-react";
import {
  BookOpenCheck,
  BrainCircuit,
  MapPinned,
  Goal,
  GaugeCircle,
  HeartHandshake,
  Clock,
  ClipboardList,
  Gamepad2,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  ThumbsUp,
  Quote,
  Target
} from "lucide-react";

export default function AtlasCaseStudy() {
  return (
    // If you have <CaseStudyLayout title="" ...>, wrap the content with it.
    <div className="bg-zinc-950 text-zinc-200">
      {/* HERO */}
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm tracking-widest text-pink-500 uppercase">Games User Research</p>
             {/* Title */}
    <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
      The WereCleaner — Evaluating Onboarding & Player Clarity
    </h1>
          <p className="mt-4 max-w-2xl text-zinc-400 md:text-lg">
            I led remote usability sessions on the USC Games stealth-comedy title
            <span className="text-zinc-200"> The WereCleaner</span> to assess tutorial
            comprehension, feedback cues, time-pressure perception, and overall flow.
          </p>

      
        {/* META BAR — Inline Row */}
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-pink-400" />
            <span className="text-zinc-300 font-medium">Role:</span>
            <span className="text-zinc-400">Games User Researcher</span>
          </div>

          <div className="flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-blue-400" />
            <span className="text-zinc-300 font-medium">Methods:</span>
            <span className="text-zinc-400">Remote 1:1, Affinity Mapping</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-green-400" />
            <span className="text-zinc-300 font-medium">Participants:</span>
            <span className="text-zinc-400">n = 6 (18–24)</span>
          </div>

          <div className="flex items-center gap-2">
            <MonitorPlay className="h-5 w-5 text-yellow-400" />
            <span className="text-zinc-300 font-medium">Tools:</span>
            <span className="text-zinc-400">Zoom, OBS, Sheets</span>
          </div>
        </div>
      </div>

        {/* Banner Image */}
        <div className="w-full h-[88vh] relative">
        <img
        src="/images/the-werecleaner-banner.png"
        className="w-full h-full object-cover object-top"
        />
      </div>
</header>

     {/* SITUATION */}
<section className="mx-auto max-w-6xl px-6 py-16 md:py-24 border-b border-zinc-800">
  <div className="section-header">
    <div className="w-1 h-12 bg-pink-500" />
    <div>
      <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">01</p>
      <h2 id="situation-heading" className="text-2xl md:text-4xl font-bold text-white">
        SITUATION
      </h2>
    </div>
  </div>

  <div className="mt-10 grid gap-12 md:grid-cols-2 items-start">
    {/* Game Context */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-zinc-200">About the Game</h3>
      <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
        The Werecleaner is a student-developed indie game by USC Games. It combines stealth mechanics with lighthearted narrative elements, where players take on the role of a werewolf janitor navigating challenges in a quirky, stylized environment.

        As part of my portfolio development, I conducted a games user research (GUR) study to evaluate the game’s onboarding process, UI clarity, and player perceptions of challenge difficulty. My goal was to identify usability issues and highlight opportunities to improve the player experience.
      </p>
    </div>

    {/* Research Context */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-zinc-200">Research Context</h3>
      <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
        The development team invited college students from math, CS, and AI organizations to 
        <span className="text-zinc-200"> playtest an early build</span>. I approached this study as a 
        <span className="text-zinc-200"> Games User Researcher</span>, focusing on identifying usability issues, 
        evaluating the clarity of onboarding, and capturing player perceptions of 
        <span className="text-zinc-200"> difficulty and collaboration</span>.
      </p>
    </div>
  </div>

  {/* Callout */}
  <div className="mt-12 pl-5 border-l-2 border-pink-500/60">
    <p className="text-sm md:text-base text-zinc-300 italic">
      My role: Structure a research study that would reveal onboarding clarity, teamwork flow, and 
      challenge balance in a game still in early development.
    </p>
  </div>
</section>


{/* RESEARCH (text only, no cards) */}
<section className="mx-auto max-w-6xl px-6 py-16 md:py-24 border-b border-zinc-800">
  <div className="section-header">
    <div className="w-1 h-12 bg-pink-500" />
    <div>
      <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">02</p>
      <h2 id="research-heading" className="text-2xl md:text-4xl font-bold text-white">
        RESEARCH
      </h2>
    </div>
  </div>

  <p className="mt-6 text-zinc-400 md:max-w-3xl">
  What we set out to learn about onboarding, stealth mechanics, and player flow in{" "}
  <span className="text-zinc-200">The WereCleaner</span>.
</p>

{/* Text-on-background objectives */}
<div className="mt-10 grid gap-y-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-3">
  {/* 1 */}
  <div className="flex items-start gap-3">
    <BookOpenCheck className="h-5 w-5 text-pink-500 mt-1 shrink-0" aria-hidden />
    <div>
      <h3 className="text-zinc-200 font-medium">Tutorial Clarity</h3>
      <p className="mt-1 text-sm text-zinc-400">
        Do new players understand Kyle’s role, the core controls, and objectives (cleaning, stealth, transformation) during onboarding?
      </p>
    </div>
  </div>

  {/* 2 */}
  <div className="flex items-start gap-3">
    <BrainCircuit className="h-5 w-5 text-blue-400 mt-1 shrink-0" aria-hidden />
    <div>
      <h3 className="text-zinc-200 font-medium">Stealth & Detection</h3>
      <p className="mt-1 text-sm text-zinc-400">
        Do players recognize when they’re at risk of being spotted, and understand how noise, sightlines, or alerts affect detection?
      </p>
    </div>
  </div>

  {/* 3 */}
  <div className="flex items-start gap-3">
    <MapPinned className="h-5 w-5 text-green-400 mt-1 shrink-0" aria-hidden />
    <div>
      <h3 className="text-zinc-200 font-medium">Level Navigation</h3>
      <p className="mt-1 text-sm text-zinc-400">
        Can players move around the office layouts efficiently and locate cleaning objectives without confusion?
      </p>
    </div>
  </div>

  {/* 4 */}
  <div className="flex items-start gap-3">
    <Goal className="h-5 w-5 text-yellow-400 mt-1 shrink-0" aria-hidden />
    <div>
      <h3 className="text-zinc-200 font-medium">Feedback & Failure States</h3>
      <p className="mt-1 text-sm text-zinc-400">
        Are success/failure conditions clear when Kyle is spotted, transforms, or fails to clean up evidence in time?
      </p>
    </div>
  </div>

  {/* 5 */}
  <div className="flex items-start gap-3">
    <GaugeCircle className="h-5 w-5 text-sky-300 mt-1 shrink-0" aria-hidden />
    <div>
      <h3 className="text-zinc-200 font-medium">Difficulty & Pacing</h3>
      <p className="mt-1 text-sm text-zinc-400">
        How do players perceive the balance between stealth tension, cleaning tasks, and comedic chaos?
      </p>
    </div>
  </div>

  {/* 6 */}
  <div className="flex items-start gap-3">
    <HeartHandshake className="h-5 w-5 text-pink-500 mt-1 shrink-0" aria-hidden />
    <div>
      <h3 className="text-zinc-200 font-medium">Engagement & Humor</h3>
      <p className="mt-1 text-sm text-zinc-400">
        Does the mix of stealth mechanics and absurd comedy feel rewarding, memorable, and aligned with player expectations?
      </p>
    </div>
  </div>
</div>

</section>


{/* STUDY PLAN */}
<section className="mx-auto max-w-6xl px-6 py-16 md:py-24 border-b border-zinc-800">
  <div className="section-header">
    <div className="w-1 h-12 bg-pink-500" />
    <div>
      <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">03</p>
      <h2 id="studyplan-heading" className="text-2xl md:text-4xl font-bold text-white">
        STUDY PLAN
      </h2>
    </div>
  </div>

  <p className="mt-6 text-zinc-400 md:max-w-3xl">
    A structured plan outlining methodology, participants, tools, session flow, and moderator guide for playtesting{" "}
    <span className="text-zinc-200">The WereCleaner</span>.
  </p>

  {/* OVERVIEW */}
  <div className="mt-10">
    <h3 className="text-xl font-semibold text-white mb-6">Overview</h3>
    <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
      <div className="flex items-center gap-2">
        <FlaskConical className="h-5 w-5 text-pink-500" />
        <span className="text-zinc-300 font-medium">Method:</span>
        <span className="text-zinc-400">Remote 1:1 sessions w/ think-aloud</span>
      </div>
      <div className="flex items-center gap-2">
        <Users className="h-5 w-5 text-blue-400" />
        <span className="text-zinc-300 font-medium">Participants:</span>
        <span className="text-zinc-400">n = 6 (ages 18–24)</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5 text-yellow-400" />
        <span className="text-zinc-300 font-medium">Session Length:</span>
        <span className="text-zinc-400">~45 min (30 play · 15 interview)</span>
      </div>
      <div className="flex items-center gap-2">
        <MonitorPlay className="h-5 w-5 text-green-400" />
        <span className="text-zinc-300 font-medium">Tools:</span>
        <span className="text-zinc-400">Zoom, OBS, Sheets</span>
      </div>
    </div>
  </div>

  {/* MODERATOR GUIDE */}
  <div className="mt-16">
    <h3 className="text-xl font-semibold text-white mb-6">Moderator Guide</h3>

    {/* Intro */}
    <div className="mt-12 border-t border-zinc-800/70 pt-8">
      <h4 className="flex items-center gap-2 text-zinc-200 font-medium">
        <CheckCircle2 className="h-5 w-5 text-pink-500" /> Introduction
      </h4>
      <div className="grid md:grid-cols-2 gap-6 text-sm text-zinc-400 mt-4">
        <ul className="space-y-2 list-disc pl-5">
          <li>Welcome: introduce yourself and explain the purpose of the study.</li>
          <li>Consent: explain recording, confidentiality, withdrawal rights, and data deletion.</li>
          <li>Session overview: Tutorial → First stealth section → Wrap-up.</li>
        </ul>
        <ul className="space-y-2 list-disc pl-5">
          <li>Reassurance: “I didn’t make this game — be honest.”</li>
          <li>Reminder: “We’re testing the game, not you. No right or wrong answers.”</li>
          <li>Encourage natural play: “Imagine you’re playing at home.”</li>
        </ul>
      </div>
    </div>

    {/* Pre-Interview */}
    <div className="mt-12 border-t border-zinc-800/70 pt-8">
      <h4 className="flex items-center gap-2 text-zinc-200 font-medium">
        <MessageSquare className="h-5 w-5 text-blue-400" /> Pre-Interview Questions
      </h4>
      <div className="grid sm:grid-cols-2 gap-6 text-sm text-zinc-400 mt-4">
        <ul className="space-y-2 list-disc pl-5">
          <li>What games have you been playing recently?</li>
          <li>Do you usually play stealth, puzzle, or comedic games?</li>
        </ul>
        <ul className="space-y-2 list-disc pl-5">
          <li>What do you enjoy/dislike about stealth mechanics?</li>
          <li>How comfortable are you with timed or high-pressure gameplay?</li>
        </ul>
      </div>
    </div>

    {/* Tasks */}
    <div className="mt-12 border-t border-zinc-800/70 pt-8">
      <h4 className="flex items-center gap-2 text-zinc-200 font-medium">
        <Gamepad2 className="h-5 w-5 text-green-400" /> Tasks
      </h4>
      <p className="text-sm text-zinc-400 mt-4">
        Each task included prompts, observation focus, and linked objectives:
      </p>
      <div className="overflow-x-auto mt-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-zinc-300 text-left border-b border-zinc-800/70">
              <th className="pb-3 pr-4 font-medium">Task</th>
              <th className="pb-3 pr-4 font-medium">Prompts</th>
              <th className="pb-3 font-medium">Observe / Objectives</th>
            </tr>
          </thead>
          <tbody className="text-zinc-400">
            <tr className="border-b border-zinc-800/60">
              <td className="py-4 pr-4 font-medium text-zinc-200">Tutorial Task</td>
              <td className="py-4 pr-4">“What do you think your goal is here?”</td>
              <td className="py-4">
                Do players grasp Kyle’s role, cleaning tools, and transformation mechanic?  
                <br /><span className="text-xs text-zinc-500">Addresses: Tutorial clarity, onboarding.</span>
              </td>
            </tr>
            <tr className="border-b border-zinc-800/60">
              <td className="py-4 pr-4 font-medium text-zinc-200">Stealth Section</td>
              <td className="py-4 pr-4">“How do you know if someone is about to spot you?”</td>
              <td className="py-4">
                Do players understand detection cues (sightlines, noise, alerts) and failure states when caught?  
                <br /><span className="text-xs text-zinc-500">Addresses: Stealth & detection, feedback.</span>
              </td>
            </tr>
            <tr>
              <td className="py-4 pr-4 font-medium text-zinc-200">Cleaning Objective</td>
              <td className="py-4 pr-4">“What do you think you need to do next?”</td>
              <td className="py-4">
                Navigation of office layouts, interaction with cleaning tasks, and clarity of progress cues.  
                <br /><span className="text-xs text-zinc-500">Addresses: Level navigation, pacing.</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Post-Interview */}
    <div className="mt-12 border-t border-zinc-800/70 pt-8">
      <h4 className="flex items-center gap-2 text-zinc-200 font-medium">
        <ClipboardList className="h-5 w-5 text-yellow-400" /> Post-Interview Questions
      </h4>
      <div className="grid sm:grid-cols-2 gap-6 text-sm text-zinc-400 mt-4">
        <ul className="space-y-2 list-disc pl-5">
          <li>What were your overall impressions of The WereCleaner?</li>
          <li>Anything you particularly liked about the stealth or humor?</li>
          <li>Anything you disliked or found frustrating?</li>
        </ul>
        <ul className="space-y-2 list-disc pl-5">
          <li>What was confusing or unclear?</li>
          <li>How did the difficulty and pacing feel?</li>
          <li>If the devs could change one thing, what would you change?</li>
        </ul>
      </div>
    </div>

    {/* Wrap-Up */}
    <div className="mt-12 border-t border-zinc-800/70 pt-8">
      <h4 className="flex items-center gap-2 text-zinc-200 font-medium">
        <HeartHandshake className="h-5 w-5 text-pink-500" /> Wrap-Up
      </h4>
      <ul className="space-y-2 list-disc pl-5 text-sm text-zinc-400 mt-4">
        <li>Reiterate withdrawal rights; participants may request data deletion.</li>
        <li>Incentive: each participant compensated with gift cards.</li>
        <li>Thank the participant: “That’s everything for today. Thanks again for your time.”</li>
      </ul>
    </div>
  </div>
</section>




{/* EXECUTION */}
<section className="mx-auto max-w-6xl px-6 py-16 md:py-24 border-b border-zinc-800">
  <div className="section-header">
    <div className="w-1 h-12 bg-pink-500" />
    <div>
      <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">04</p>
      <h2 id="execution-heading" className="text-2xl md:text-4xl font-bold text-white">
        EXECUTION
      </h2>
    </div>
  </div>

  <p className="mt-6 text-zinc-400 md:max-w-3xl">
    How the study was run and how insights were captured across stealth, detection, and cleaning loops.
  </p>

  {/* EXECUTION as horizontal flow */}
  <div className="mt-12">
    <h3 className="text-pink-500 font-semibold uppercase tracking-wide mb-8">Execution Process</h3>

    <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-12">
      {/* Connecting line (desktop only) */}
      <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-zinc-800" />

      {/* Step 1: Recruitment & Setup */}
      <div className="relative flex-1">
        <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border border-zinc-700 bg-zinc-950">
          <Users className="h-6 w-6 text-pink-500" />
        </div>
        <h4 className="mt-4 text-zinc-200 font-medium">Recruitment & Setup</h4>
        <p className="mt-2 text-sm text-zinc-400">
          Recruited 6 players (18–24) who regularly play stealth, puzzle, or indie games. Sessions ran remotely via Zoom
          (~45 min) with controller/keyboard sharing and screen capture enabled.
        </p>
      </div>

      {/* Step 2: Introduction & Framing */}
      <div className="relative flex-1">
        <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border border-zinc-700 bg-zinc-950">
          <CheckCircle2 className="h-6 w-6 text-pink-500" />
        </div>
        <h4 className="mt-4 text-zinc-200 font-medium">Introduction & Framing</h4>
        <p className="mt-2 text-sm text-zinc-400">
          Covered consent and expectations: “We’re testing the game, not you.” Positioned the goals: onboarding clarity,
          detection feedback, and cleaning objective visibility.
        </p>
      </div>

      {/* Step 3: Moderation & Observation */}
      <div className="relative flex-1">
        <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border border-zinc-700 bg-zinc-950">
          <MonitorPlay className="h-6 w-6 text-pink-500" />
        </div>
        <h4 className="mt-4 text-zinc-200 font-medium">Moderation & Observation</h4>
        <p className="mt-2 text-sm text-zinc-400">
          Think-aloud with minimal interruption. Probed for mental models around stealth (line-of-sight, noise),
          transformation triggers, and how players prioritized cleaning vs. avoiding coworkers.
        </p>
      </div>

      {/* Step 4: Recording & Notes */}
      <div className="relative flex-1">
        <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border border-zinc-700 bg-zinc-950">
          <ClipboardList className="h-6 w-6 text-pink-500" />
        </div>
        <h4 className="mt-4 text-zinc-200 font-medium">Recording & Notes</h4>
        <p className="mt-2 text-sm text-zinc-400">
          Captured gameplay via OBS and kept timestamped notes in Sheets for key events (first detection, first
          transformation, completion/failure of a cleaning objective).
        </p>
      </div>

      {/* Step 5: Behaviors Tracked */}
      <div className="relative flex-1">
        <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border border-zinc-700 bg-zinc-950">
          <Target className="h-6 w-6 text-pink-500" />
        </div>
        <h4 className="mt-4 text-zinc-200 font-medium">Behaviors Tracked</h4>
        <ul className="mt-2 space-y-1 text-sm text-zinc-400">
          <li>• Skipping or skimming tutorial text/instructions</li>
          <li>• Recognition of detection cues (sightlines, noise, alerts)</li>
          <li>• Clarity of cleaning objectives & progress indicators</li>
          <li>• Navigation fluency in office layouts (getting lost vs. pathfinding)</li>
          <li>• Reactions to being spotted/transforming and recovery behavior</li>
          <li>• Perception of tension vs. humor (does the comedic tone land?)</li>
        </ul>
      </div>
    </div>
  </div>
</section>


<section className="mx-auto max-w-6xl px-6 py-16 md:py-24 border-b border-zinc-800">
  <div className="section-header">
    <div className="w-1 h-12 bg-pink-500" />
    <div>
      <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">05</p>
      <h2 id="analysis-heading" className="text-2xl md:text-4xl font-bold text-white">
        ANALYSIS
      </h2>
    </div>
  </div>

  <div className="mt-12">
    <h3 className="text-blue-400 font-semibold uppercase tracking-wide mb-10">Themes</h3>

    <div className="grid gap-10 md:grid-cols-3">
      {/* Theme 1 */}
      <div className="space-y-4">
        <BrainCircuit className="h-6 w-6 text-blue-400" aria-hidden />
        <h4 className="text-zinc-200 font-medium">Onboarding Clarity</h4>
        <p className="text-sm text-zinc-400">
          Players skimmed tutorial text and missed key concepts like when Kyle transforms and how tools affect cleaning.
          Short, interactive teach-by-doing steps performed better than long text blocks.
        </p>
        <ul className="flex flex-wrap gap-2 text-xs mt-2">
          <li className="rounded-full border border-zinc-700/70 px-2.5 py-1 text-zinc-400">4/6 skimmed tutorial</li>
          <li className="rounded-full border border-zinc-700/70 px-2.5 py-1 text-zinc-400">3/6 missed tool usage cue</li>
          <li className="rounded-full border border-zinc-700/70 px-2.5 py-1 text-zinc-400">2/6 asked “why transform?”</li>
        </ul>
        <div className="mt-4">
          <div className="h-1.5 w-full rounded bg-zinc-800 overflow-hidden">
            <div className="h-full bg-blue-500/70" style={{ width: "66%" }} />
          </div>
          <div className="mt-2 text-[10px] uppercase tracking-wider text-zinc-500">Impact (est.)</div>
        </div>
      </div>

      {/* Theme 2 */}
      <div className="space-y-4">
        <Users className="h-6 w-6 text-blue-400" aria-hidden />
        <h4 className="text-zinc-200 font-medium">Stealth & Detection Cues</h4>
        <p className="text-sm text-zinc-400">
          Line-of-sight and noise signals weren’t always noticed. Players struggled to anticipate being spotted and to
          understand recovery after detection (panic → transform → cleanup).
        </p>
        <ul className="flex flex-wrap gap-2 text-xs mt-2">
          <li className="rounded-full border border-zinc-700/70 px-2.5 py-1 text-zinc-400">5/6 missed LOS warning</li>
          <li className="rounded-full border border-zinc-700/70 px-2.5 py-1 text-zinc-400">4/6 unclear noise cue</li>
          <li className="rounded-full border border-zinc-700/70 px-2.5 py-1 text-zinc-400">3/6 confused recovery</li>
        </ul>
        <div className="mt-4">
          <div className="h-1.5 w-full rounded bg-zinc-800 overflow-hidden">
            <div className="h-full bg-blue-500/70" style={{ width: "75%" }} />
          </div>
          <div className="mt-2 text-[10px] uppercase tracking-wider text-zinc-500">Impact (est.)</div>
        </div>
      </div>

      {/* Theme 3 */}
      <div className="space-y-4">
        <GaugeCircle className="h-6 w-6 text-blue-400" aria-hidden />
        <h4 className="text-zinc-200 font-medium">Feedback, Pacing & Tone</h4>
        <p className="text-sm text-zinc-400">
          Success/failure states around cleaning objectives and evidence removal were unclear, while time pressure was
          felt but not well tracked. When feedback landed, players reported a fun balance of tension and comedy.
        </p>
        <ul className="flex flex-wrap gap-2 text-xs mt-2">
          <li className="rounded-full border border-zinc-700/70 px-2.5 py-1 text-zinc-400">3/6 unsure objective done</li>
          <li className="rounded-full border border-zinc-700/70 px-2.5 py-1 text-zinc-400">4/6 missed timer pressure</li>
          <li className="rounded-full border border-zinc-700/70 px-2.5 py-1 text-zinc-400">5/6 enjoyed humor moments</li>
        </ul>
        <div className="mt-4">
          <div className="h-1.5 w-full rounded bg-zinc-800 overflow-hidden">
            <div className="h-full bg-blue-500/70" style={{ width: "60%" }} />
          </div>
          <div className="mt-2 text-[10px] uppercase tracking-wider text-zinc-500">Impact (est.)</div>
        </div>
      </div>
    </div>
  </div>
</section>





{/* FINDINGS (refined, no cards) */}
<section className="mx-auto max-w-6xl px-6 py-16 md:py-24 border-b border-zinc-800">
  <div className="section-header">
    <div className="w-1 h-12 bg-pink-500" />
    <div>
      <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">06</p>
      <h2 id="findings-heading" className="text-2xl md:text-4xl font-bold text-white">
        FINDINGS
      </h2>
    </div>
  </div>

  <p className="mt-6 text-zinc-400 md:max-w-3xl">
    Key usability issues and positive insights uncovered during playtesting of{" "}
    <span className="text-zinc-200">The WereCleaner</span>.
  </p>

  <div className="mt-12 grid gap-16 md:grid-cols-2">
    {/* Usability Issues */}
    <div>
      <h3 className="text-lg font-semibold text-pink-500 flex items-center gap-2 mb-6">
        <AlertTriangle className="h-5 w-5 text-pink-500" /> Usability Issues
      </h3>

      <div className="space-y-10">
        {/* Tutorial Overload */}
        <div className="space-y-3 border-t border-zinc-800/60 pt-6 first:border-0 first:pt-0">
          <h4 className="text-zinc-200 font-medium">Tutorial Overload</h4>
          <p className="text-sm text-zinc-400">
            4/6 players skimmed or skipped tutorial text, missing key mechanics like when Kyle transforms or how to clean evidence.
          </p>
          <blockquote className="pl-4 border-l-2 border-pink-500/50 text-pink-300 text-base italic">
            “I just wanted to get into the game and didn’t read all that.”
          </blockquote>
          <p className="text-xs text-zinc-500">Impact: Players entered levels without grasping core stealth/cleaning mechanics.</p>
        </div>

        {/* Stealth Cues */}
        <div className="space-y-3 border-t border-zinc-800/60 pt-6">
          <h4 className="text-zinc-200 font-medium">Unclear Stealth Cues</h4>
          <p className="text-sm text-zinc-400">
            5/6 struggled to recognize line-of-sight or noise indicators. Several were surprised when coworkers spotted them.
          </p>
          <blockquote className="pl-4 border-l-2 border-pink-500/50 text-pink-300 text-base italic">
            “I didn’t even realize they could see me from there.”
          </blockquote>
          <p className="text-xs text-zinc-500">Impact: Missed cues led to frequent detection and frustration.</p>
        </div>

        {/* Cleaning Objectives */}
        <div className="space-y-3 border-t border-zinc-800/60 pt-6">
          <h4 className="text-zinc-200 font-medium">Cleaning Objective Confusion</h4>
          <p className="text-sm text-zinc-400">
            3/6 weren’t sure what counted as “cleaned” or how to know when an area was complete. Feedback was subtle or easy to miss.
          </p>
          <p className="text-xs text-zinc-500">Impact: Progress felt ambiguous, reducing satisfaction when tasks were completed.</p>
        </div>

        {/* Pacing & Pressure */}
        <div className="space-y-3 border-t border-zinc-800/60 pt-6">
          <h4 className="text-zinc-200 font-medium">Pacing & Pressure</h4>
          <p className="text-sm text-zinc-400">
            Players felt time pressure but lacked clear indicators. Several only noticed danger once caught, not before.
          </p>
          <blockquote className="pl-4 border-l-2 border-pink-500/50 text-pink-300 text-base italic">
            “It all happened so fast — I didn’t know I was about to fail.”
          </blockquote>
          <p className="text-xs text-zinc-500">Impact: Sudden failures broke immersion and reduced perceived fairness.</p>
        </div>
      </div>
    </div>

    {/* Positive Insights */}
    <div>
      <h3 className="text-lg font-semibold text-blue-400 flex items-center gap-2 mb-6">
        <ThumbsUp className="h-5 w-5 text-blue-400" /> Positive Insights
      </h3>

      <div className="space-y-10">
        {/* Humor */}
        <div className="space-y-3 border-t border-zinc-800/60 pt-6 first:border-0 first:pt-0">
          <h4 className="text-zinc-200 font-medium">Humor Landed Well</h4>
          <p className="text-sm text-zinc-400">
            5/6 laughed at Kyle’s transformations and the absurdity of stealth-cleaning as a werewolf janitor.
          </p>
          <blockquote className="pl-4 border-l-2 border-blue-500/50 text-blue-300 text-base italic">
            “It’s so silly but that’s what makes it fun.”
          </blockquote>
        </div>

        {/* Tension + Comedy */}
        <div className="space-y-3 border-t border-zinc-800/60 pt-6">
          <h4 className="text-zinc-200 font-medium">Tension & Comedy Balance</h4>
          <p className="text-sm text-zinc-400">
            Players described the mix of stealth tension and comedic tone as engaging and unique.
          </p>
          <p className="text-xs text-zinc-500">Impact: Reinforced the game’s identity as both challenging and lighthearted.</p>
        </div>

        {/* Engagement */}
        <div className="space-y-3 border-t border-zinc-800/60 pt-6">
          <h4 className="text-zinc-200 font-medium">Engagement Through Tasks</h4>
          <p className="text-sm text-zinc-400">
            Cleaning puzzles were described as “oddly satisfying” once understood. Success felt rewarding despite prior confusion.
          </p>
          <blockquote className="pl-4 border-l-2 border-blue-500/50 text-blue-300 text-base italic">
            “Finally getting it clean without being seen was super satisfying.”
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</section>

{/* REFLECTIONS (horizontal layout) */}
<section className="mx-auto max-w-6xl px-6 py-16 md:py-24 border-b border-zinc-800">
  <div className="section-header">
    <div className="w-1 h-12 bg-pink-500" />
    <div>
      <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">07</p>
      <h2 id="reflection-heading" className="text-2xl md:text-4xl font-bold text-white">
        REFLECTIONS
      </h2>
    </div>
  </div>

  <p className="mt-6 text-zinc-400 md:max-w-3xl">
    What I learned about onboarding for stealth-comedy, communicating risk, and making progress feel satisfying in{" "}
    <span className="text-zinc-200">The WereCleaner</span>.
  </p>

  {/* 3-column layout for reflections */}
  <div className="mt-12 grid gap-10 md:grid-cols-3">
    {/* 1 */}
    <div>
      <p className="text-pink-500 text-sm font-mono">01</p>
      <h3 className="text-zinc-200 font-semibold mt-1">Teach mechanics by doing, not reading</h3>
      <p className="text-sm text-zinc-400 mt-2">
        Players routinely skimmed tutorial text. Short, interactive micro-tasks (move → hide → clean → recover)
        taught faster and stuck better than paragraphs of instructions.
      </p>
      <p className="text-xs text-zinc-500 italic mt-3">
        Impact: Favor guided actions with immediate feedback over static text.
      </p>
    </div>

    {/* 2 */}
    <div>
      <p className="text-pink-500 text-sm font-mono">02</p>
      <h3 className="text-zinc-200 font-semibold mt-1">Make stealth state change unmistakable</h3>
      <p className="text-sm text-zinc-400 mt-2">
        Subtle line-of-sight and noise cues led to surprise detection. Clear thresholds (audio sting + color shift +
        icon change) at “noticed → alerted → caught” reduce confusion and support fair recovery.
      </p>
      <p className="text-xs text-zinc-500 italic mt-3">
        Impact: Stronger salience at state transitions improves perceived fairness and control.
      </p>
    </div>

    {/* 3 */}
    <div>
      <p className="text-pink-500 text-sm font-mono">03</p>
      <h3 className="text-zinc-200 font-semibold mt-1">Progress needs visible payoffs</h3>
      <p className="text-sm text-zinc-400 mt-2">
        Cleaning felt best when feedback was obvious (area meter, sparkle, checklist tick). Ambiguous completion
        blunted the humor and the “aha” of a clean getaway.
      </p>
      <p className="text-xs text-zinc-500 italic mt-3">
        Impact: Pair each action with progress cues and a clear completion moment.
      </p>
    </div>
  </div>

  {/* Closing note */}
  <div className="mt-14 pl-4 border-l-2 border-pink-500/40">
    <p className="text-sm text-zinc-300">
      Next time, I’ll broaden recruitment beyond STEM and capture lightweight telemetry (first detection time, missed cue
      rates, cleaning completion retries) to triangulate observations with quantitative signals and tune difficulty pacing.
    </p>
  </div>
</section>





    </div>
  );
}
