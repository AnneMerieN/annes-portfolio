"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Users, Wrench, Target } from "lucide-react";

export default function TFTSwitchCaseStudy() {
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

<main>
  {/* Title + Banner */}
  <section className="container mx-auto px-4 py-12">
    <div className="max-w-4xl mx-auto text-center">
      <div className="eyebrow mb-4">
        UI/UX
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
        Teamfight Tactics for Nintendo Switch
      </h1>
    </div>

    <div className="max-w-6xl mx-auto">
      <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden relative">
        <Image
          src="/images/Thumbnail.png"
          alt="TFT Switch Adaptation Showcase Banner"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </div>
  </section>

  {/* Single centered wrapper for ALL case‑study sections */}
  <div className="max-w-4xl mx-auto px-4">
    {/* 00 — Project Overview */}
    <section id="overview" aria-labelledby="overview-heading">
      <div className="section-header">
        <div className="w-1 h-12 bg-pink-500" />
        <div>
          <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">00</p>
          <h2 id="overview-heading" className="text-2xl md:text-4xl font-bold text-white">
            PROJECT OVERVIEW
          </h2>
        </div>
      </div>

      {/* …your Overview meta + paragraphs here (unchanged)… */}

      <div className="section-block grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-300">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-zinc-400">Timeline</p>
                  <p className="font-semibold text-white flex items-center gap-2"><Calendar className="h-4 w-4" /> Jan. 2025 - May 2025</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Team</p>
                  <p className="font-semibold text-white flex items-center gap-2"><Users className="h-4 w-4" /> Personal Project</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-zinc-400">Tools</p>
                  <p className="font-semibold text-white flex items-center gap-2"><Wrench className="h-4 w-4" /> Figma, Miro</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Role</p>
                  <p className="font-semibold text-white flex items-center gap-2"><Target className="h-4 w-4" /> UI/UX Designer</p>
                </div>
              </div>
            </div>

        <div className="section-block">
          <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
              Teamfight Tactics (TFT) is Riot Games’ popular auto-battler strategy game, ...
          </p>
        </div>
    </section>

    {/* 01 — EMPATHIZE */}
    <section id="empathize" aria-labelledby="empathize-heading" className="section-block-lg">
      <div className="section-header">
        <div className="w-1 h-12 bg-pink-500" />
        <div>
          <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">01</p>
          <h2 id="empathize-heading" className="text-2xl md:text-4xl font-bold text-white">
            EMPATHIZE
          </h2>
        </div>
      </div>

 <div className="section-block space-y-6">
  <p className="body-text">When PC games make their way to consoles, the results are often mixed. Gamers are quick to
    point out when an adaptation feels clunky — menus that don’t fit the screen, controls that feel
    unnatural, or mechanics that clearly weren’t designed with a controller in mind. These
    frustrations shaped my starting point: if TFT were to come to the Switch, it couldn’t just be a
    port. It needed to feel like it belonged there.</p>
  <p className="body-text">
    With that in mind, I asked: <span className="font-semibold text-white">Who would actually play TFT on the Switch, and what would they expect?</span>
 </p>
</div>

{/* Competitive Analysis (no horizontal scroll) */}
<div className="section-block">
  <h3 className="subheading">Competitive Analysis</h3>

<figure className="section-block">
  <div className="w-full overflow-hidden border-zinc-800">
    <Image
      src="/images/user-frustrations.png"
      alt="Common player frustrations when PC-first games are adapted to console."
      width={1400}
      height={700}
      className="w-full h-auto object-contain bg-zinc-900"
      priority={false}
    />
  </div>
  <figcaption className="mt-3 text-sm text-zinc-500 text-center">
    Frequent pain points: slower navigation, small text in handheld, imprecise joystick placement, nested menus during timed moments.
  </figcaption>
</figure>

  <p className="text-zinc-300 leading-relaxed mb-8">
    A side‑by‑side comparison of how PC‑first strategy titles adapted to controller input and smaller screens.
  </p>

  {/* Mobile: stacked cards (no table) */}
  <div className="md:hidden space-y-4">
    {[
      {
        game: "Hearthstone (Mobile/Console)",
        strengths: "Streamlined UI; simplified menus; controller-friendly card selection.",
        weaknesses: "Limited visual depth; slower pace compared to PC.",
        takeaways: "Simplify complex interactions without losing clarity.",
      },
      {
        game: "Civilization VI (Switch)",
        strengths: "Radial menus; zoom/pan navigation; readability scaling.",
        weaknesses: "Menus feel nested and slow; precision actions cumbersome.",
        takeaways: "Radial menus work but must remain fast and shallow.",
      },
      {
        game: "League of Legends: Wild Rift",
        strengths: "Joystick movement; quick-cast ability wheels.",
        weaknesses: "Fast actions require dexterity; can overwhelm casual players.",
        takeaways: "Balance tactical speed with accessible shortcuts.",
      },
    ].map((row) => (
      <div key={row.game} className="card">
        <h4 className="text-pink-400 font-semibold mb-3">{row.game}</h4>
        <div className="space-y-3 text-sm">
          <div>
            <p className="text-zinc-400 uppercase tracking-wide text-[11px] mb-1">✅ Strengths</p>
            <p className="text-zinc-300">{row.strengths}</p>
          </div>
          <div>
            <p className="text-zinc-400 uppercase tracking-wide text-[11px] mb-1">❌ Weaknesses</p>
            <p className="text-zinc-300">{row.weaknesses}</p>
          </div>
          <div>
            <p className="text-zinc-400 uppercase tracking-wide text-[11px] mb-1">💡 Takeaways</p>
            <p className="text-zinc-300">{row.takeaways}</p>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Tablet/Desktop: fixed table with wrapping, no overflow */}
  <div className="hidden md:block">
    <table className="w-full table-fixed border-collapse text-sm text-left">
      {/* Set column widths to avoid overflow; content will wrap */}
      <colgroup>
        <col className="w-[28%]" />
        <col className="w-[24%]" />
        <col className="w-[24%]" />
        <col className="w-[24%]" />
      </colgroup>

      <thead>
        <tr className="bg-zinc-900/60 text-pink-500 uppercase tracking-wide text-xs">
          <th className="px-4 py-3 border border-zinc-800">Game</th>
          <th className="px-4 py-3 border border-zinc-800">✅ Strengths</th>
          <th className="px-4 py-3 border border-zinc-800">❌ Weaknesses</th>
          <th className="px-4 py-3 border border-zinc-800">💡 Takeaways</th>
        </tr>
      </thead>

      <tbody>
        {[
          {
            game: "Hearthstone (Mobile/Console)",
            strengths: "Streamlined UI; simplified menus; controller-friendly card selection.",
            weaknesses: "Limited visual depth; slower pace compared to PC.",
            takeaways: "Simplify complex interactions without losing clarity.",
          },
          {
            game: "Civilization VI (Switch)",
            strengths: "Radial menus; zoom/pan navigation; readability scaling.",
            weaknesses: "Menus feel nested and slow; precision actions cumbersome.",
            takeaways: "Radial menus work but must remain fast and shallow.",
          },
          {
            game: "League of Legends: Wild Rift",
            strengths: "Joystick movement; quick-cast ability wheels.",
            weaknesses: "Fast actions require dexterity; can overwhelm casual players.",
            takeaways: "Balance tactical speed with accessible shortcuts.",
          },
        ].map((row, i) => (
          <tr key={row.game} className={i % 2 === 0 ? "bg-zinc-900" : ""}>
            <td className="px-4 py-3 font-medium text-zinc-300 border border-zinc-800 align-top break-words">
              {row.game}
            </td>
            <td className="px-4 py-3 text-green-400 border border-zinc-800 align-top break-words">
              {row.strengths}
            </td>
            <td className="px-4 py-3 text-red-400 border border-zinc-800 align-top break-words">
              {row.weaknesses}
            </td>
            <td className="px-4 py-3 text-yellow-400 border border-zinc-800 align-top break-words">
              {row.takeaways}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>




{/* Persona Cards Section */}
<div className="section-block">
  <h3 className="subheading">User Personas</h3>

  <p className="body-text mb-8">
    To ground the design in real player needs, I created three representative personas. 
    Each one reflects a distinct type of TFT player who might adopt the Nintendo Switch version, 
    highlighting their backgrounds, habits, and goals. These personas guided design decisions 
    around usability, accessibility, and maintaining the game’s tactical depth.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Persona 1 */}
    <div className="card flex flex-col items-center text-center p-6 hover:bg-zinc-900/70 transition">
      <img
        src="/images/gamer_boy.png"
        alt="Persona Profile"
        className="w-20 h-20 rounded-full mb-4 border-2 border-pink-500 shadow-md"
      />
      <h4 className="text-lg font-semibold text-white mb-1">Alex Chen</h4>
      <p className="text-sm text-zinc-400 mb-4">UX Researcher · 26</p>
      <p className="text-zinc-300 text-sm leading-relaxed mb-4">
        PC gamer shifting to Switch. Loves TFT but finds handheld controls clunky.
      </p>
      <div className="w-full text-left mt-auto">
        <h5 className="text-pink-500 font-semibold text-xs uppercase mb-2">Goals</h5>
        <ul className="list-disc list-inside text-zinc-300 text-sm leading-snug space-y-1">
          <li>Casual TFT on the go</li>
          <li>UI tuned for Joy-Cons</li>
          <li>Keep tactical depth</li>
        </ul>
      </div>
    </div>

    {/* Persona 2 */}
    <div className="card flex flex-col items-center text-center p-6 hover:bg-zinc-900/70 transition">
      <img
        src="/images/gamer_girl.png"
        alt="Persona Profile"
        className="w-20 h-20 rounded-full mb-4 border-2 border-pink-500 shadow-md"
      />
      <h4 className="text-lg font-semibold text-white mb-1">Maya Lopez</h4>
      <p className="text-sm text-zinc-400 mb-4">Student · 20</p>
      <p className="text-zinc-300 text-sm leading-relaxed mb-4">
        Busy student who games on Switch during commutes and short breaks.
      </p>
      <div className="w-full text-left mt-auto">
        <h5 className="text-pink-500 font-semibold text-xs uppercase mb-2">Goals</h5>
        <ul className="list-disc list-inside text-zinc-300 text-sm leading-snug space-y-1">
          <li>Fast session setup</li>
          <li>Readable in handheld mode</li>
          <li>Accessible controls</li>
        </ul>
      </div>
    </div>

    {/* Persona 3 */}
    <div className="card flex flex-col items-center text-center p-6 hover:bg-zinc-900/70 transition">
      <img
        src="/images/gamer_boy.png"
        alt="Persona Profile"
        className="w-20 h-20 rounded-full mb-4 border-2 border-pink-500 shadow-md"
      />
      <h4 className="text-lg font-semibold text-white mb-1">Ryan Patel</h4>
      <p className="text-sm text-zinc-400 mb-4">Esports Enthusiast · 29</p>
      <p className="text-zinc-300 text-sm leading-relaxed mb-4">
        Competitive gamer who streams TFT and wants console parity with PC.
      </p>
      <div className="w-full text-left mt-auto">
        <h5 className="text-pink-500 font-semibold text-xs uppercase mb-2">Goals</h5>
        <ul className="list-disc list-inside text-zinc-300 text-sm leading-snug space-y-1">
          <li>Stream-friendly UI</li>
          <li>Controller shortcuts</li>
          <li>Detailed stats visibility</li>
        </ul>
      </div>
    </div>
  </div>
</div>



{/* Empathy Map */}
<div className="section-block">
  <h3 className="subheading">Empathy Map (Alex’s POV)</h3>

  <div className="border border-zinc-800 overflow-hidden">
    <div className="grid grid-cols-2 divide-x divide-zinc-800">
      {/* Top Row */}
      <div className="p-6 border-b border-zinc-800">
        <h4 className="font-medium text-pink-500 mb-2">Says</h4>
        <p className="text-zinc-300 leading-relaxed">
          “It feels clunky to move units with the joystick.”
        </p>
      </div>
      <div className="p-6 border-b border-zinc-800">
        <h4 className="font-medium text-pink-500 mb-2">Thinks</h4>
        <p className="text-zinc-300 leading-relaxed">
          “Why can’t this be as smooth as my other Switch games?”
        </p>
      </div>
    </div>

    <div className="grid grid-cols-2 divide-x divide-zinc-800">
      {/* Bottom Row */}
      <div className="p-6">
        <h4 className="font-medium text-pink-500 mb-2">Does</h4>
        <p className="text-zinc-300 leading-relaxed">
          Struggles with drag-and-drop mechanics designed for mouse/touch.
        </p>
      </div>
      <div className="p-6">
        <h4 className="font-medium text-pink-500 mb-2">Feels</h4>
        <p className="text-zinc-300 leading-relaxed">
          Frustrated when controls break immersion.
        </p>
      </div>
    </div>
  </div>
</div>




</section>

    {/* 02 — DEFINE, 03 — Define, etc. go below, same wrapper */}
    <section id="define" aria-labelledby="define-heading" className="section-block-lg">
      <div className="section-header">
        <div className="w-1 h-12 bg-pink-500" />
        <div>
          <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">02</p>
          <h2 id="define-heading" className="text-2xl md:text-4xl font-bold text-white">
            DEFINE
          </h2>
        </div>
      </div>

        {/* Context / Storytelling */}
    <div className="section-block">
    <p className="body-text">
      After listening to player frustrations and studying other console adaptations, it became
      clear that simply porting TFT to the Switch wouldn’t work. Players weren’t just asking for
      the game to “fit” — they wanted an experience that felt native to console play.
    </p>
  </div>

      
       {/* Problem Statement */}
    <div className="section-block text-center border-y border-pink-500/30 py-10">
          <p className="text-sm uppercase tracking-widest text-pink-500 mb-4">
            Our Challenge...
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
            Bring the depth of PC-first strategy games to console with controls that feel natural and intuitive
          </h3>
        </div>

<div className="section-block">
  <h3 className="subheading">Key Pain Points</h3>
  <div className="divide-y divide-zinc-800 border-zinc-800 overflow-hidden">
    <div className="grid grid-cols-2 bg-zinc-900/60 text-pink-500 font-medium text-sm uppercase tracking-wide">
      <div className="px-4 py-3">Problem</div>
      <div className="px-4 py-3">Impact on UX</div>
    </div>

    <div className="grid grid-cols-2 hover:bg-zinc-800/40 transition">
      <div className="px-4 py-3 text-zinc-300">Mouse/touch-based UI</div>
      <div className="px-4 py-3 text-zinc-400">Doesn’t translate to Joy-Cons</div>
    </div>

    <div className="grid grid-cols-2 hover:bg-zinc-800/40 transition">
      <div className="px-4 py-3 text-zinc-300">Dense on-screen information</div>
      <div className="px-4 py-3 text-zinc-400">Unreadable in handheld mode</div>
    </div>

    <div className="grid grid-cols-2 hover:bg-zinc-800/40 transition">
      <div className="px-4 py-3 text-zinc-300">Drag-and-drop grid placement</div>
      <div className="px-4 py-3 text-zinc-400">Difficult with analog sticks</div>
    </div>

    <div className="grid grid-cols-2 hover:bg-zinc-800/40 transition">
      <div className="px-4 py-3 text-zinc-300">Complex menus and item usage</div>
      <div className="px-4 py-3 text-zinc-400">Requires streamlined interaction models</div>
    </div>
  </div>
</div>

{/* Journey Map */}
<div className="section-block">
  <h3 className="subheading">Journey Map</h3>
  <p className="text-zinc-300 leading-relaxed mb-6">
    I mapped out the current TFT journey (from lobby → carousel → gameplay) as if a Switch
    player tried to use the PC/mobile design. The journey revealed breakdowns at every step:
    difficulty targeting small units, HUD elements crammed on the screen, and menus that demanded
    precision inputs the Joy-Cons weren’t designed for. These insights shaped my design priorities.
  </p>

  {/* Desktop/tablet: full table (no scroll) */}
  <div className="hidden md:block overflow-hidden">
    <table className="w-full table-fixed border-collapse text-[13px] text-left">
      <colgroup>
        <col className="w-[14%]" />  {/* label column */}
        <col className="w-[17.2%]" />
        <col className="w-[17.2%]" />
        <col className="w-[17.2%]" />
        <col className="w-[17.2%]" />
        <col className="w-[17.2%]" />
      </colgroup>

      <thead>
        <tr className="bg-zinc-900/60">
          <th className="px-2.5 py-2.5 border border-zinc-800 text-pink-500 uppercase tracking-widest text-[11px] text-left"></th>
          {[
            { n: 1, title: "Launching the Game" },
            { n: 2, title: "Joining Match" },
            { n: 3, title: "Early Unit Placement" },
            { n: 4, title: "Mid-Game Item/Bench" },
            { n: 5, title: "Endgame / Results" },
          ].map((s) => (
            <th key={s.n} className="px-2.5 py-2.5 border border-zinc-800 text-center align-top">
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-md bg-pink-500/15 text-pink-400 text-[10px] font-semibold">
                    {s.n}
                  </span>
                  <span className="uppercase tracking-widest text-[10px] text-pink-500/90">
                    Stage {s.n}
                  </span>
                </div>
                <div className="text-white font-medium leading-snug text-[12px] break-words">
                  {s.title}
                </div>
              </div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {[
          {
            label: "Goals",
            cells: [
              "Quickly get into a match, like on PC.",
              "Enter lobby and prepare for carousel.",
              "Place starter units quickly and accurately.",
              "Manage bench, items, and shop mid-combat.",
              "Review performance, compare results.",
            ],
          },
          {
            label: "Actions",
            cells: [
              "Open game, navigate menus.",
              "Select game mode, confirm lobby.",
              "Use joystick + buttons to buy and place units.",
              "Try to drag/drop or open item menus mid-round.",
              "View stats, evaluate mistakes, requeue.",
            ],
          },
          {
            label: "Thoughts",
            cells: [
              "“Menus look different than PC — where’s everything?”",
              "“Why does navigating the lobby feel slower?”",
              "“On PC I can drag/drop instantly… this feels clunky.”",
              "“I can’t manage items and bench as quickly as with a mouse.”",
              "“I wish the stats screen looked closer to PC.”",
            ],
          },
          {
            label: "Pain Points",
            cells: [
              "Menu navigation feels slower with controller.",
              "Lobby text/icons too small on handheld.",
              "Drag-and-drop feels imprecise with joystick.",
              "Radial menus/items take too long in fast rounds.",
              "End screen feels simplified and missing details.",
            ],
          },
          {
            label: "Emotions",
            cells: [
              "🙂 Curious",
              "😐 Slightly annoyed",
              "😠 Frustrated",
              "😡 Overwhelmed",
              "😕 Mixed satisfaction",
            ],
          },
          {
            label: "Touchpoints",
            cells: [
              "Start menu, tutorial, Joy-Con inputs.",
              "Lobby, carousel intro.",
              "Shop UI, unit grid, joystick placement.",
              "Bench slots, radial item menu, HUD.",
              "Scoreboard, results summary.",
            ],
          },
          {
            label: "Opportunities",
            cells: [
              "Streamline menus for controller input.",
              "Scale UI elements for TV/handheld.",
              "Implement snap-to-grid + button shortcuts.",
              "Add quick-access radial menu with ZL/ZR shortcuts.",
              "Design a hybrid stats screen: console-readable but PC-detailed.",
            ],
          },
        ].map((row, i) => (
          <tr key={row.label} className={i % 2 === 1 ? "bg-zinc-700/20" : ""}>
            <td className="px-2.5 py-2.5 font-medium text-zinc-300 border border-zinc-800 align-top break-words">
              {row.label}
            </td>
            {row.cells.map((cell, j) => (
              <td
                key={j}
                className="px-2.5 py-2.5 text-zinc-400 border border-zinc-800 whitespace-normal break-words align-top"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Mobile: stacked cards (no horizontal scroll) */}
  <div className="md:hidden space-y-6">
    {[
      { n: 1, title: "Launching the Game" },
      { n: 2, title: "Joining Match" },
      { n: 3, title: "Early Unit Placement" },
      { n: 4, title: "Mid-Game Item/Bench" },
      { n: 5, title: "Endgame / Results" },
    ].map((stage, idx) => {
      const rows = [
        { k: "Goals", v: ["Quickly get into a match, like on PC.","Enter lobby and prepare for carousel.","Place starter units quickly and accurately.","Manage bench, items, and shop mid-combat.","Review performance, compare results."][idx] },
        { k: "Actions", v: ["Open game, navigate menus.","Select game mode, confirm lobby.","Use joystick + buttons to buy and place units.","Try to drag/drop or open item menus mid-round.","View stats, evaluate mistakes, requeue."][idx] },
        { k: "Thoughts", v: ["“Menus look different than PC — where’s everything?”","“Why does navigating the lobby feel slower?”","“On PC I can drag/drop instantly… this feels clunky.”","“I can’t manage items and bench as quickly as with a mouse.”","“I wish the stats screen looked closer to PC.”"][idx] },
        { k: "Pain Points", v: ["Menu navigation feels slower with controller.","Lobby text/icons too small on handheld.","Drag-and-drop feels imprecise with joystick.","Radial menus/items take too long in fast rounds.","End screen feels simplified and missing details."][idx] },
        { k: "Emotions", v: ["🙂 Curious","😐 Slightly annoyed","😠 Frustrated","😡 Overwhelmed","😕 Mixed satisfaction"][idx] },
        { k: "Touchpoints", v: ["Start menu, tutorial, Joy-Con inputs.","Lobby, carousel intro.","Shop UI, unit grid, joystick placement.","Bench slots, radial item menu, HUD.","Scoreboard, results summary."][idx] },
        { k: "Opportunities", v: ["Streamline menus for controller input.","Scale UI elements for TV/handheld.","Implement snap-to-grid + button shortcuts.","Add quick-access radial menu with ZL/ZR shortcuts.","Design a hybrid stats screen: console-readable but PC-detailed."][idx] },
      ];

      return (
        <div key={stage.n} className="rounded-xl border border-zinc-800 bg-zinc-900/40">
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-md bg-pink-500/15 text-pink-400 text-[10px] font-semibold">
                {stage.n}
              </span>
              <span className="uppercase tracking-widest text-[10px] text-pink-500/90">
                Stage {stage.n}
              </span>
            </div>
            <div className="text-white font-medium text-sm">{stage.title}</div>
          </div>
          <div className="p-4 space-y-3">
            {rows.map((r) => (
              <div key={r.k} className="text-[13px]">
                <div className="text-zinc-400 uppercase tracking-wider text-[10px] mb-1">
                  {r.k}
                </div>
                <div className="text-zinc-300 leading-relaxed">{r.v}</div>
              </div>
            ))}
          </div>
        </div>
      );
    })}
  </div>
</div>




{/* HMW Statement */}
      <div className="section-block text-center border-y border-pink-500/30 py-10">
        <p className="text-sm uppercase tracking-widest text-pink-500 mb-4">
          How might we...
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
          Make complex PC games more accessible <br />
          and intuitive for console players <br />
          without compromising gameplay depth?
        </h3>
      </div>

    </section>

{/* 04 — IDEATE */}
<section id="ideate" aria-labelledby="ideate-heading" className="section-block-lg">
  {/* Section header */}
  <div className="section-header">
    <div className="w-1 h-12 bg-pink-500" />
    <div>
      <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">04</p>
      <h2 id="ideate-heading" className="text-2xl md:text-4xl font-bold text-white">
        IDEATE
      </h2>
    </div>
  </div>

  {/* Narrative intro */}
  <div className="section-block max-w-3xl">
    <p className="body-text">
      With user pain points mapped, I shifted into brainstorming. The challenge was
      clear: <span className="text-pink-400 font-medium">how do we bring TFT’s depth
      onto a handheld controller</span> without overwhelming or slowing players down?
      I sketched, mapped controller flows, and tested mental models to see what could
      feel natural on Joy-Cons.
    </p>
  </div>

  {/* Concept directions */}
  <div className="section-block">
    <h3 className="subheading mb-4">Exploring Concepts</h3>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="card hover:bg-zinc-900/70 transition">
        <p className="text-sm uppercase tracking-wider text-pink-500 mb-2">A — Radial HUD</p>
        <p className="text-zinc-300 text-sm leading-relaxed">
          Quick radial menus for items and shop. Prioritizes speed and thumb reach.
        </p>
      </div>
      <div className="card hover:bg-zinc-900/70 transition">
        <p className="text-sm uppercase tracking-wider text-pink-500 mb-2">B — Snap Grid</p>
        <p className="text-zinc-300 text-sm leading-relaxed">
          Joystick magnetism when placing units. Reduces precision friction.
        </p>
      </div>
      <div className="card hover:bg-zinc-900/70 transition">
        <p className="text-sm uppercase tracking-wider text-pink-500 mb-2">C — Layered HUD</p>
        <p className="text-zinc-300 text-sm leading-relaxed">
          Lightweight combat overlay with an expandable detail layer.
        </p>
      </div>
    </div>
  </div>

  {/* Controller mapping */}
  <div className="section-block">
    <h3 className="subheading mb-4">Controller Mapping (First Pass)</h3>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="card">
        <p className="text-white font-medium mb-2">Core Actions</p>
        <ul className="text-zinc-300 text-sm space-y-1">
          <li><span className="text-zinc-400">A</span> — Place / Confirm</li>
          <li><span className="text-zinc-400">B</span> — Cancel / Back</li>
          <li><span className="text-zinc-400">X</span> — Item Menu</li>
          <li><span className="text-zinc-400">Y</span> — Inspect Unit</li>
        </ul>
      </div>
      <div className="card">
        <p className="text-white font-medium mb-2">Navigation</p>
        <ul className="text-zinc-300 text-sm space-y-1">
          <li>Left Stick — Cursor / Tile focus</li>
          <li>D-Pad — Quick HUD tabs</li>
          <li>L / R — Cycle panels (Shop / Bench / Scout)</li>
        </ul>
      </div>
      <div className="card">
        <p className="text-white font-medium mb-2">Economy</p>
        <ul className="text-zinc-300 text-sm space-y-1">
          <li><span className="text-zinc-400">ZR</span> — Roll</li>
          <li><span className="text-zinc-400">ZL</span> — Level Up</li>
          <li>Hold X — Sell / Confirm</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Sketches row */}
  <div className="section-block">
    <h3 className="subheading mb-4">Early Sketches</h3>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900 border border-zinc-800">
        <Image
          src="/images/ideation-radial-hud.png"
          alt="Radial HUD sketch"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900 border border-zinc-800">
        <Image
          src="/images/ideation-grid-snap.png"
          alt="Snap grid sketch"
          fill
          className="object-contain"
        />
      </div>
    </div>
    <p className="text-xs text-zinc-500 mt-3 text-center">
      Low-fidelity sketches helped visualize how controller input could map to TFT’s complex UI.
    </p>
  </div>

  {/* Selection rationale */}
  <div className="section-block text-center">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-zinc-800 bg-zinc-900/60">
      <span className="text-pink-500 text-xs uppercase tracking-wider">Chosen Direction</span>
      <span className="text-zinc-300 text-sm">Hybrid of Snap Grid + Radial Overlay</span>
    </div>
    <p className="body-text mt-4">
      I merged the snap-to placement from Concept B with a light radial overlay from Concept A
      and a collapsible layer from Concept C. The hybrid struck a balance between
      <span className="text-pink-400"> speed, clarity, and tactical depth</span>.
    </p>
  </div>

{/* Joy‑Con Diagrams (more realistic) */}
<div className="section-block">
  <div className="flex items-center justify-center gap-10 md:gap-16">
    {/* LEFT JOY‑CON */}
    <svg
      aria-hidden="true"
      viewBox="0 0 170 360"
      className="w-28 md:w-36 h-auto"
    >
      <defs>
        <linearGradient id="leftBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a2f" />
          <stop offset="100%" stopColor="#1d1d21" />
        </linearGradient>
      </defs>

      {/* Body */}
      <rect x="15" y="10" rx="44" width="120" height="340" fill="url(#leftBody)" stroke="#3f3f46" strokeWidth="2" />
      {/* Rail (right edge) */}
      <rect x="135" y="10" width="20" height="340" rx="8" fill="#0f0f11" stroke="#3f3f46" strokeWidth="2" />
      {/* SL / SR hints */}
      <rect x="140" y="40" width="10" height="26" rx="4" fill="#26262b" />
      <rect x="140" y="84" width="10" height="26" rx="4" fill="#26262b" />

      {/* Minus button */}
      <rect x="45" y="26" width="22" height="6" rx="3" fill="#9ca3af" />

      {/* Stick */}
      <circle cx="75" cy="118" r="22" fill="#18181b" stroke="#52525b" strokeWidth="2" />
      <circle cx="75" cy="118" r="10" fill="#2b2b30" />

      {/* D‑Pad (4 buttons) */}
      <circle cx="75" cy="204" r="10" fill="#9ca3af" />
      <circle cx="75" cy="248" r="10" fill="#9ca3af" />
      <circle cx="53" cy="226" r="10" fill="#9ca3af" />
      <circle cx="97" cy="226" r="10" fill="#9ca3af" />

      {/* Capture button */}
      <circle cx="45" cy="304" r="8" fill="#9ca3af" />
    </svg>

    {/* RIGHT JOY‑CON */}
    <svg
      aria-hidden="true"
      viewBox="0 0 170 360"
      className="w-28 md:w-36 h-auto"
    >
      <defs>
        <linearGradient id="rightBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a2f" />
          <stop offset="100%" stopColor="#1d1d21" />
        </linearGradient>
      </defs>

      {/* Body */}
      <rect x="35" y="10" rx="44" width="120" height="340" fill="url(#rightBody)" stroke="#3f3f46" strokeWidth="2" />
      {/* Rail (left edge) */}
      <rect x="15" y="10" width="20" height="340" rx="8" fill="#0f0f11" stroke="#3f3f46" strokeWidth="2" />
      {/* SL / SR hints */}
      <rect x="20" y="40" width="10" height="26" rx="4" fill="#26262b" />
      <rect x="20" y="84" width="10" height="26" rx="4" fill="#26262b" />

      {/* Plus button */}
      <rect x="118" y="26" width="22" height="6" rx="3" fill="#9ca3af" />
      <rect x="127" y="17" width="6" height="24" rx="3" fill="#9ca3af" />

      {/* ABXY cluster */}
      <g fill="#9ca3af" fontFamily="monospace" fontSize="10" textAnchor="middle">
        <circle cx="95" cy="204" r="10" fill="#9ca3af" />
        <text x="95" y="207" fill="#0f0f11">X</text>

        <circle cx="95" cy="248" r="10" fill="#9ca3af" />
        <text x="95" y="251" fill="#0f0f11">B</text>

        <circle cx="73" cy="226" r="10" fill="#9ca3af" />
        <text x="73" y="229" fill="#0f0f11">Y</text>

        <circle cx="117" cy="226" r="10" fill="#9ca3af" />
        <text x="117" y="229" fill="#0f0f11">A</text>
      </g>

      {/* Stick */}
      <circle cx="95" cy="118" r="22" fill="#18181b" stroke="#52525b" strokeWidth="2" />
      <circle cx="95" cy="118" r="10" fill="#2b2b30" />

      {/* Home button */}
      <circle cx="125" cy="304" r="8" fill="#9ca3af" />
    </svg>
  </div>

  <p className="text-zinc-500 text-xs text-center mt-3">
    Joy‑Con diagrams for input mapping exploration (not to scale).
  </p>
</div>



  {/* Design principles */}
  <div className="section-block">
    <h3 className="subheading mb-4">Guiding Principles</h3>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="card">
        <p className="text-white font-medium mb-2">Fast First</p>
        <p className="text-zinc-300 text-sm">Core actions are always one press away.</p>
      </div>
      <div className="card">
        <p className="text-white font-medium mb-2">Readable Anywhere</p>
        <p className="text-zinc-300 text-sm">Handheld or docked, the UI scales without losing clarity.</p>
      </div>
      <div className="card">
        <p className="text-white font-medium mb-2">Depth Preserved</p>
        <p className="text-zinc-300 text-sm">Advanced details remain accessible, never buried.</p>
      </div>
    </div>
  </div>
</section>



    <section id="prototype" aria-labelledby="prototype-heading" className="section-block-lg">
      <div className="section-header">
        <div className="w-1 h-12 bg-pink-500" />
        <div>
          <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">04</p>
          <h2 id="prototype-heading" className="text-2xl md:text-4xl font-bold text-white">
            PROTOTYPE
          </h2>
        </div>
      </div>
    </section>

    <section id="wireframes" aria-labelledby="wireframes-heading" className="section-block-lg">
      <div className="section-header">
        <div className="w-1 h-12 bg-pink-500" />
        <div>
          <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">05</p>
          <h2 id="wireframes-heading" className="text-2xl md:text-4xl font-bold text-white">
            WIREFRAMES
          </h2>
        </div>
      </div>

    {/* Stacked images */}
      <div className="section-block space-y-8">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src="/images/Start Screen - Wireframe.png"
            alt="Wireframe 1"
            fill
            className="object-contain bg-zinc-900"
          />
        </div>
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src="/images/Home - Wireframe.png"
            alt="Wireframe 2"
            fill
            className="object-contain bg-zinc-900"
          />
        </div>
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src="/images/Lobby - Wireframe.png"
            alt="Wireframe 3"
            fill
            className="object-contain bg-zinc-900"
          />
        </div>
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src="/images/Store - Wireframe.png"
            alt="Wireframe 4"
            fill
            className="object-contain bg-zinc-900"
          />
        </div>
      </div>
        </section>

      {/* REFLECTIONS & TAKEAWAYS */}
      <section id="reflection" aria-labelledby="reflection-heading" className="section-block-lg">
      <div className="section-header">
        <div className="w-1 h-12 bg-pink-500" />
        <div>
          <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">05</p>
          <h2 id="reflection-heading" className="text-2xl md:text-4xl font-bold text-white">
            REFLECTIONS & TAKEAWAYS
          </h2>
        </div>
      </div>

      <p className="section-block body-text">
        Designing for console presented unique UX challenges I hadn’t encountered on mobile or web:
      </p>

      <ul className="section-block space-y-4">
        <li className="p-4 bg-zinc-900/60 rounded-xl border border-zinc-800 text-zinc-300">
          🎮 Mapping deep mechanics to a controller required simplicity without loss of control
        </li>
        <li className="p-4 bg-zinc-900/60 rounded-xl border border-zinc-800 text-zinc-300">
          ✨ <span className="font-medium text-white">UI clarity</span> became essential—especially when screen size varied
        </li>
        <li className="p-4 bg-zinc-900/60 rounded-xl border border-zinc-800 text-zinc-300">
          ⚡ Input feedback and real-time responsiveness mattered more in a turn-based yet timed game
        </li>
      </ul>

      <p className="section-block body-text">
        This project sharpened my adaptive design thinking, and I now have a deeper appreciation for
        cross-platform interface design—especially in the gaming space, where usability and immersion must coexist.
      </p>
      </section>

      {/* NEXT STEPS */}
      <section id="nextsteps" aria-labelledby="nextsteps-heading" className="section-block-lg">
      <div className="section-header">
        <div className="w-1 h-12 bg-pink-500" />
        <div>
          <p className="text-lg text-pink-500 font-medium uppercase tracking-widest">05</p>
          <h2 id="nextsteps-heading" className="text-2xl md:text-4xl font-bold text-white">
            NEXT STEPS
          </h2>
        </div>
      </div>

      <div className="section-block max-w-3xl text-zinc-300 space-y-4">
          <p>
            My next steps for this project include developing onboarding tutorial mockups 
            to guide new players, adding accessibility settings such as colorblind modes 
            and text resizing, and conducting in-person testing using Switch Joy-Cons 
            through a simulated input prototype.
          </p>
        </div>
      </section>

  </div>
</main>


      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-8 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,168,212,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,168,212,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="text-xs text-zinc-600">
              <span className="text-pink-500">ANNE MERIE NGUYEN</span> © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
