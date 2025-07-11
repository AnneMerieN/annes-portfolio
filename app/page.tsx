"use client"

import {
  Code,
  Terminal,
  Wifi,
  Github,
  Mail,
  Linkedin,
  Briefcase,
  Download,
  Palette,
  Zap,
  Monitor,
  Gamepad,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Play,
  Pause,
} from "lucide-react"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function CyberpunkPortfolio() {
  return (
    <div className="min-h-screen bg-black font-mono">
      {/* Enhanced Header/Navigation */}
      <NavBar />

      {/* Redesigned Hero Section with Black Background */}
      <section
        id="home"
        className="min-h-[90vh] border-b border-zinc-800 relative overflow-hidden flex items-center bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950"
      >
        {/* Enhanced background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(24,24,27,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.9)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(249,168,212,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(249,168,212,0.05)_0%,transparent_60%)]"></div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-64 h-64 border-t-2 border-l-2 border-zinc-800 rounded-br-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 border-b-2 border-r-2 border-zinc-800 rounded-tl-3xl opacity-40"></div>

        {/* Radial glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] animate-pulse-slow delay-700"></div>

        {/* Digital rain effect (vertical lines) */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="digital-rain"></div>
        </div>

        {/* Content container */}
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="bg-zinc-900/80 backdrop-blur-md rounded-2xl border border-zinc-800/50 shadow-[0_0_30px_rgba(249,168,212,0.15)] overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(249,168,212,0.25)]">
              {/* Pink accent line */}
              <div className="h-1.5 w-full bg-gradient-to-r from-pink-500 via-pink-400 to-transparent"></div>

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                  {/* Left column - Hero content (spans 3 columns) */}
                  <div className="lg:col-span-3 space-y-8">
                    {/* Job titles */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Full Stack Developer", "Game Developer", "UI/UX Designer"].map((title, index) => (
                        <div
                          key={index}
                          className="inline-block bg-zinc-900/80 rounded-lg px-3 py-1 border border-zinc-800 text-pink-500 text-xs uppercase tracking-wider"
                        >
                          {title}
                        </div>
                      ))}
                    </div>

                    {/* Hero heading with gradient */}
                    <div>
                      <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-500 to-white animate-text-gradient">
                          ANNE MERIE NGUYEN
                        </span>
                      </h1>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 leading-relaxed border-l-2 border-pink-500 pl-4 max-w-xl">
                      I craft exceptional digital experiences with clean code and cutting-edge technology. Specializing
                      in web applications with futuristic interfaces and robust architecture.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Link href="#projects" className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-pink-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse-slow"></div>
                        <button className="relative bg-zinc-900 px-6 py-3 rounded-xl leading-none flex items-center divide-x divide-gray-600 text-white">
                          <span className="flex items-center space-x-2 pr-4">
                            <Briefcase className="h-5 w-5 text-pink-500" />
                            <span className="uppercase tracking-wider text-sm font-semibold">View Projects</span>
                          </span>
                          <span className="pl-4 transition duration-200 group-hover:text-pink-500">
                            <ArrowRight className="h-5 w-5" />
                          </span>
                        </button>
                      </Link>

                      <Link
                        href="/files/anne-merie-nguyen-cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-zinc-700 text-zinc-300 hover:border-pink-500 hover:text-pink-500 rounded-xl transition-all duration-300 uppercase tracking-wider text-sm px-6 py-3 h-auto flex items-center"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download CV
                      </Link>
                    </div>

                    {/* Social links */}
                    <div className="flex gap-4 pt-2">
                      <Link
                        href="https://github.com"
                        target="_blank"
                        className="text-white hover:text-pink-500 transition-colors relative group"
                      >
                        <Github className="h-5 w-5 relative z-10" />
                        <span className="absolute inset-0 rounded-full bg-pink-500/10 scale-0 group-hover:scale-150 transition-transform duration-300"></span>
                        <span className="sr-only">GitHub</span>
                      </Link>
                      <Link
                        href="https://linkedin.com"
                        target="_blank"
                        className="text-blue-500 hover:text-pink-500 transition-colors relative group"
                      >
                        <Linkedin className="h-5 w-5 relative z-10" />
                        <span className="absolute inset-0 rounded-full bg-pink-500/10 scale-0 group-hover:scale-150 transition-transform duration-300"></span>
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                      <Link
                        href="mailto:hello@example.com"
                        className="text-emerald-500 hover:text-pink-500 transition-colors relative group"
                      >
                        <Mail className="h-5 w-5 relative z-10" />
                        <span className="absolute inset-0 rounded-full bg-pink-500/10 scale-0 group-hover:scale-150 transition-transform duration-300"></span>
                        <span className="sr-only">Email</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right column - Profile image (spans 2 columns) */}
                  <div className="lg:col-span-2 relative">
                    {/* Enhanced profile image with frame */}
                    <div className="relative aspect-square w-64 sm:w-80 mx-auto rounded-2xl bg-zinc-800 overflow-hidden border border-zinc-700 group transition-all duration-500 hover:border-pink-500/40 hover:shadow-xl hover:shadow-pink-500/20">
                      {/* Profile Image */}
                      <Image
                        src="/images/profile.png"
                        alt="Anne Merie Nguyen"
                        width={320}
                        height={320}
                        className="object-cover w-full h-full z-10 relative"
                      />

                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-20"></div>

                      {/* Animated corner brackets */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-pink-500 animate-pulse-slow z-30"></div>
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-pink-500 animate-pulse-slow delay-300 z-30"></div>
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-500 animate-pulse-slow delay-600 z-30"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-pink-500 animate-pulse-slow delay-900 z-30"></div>

                      {/* Grid overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(24,24,27,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.9)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 z-20"></div>

                      {/* Status indicator */}
                      <div className="absolute top-3 right-3 flex items-center gap-2 bg-zinc-900/80 px-2 py-1 rounded-full z-30">
                        <div className="h-2 w-2 rounded-full bg-pink-500 animate-pulse"></div>
                        <span className="text-xs text-zinc-400">ONLINE</span>
                      </div>

                      {/* Layered decorative elements */}
                      <div className="absolute bottom-3 left-3 bg-zinc-900/80 px-2 py-1 rounded-full text-xs text-pink-500 border border-zinc-800 z-30">
                        <span className="animate-pulse">SYSTEM READY</span>
                      </div>
                    </div>

                    {/* Decorative elements around the image */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-pink-500/20 rounded-tr-3xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-pink-500/20 rounded-bl-3xl"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center mt-8">
              <a href="#projects" className="text-zinc-500 hover:text-pink-500 transition-colors animate-bounce-slow">
                <ChevronDown className="h-6 w-6" />
                <span className="sr-only">Scroll down</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-b border-zinc-800 bg-zinc-900 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,168,212,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,168,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              FEATURED <span className="text-pink-500">PROJECTS</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Project Card 1 */}
            <div className="w-full bg-zinc-800/50 rounded-2xl border border-zinc-700 overflow-hidden transition-all duration-500 hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(249,168,212,0.15)] group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Screenshot placeholder */}
                <div className="aspect-video lg:aspect-square bg-zinc-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-60"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(24,24,27,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.9)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Monitor className="h-16 w-16 text-pink-500 mx-auto mb-4 opacity-60" />
                      <p className="text-zinc-400 text-sm uppercase tracking-wider">Project Screenshot</p>
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur-sm text-pink-500 text-xs px-3 py-1 rounded-full uppercase tracking-wider border border-zinc-700">
                    UI/UX DESIGN
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-pink-500 transition-colors duration-300">
                        TEAMFIGHT TACTICS FOR NINTENDO SWITCH
                      </h3>
                      <p className="text-zinc-400 leading-relaxed text-lg">
                        Teamfight Tactics (TFT) is a popular autobattler developed by Riot Games, originally designed for PC and mobile platforms. This case study explores how TFT's gameplay can be adapted for the Nintendo Switch, balancing deep strategy mechanics with a console-friendly user interface.
                      </p>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {["Figma", "Miro", "Unity"].map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1 rounded-full bg-zinc-700/50 text-zinc-300 border border-zinc-600 group-hover:border-pink-500/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project button */}
                    <div className="pt-4">
                      <Link
                        href="/projects/tft-switch"
                        className="inline-flex items-center gap-3 bg-zinc-900 hover:bg-pink-500 text-white px-6 py-3 rounded-xl border border-zinc-700 hover:border-pink-500 transition-all duration-300 group/btn"
                      >
                        <span className="uppercase tracking-wider text-sm font-semibold">View Project</span>
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="w-full bg-zinc-800/50 rounded-2xl border border-zinc-700 overflow-hidden transition-all duration-500 hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(249,168,212,0.15)] group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Content - Left side for variety */}
                <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-pink-500 transition-colors duration-300">
                        TBA
                      </h3>
                      <p className="text-zinc-400 leading-relaxed text-lg">
                        TBA
                      </p>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {["TBA", "TBA", "TBA", "TBA", "TBA"].map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1 rounded-full bg-zinc-700/50 text-zinc-300 border border-zinc-600 group-hover:border-pink-500/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project button */}
                    <div className="pt-4">
                      <Link
                        href="/projects/ux-redesign"
                        className="inline-flex items-center gap-3 bg-zinc-900 hover:bg-pink-500 text-white px-6 py-3 rounded-xl border border-zinc-700 hover:border-pink-500 transition-all duration-300 group/btn"
                      >
                        <span className="uppercase tracking-wider text-sm font-semibold">View Project</span>
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Screenshot placeholder */}
                <div className="aspect-video lg:aspect-square bg-zinc-900 relative overflow-hidden order-1 lg:order-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-60"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(24,24,27,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.9)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Gamepad className="h-16 w-16 text-pink-500 mx-auto mb-4 opacity-60" />
                      <p className="text-zinc-400 text-sm uppercase tracking-wider">Game Screenshot</p>
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 bg-zinc-900/80 backdrop-blur-sm text-pink-500 text-xs px-3 py-1 rounded-full uppercase tracking-wider border border-zinc-700">
                    Game
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="w-full bg-zinc-800/50 rounded-2xl border border-zinc-700 overflow-hidden transition-all duration-500 hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(249,168,212,0.15)] group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Screenshot placeholder */}
                <div className="aspect-video lg:aspect-square bg-zinc-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 opacity-60"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(24,24,27,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.9)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Zap className="h-16 w-16 text-pink-500 mx-auto mb-4 opacity-60" />
                      <p className="text-zinc-400 text-sm uppercase tracking-wider">App Screenshot</p>
                    </div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur-sm text-pink-500 text-xs px-3 py-1 rounded-full uppercase tracking-wider border border-zinc-700">
                    AI Tool
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-pink-500 transition-colors duration-300">
                        TBA
                      </h3>
                      <p className="text-zinc-400 leading-relaxed text-lg">
                      TBA
                      </p>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {["TBA", "TBA", "TBA", "TBA", "TBA"].map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1 rounded-full bg-zinc-700/50 text-zinc-300 border border-zinc-600 group-hover:border-pink-500/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project button */}
                    <div className="pt-4">
                      <Link
                        href="/projects/sealbites-app"
                        className="inline-flex items-center gap-3 bg-zinc-900 hover:bg-pink-500 text-white px-6 py-3 rounded-xl border border-zinc-700 hover:border-pink-500 transition-all duration-300 group/btn"
                      >
                        <span className="uppercase tracking-wider text-sm font-semibold">View Project</span>
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Categorized */}
      <section id="skills" className="py-20 border-b border-zinc-800 bg-zinc-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,168,212,0.05)_0%,transparent_60%)] opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              TECH <span className="text-pink-500">STACK</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-8 hover:border-pink-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(249,168,212,0.15)]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-pink-500" />
                  <h3 className="text-zinc-300 text-sm uppercase tracking-wider">TOOLS & TECHNOLOGIES</h3>
                </div>
                <div className="h-2 w-2 rounded-full bg-pink-500 animate-pulse"></div>
              </div>

              {/* Categorized Tech Stack */}
              <div className="space-y-8">
                {techStackCategories.map((category, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center gap-2 mb-3">
                      {category.icon}
                      <h4 className="text-pink-500 text-xs uppercase tracking-wider">{category.name}</h4>
                      <div className="h-px flex-grow bg-zinc-800"></div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <button
                          key={skillIndex}
                          className="px-4 py-2.5 bg-zinc-800 rounded-xl text-sm text-zinc-300 border border-zinc-700 hover:border-pink-500 hover:bg-zinc-800/80 hover:text-pink-500 hover:shadow-[0_0_10px_rgba(249,168,212,0.2)] transition-all duration-300 uppercase tracking-wider"
                        >
                          {skill}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 border-b border-zinc-800 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(249,168,212,0.05)_0%,transparent_50%)] opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About <span className="text-pink-500">Me</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Profile Image */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-zinc-700 hover:border-pink-500/50 transition-all duration-300">
                  <Image
                    src="/images/profile.png"
                    alt="Anne Merie Nguyen"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent"></div>
                </div>
              </div>

              {/* About Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                    I'm a passionate UX Designer and Full-Stack Developer with over 5 years of experience creating
                    digital experiences that matter. I specialize in bridging the gap between beautiful design and
                    functional code.
                  </p>
                  <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                    My journey began with a Computer Science degree, followed by hands-on experience at tech startups
                    where I developed expertise in modern web technologies, user-centered design, and game development.
                  </p>
                  <p className="text-lg text-zinc-300 leading-relaxed">
                    I believe in creating accessible, performant applications with intuitive interfaces that solve real
                    problems for real people.
                  </p>
                </div>

                {/* Book Recommendation */}
                <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-6 hover:border-pink-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">📚</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Book Recommendation</h3>
                      <p className="text-pink-500 font-semibold mb-2">"The Design of Everyday Things" by Don Norman</p>
                      <p className="text-zinc-400 text-sm">
                        A timeless classic that fundamentally changed how I think about user experience and design.
                        Norman's insights into human-centered design principles are invaluable for anyone creating
                        digital products.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Favorite Game */}
                <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-6 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">🎮</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Favorite Game</h3>
                      <p className="text-cyan-400 font-semibold mb-2">Hollow Knight</p>
                      <p className="text-zinc-400 text-sm">
                        An indie masterpiece that showcases incredible art direction, tight gameplay mechanics, and
                        atmospheric storytelling. It's a perfect example of how small teams can create extraordinary
                        experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simplified Interests */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Interests & Hobbies</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: "💻", label: "Coding" },
                  { icon: "🎨", label: "Design" },
                  { icon: "🎮", label: "Gaming" },
                  { icon: "📚", label: "Reading" },
                  { icon: "🎵", label: "Music" },
                  { icon: "🏸", label: "Badminton" },
                  { icon: "☕", label: "Coffee" },
                  { icon: "🌱", label: "Learning" },
                ].map((interest, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900/50 rounded-lg px-4 py-3 border border-zinc-800 hover:border-pink-500/30 transition-all duration-300 group flex items-center gap-2"
                  >
                    <span className="text-lg">{interest.icon}</span>
                    <span className="text-zinc-300 group-hover:text-pink-500 transition-colors text-sm font-medium">
                      {interest.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section id="contact" className="py-20 bg-zinc-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,168,212,0.08)_0%,transparent_40%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              CONNECT <span className="text-pink-500">WITH ME</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Establish direct communication channels through these network interfaces.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-zinc-900 rounded-lg border border-zinc-800 shadow-[0_0_15px_rgba(249,168,212,0.15)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,168,212,0.25)]">
              <div className="bg-zinc-950 p-4 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-pink-500" />
                  <h2 className="text-zinc-300 text-sm uppercase tracking-wider">NETWORK_CONNECTIONS</h2>
                </div>
                <div className="h-2 w-2 rounded-full bg-pink-500 animate-pulse"></div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Github className="h-8 w-8" />,
                      name: "GitHub",
                      handle: "@AnneMerieN",
                      url: "https://github.com",
                      color: "from-zinc-800 to-zinc-900",
                      iconColor: "text-white",
                    },
                    {
                      icon: <Linkedin className="h-8 w-8" />,
                      name: "LinkedIn",
                      handle: "Anne Merie Nguyen",
                      url: "https://linkedin.com",
                      color: "from-zinc-800 to-zinc-900",
                      iconColor: "text-blue-500",
                    },
                    {
                      icon: <Mail className="h-8 w-8" />,
                      name: "Email",
                      handle: "hello@example.com",
                      url: "mailto:hello@example.com",
                      color: "from-zinc-800 to-zinc-900",
                      iconColor: "text-emerald-500",
                    },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-800 rounded-lg border border-zinc-700 p-5 flex flex-col items-center justify-center hover:border-pink-500/50 transition-all duration-300 group relative overflow-hidden"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                      ></div>
                      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(24,24,27,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.9)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>

                      <div className="relative z-10 flex flex-col items-center">
                        <div
                          className={`${social.iconColor} group-hover:text-pink-500 transition-colors duration-300 mb-3`}
                        >
                          {social.icon}
                        </div>
                        <div className="text-zinc-200 font-bold mb-1">{social.name}</div>
                        <div className="text-zinc-400 text-sm">{social.handle}</div>

                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-pink-500 text-xs uppercase tracking-wider">
                          Connect
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-8 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,168,212,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,168,212,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Terminal className="h-5 w-5 text-pink-500" />
              <div className="text-pink-500 font-bold tracking-wider uppercase">ANNE_MERIE_NGUYEN</div>
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

            <div className="flex gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                className="text-white hover:text-pink-500 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-blue-500 hover:text-pink-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:hello@example.com" className="text-emerald-500 hover:text-pink-400 transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-900 text-center">
            <div className="text-xs text-zinc-600">
              <span className="text-pink-500">SYSTEM</span> © {new Date().getFullYear()} All rights reserved.
            </div>
            <div className="text-xs text-zinc-800 mt-1">NEXUS OS v3.42.1</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Enhanced Navigation Bar Component
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-zinc-900/60 backdrop-blur-lg border-b border-zinc-800/50 shadow-[0_0_15px_rgba(249,168,212,0.1)] sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4 md:justify-center">
          {/* Logo - Left on mobile, centered on desktop */}
          <div className="flex items-center gap-2 md:absolute md:left-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-pink-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <Terminal className="h-5 w-5 text-pink-500 relative z-10" />
            </div>
            <h1 className="text-pink-500 font-bold tracking-wider text-lg uppercase">ANNE_MERIE_NGUYEN</h1>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center">
            <div className="bg-zinc-800/30 rounded-xl p-1 backdrop-blur-sm">
              <div className="flex items-center">
                {["HOME", "PROJECTS", "SKILLS", "ABOUT", "CONTACT"].map((item, index) => (
                  <Link
                    key={item}
                    href={`/#${item.toLowerCase()}`}
                    className="relative px-4 py-2 text-zinc-400 text-sm hover:text-pink-500 transition-colors uppercase tracking-wider group rounded-lg"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute inset-0 bg-zinc-700/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200"></span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button - Right on mobile, hidden on desktop */}
          <button
            className="md:hidden text-zinc-400 hover:text-pink-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900/60 backdrop-blur-lg border-b border-zinc-800/50 animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              {["HOME", "PROJECTS", "SKILLS", "ABOUT", "CONTACT"].map((item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="px-4 py-3 text-zinc-400 hover:text-pink-500 hover:bg-zinc-800/50 rounded-lg transition-all duration-200 uppercase tracking-wider text-sm text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

// Video Project Card Component - Updated to link to case study
function VideoProjectCard({ title, description, tags, videoSrc, slug }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      const handleEnded = () => setIsPlaying(false)
      videoElement.addEventListener("ended", handleEnded)

      return () => {
        videoElement.removeEventListener("ended", handleEnded)
      }
    }
  }, [])

  return (
    <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden transition-all duration-500 hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20 group h-full flex flex-col">
      <div className="aspect-video w-full bg-zinc-800 relative overflow-hidden">
        <video ref={videoRef} className="w-full h-full object-cover" muted loop playsInline>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Grid overlay effect */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(24,24,27,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.9)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 w-full h-full flex items-center justify-center z-10"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          <div className="bg-zinc-900/80 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-pink-500/80">
            {isPlaying ? <Pause className="h-6 w-6 text-white" /> : <Play className="h-6 w-6 text-white" />}
          </div>
        </button>

        <div className="absolute top-2 right-2 bg-zinc-950/80 text-pink-500 text-xs px-1.5 py-0.5 rounded-full uppercase tracking-wider text-[10px] z-10">
          {tags[0]}
        </div>
      </div>

      <div className="p-3 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-base font-bold text-white group-hover:text-pink-500 transition-colors duration-300 line-clamp-1">
            {title}
          </h3>
          <div className="h-1 w-1 rounded-full bg-pink-500"></div>
        </div>

        <p className="text-xs text-zinc-400 mb-2 flex-grow line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-1 mb-2">
          {tags.slice(1, 3).map((tag, index) => (
            <span
              key={index}
              className="text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 transition-all duration-300 group-hover:bg-zinc-800/80 group-hover:text-pink-100"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400">+{tags.length - 3}</span>
          )}
        </div>

        <div className="flex gap-2 pt-2 border-t border-zinc-800">
          <Link
            href={`/projects/${slug}`}
            className="text-zinc-400 hover:text-pink-500 transition-colors text-xs uppercase tracking-wider flex items-center gap-1"
          >
            View Case Study <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}

// Project Card Component - Made Smaller and updated to link to case studies
function ProjectCard({ title, description, tags, image, github, demo }) {
  return (
    <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden transition-all duration-500 hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20 group h-full flex flex-col">
      <div className="aspect-video w-full bg-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Grid overlay effect */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(24,24,27,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(24,24,27,0.9)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

        <div className="absolute top-2 right-2 bg-zinc-950/80 text-pink-500 text-xs px-1.5 py-0.5 rounded-full uppercase tracking-wider text-[10px]">
          {tags[0]}
        </div>
      </div>

      <div className="p-3 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-base font-bold text-white group-hover:text-pink-500 transition-colors duration-300 line-clamp-1">
            {title}
          </h3>
          <div className="h-1 w-1 rounded-full bg-pink-500"></div>
        </div>

        <p className="text-xs text-zinc-400 mb-2 flex-grow line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-1 mb-2">
          {tags.slice(1, 3).map((tag, index) => (
            <span
              key={index}
              className="text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 transition-all duration-300 group-hover:bg-zinc-800/80 group-hover:text-pink-100"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400">+{tags.length - 3}</span>
          )}
        </div>

        <div className="flex gap-2 pt-2 border-t border-zinc-800">
          <Link
            href={`/projects/nexus-commerce`}
            className="text-zinc-400 hover:text-pink-500 transition-colors text-xs uppercase tracking-wider flex items-center gap-1"
          >
            View Case Study <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}

// Tech stack categories
const techStackCategories = [
  {
    name: "DESIGN & UI/UX",
    icon: <Palette className="h-4 w-4 text-pink-500" />,
    skills: ["Figma", "UI/UX", "Responsive Design", "Accessibility", "Design Systems", "Storybook"],
  },
  {
    name: "GAME DEVELOPMENT",
    icon: <Gamepad className="h-4 w-4 text-pink-500" />,
    skills: ["Unity", "Unreal Engine", "Godot", "Three.js", "WebGL", "Phaser", "Blender", "C#", "C++"],
  },
]

// Sample project data
const projects = [
  {
    title: "TEAMFIGHT TACTICS FOR NINTENDO SWITCH",
    description: "Teamfight Tactics (TFT) is a popular autobattler developed by Riot Games, originally designed for PC and mobile platforms. However, no version exists for gaming consoles like the Nintendo Switch, despite its massive user base and portability benefits. This case study explores how TFT's gameplay can be adapted for the Nintendo Switch, balancing deep strategy mechanics with a console-friendly user interface",
    tags: ["E-COMMERCE", "Next.js", "Stripe", "Prisma"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "NEURAL GENERATOR",
    description: "An AI-powered application that generates content based on user prompts.",
    tags: ["AI", "React", "OpenAI", "Node.js"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "QUANTUM TASKS",
    description: "A collaborative task management application with real-time updates.",
    tags: ["PRODUCTIVITY", "TypeScript", "Firebase", "React"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "CYBER DASHBOARD",
    description: "A responsive analytics dashboard with data visualization and reporting.",
    tags: ["ANALYTICS", "Vue.js", "D3.js", "Express"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "NEON CHAT",
    description: "Real-time messaging application with end-to-end encryption and file sharing.",
    tags: ["COMMUNICATION", "Socket.io", "React", "MongoDB"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "PULSE BLOG",
    description: "A modern blogging platform with markdown support and SEO optimization.",
    tags: ["CONTENT", "Next.js", "GraphQL", "PostgreSQL"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "CYBER SECURITY TOOL",
    description: "A security analysis tool for identifying vulnerabilities in web applications.",
    tags: ["SECURITY", "Python", "React", "Docker"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "VIRTUAL REALITY EXPERIENCE",
    description: "An immersive VR experience built with WebXR and Three.js.",
    tags: ["VR", "Three.js", "WebXR", "JavaScript"],
    image: "/placeholder.svg",
    github: "https://github.com",
    demo: "https://example.com",
  },
]
