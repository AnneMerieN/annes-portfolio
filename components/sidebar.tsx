"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  Home,
  User,
  Mail,
  Linkedin,
  ExternalLink,
  FileText,
  Menu,
  X,
} from "lucide-react"

const projects = [
  { name: "AI Pitch Coach", href: "/projects/ai-pitch-coach" },
  { name: "Teamfight Tactics", href: "/projects/tft-switch" },
  { name: "USC Games", href: "/projects/usc-games" },
]

const connectLinks = [
  { name: "Email", href: "mailto:annemn3@uci.edu", icon: Mail },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anne-merie-nguyen/",
    icon: Linkedin,
    external: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/dabbingninja05",
    icon: ExternalLink,
    external: true,
  },
  { name: "Resume", href: "/resume", icon: FileText },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden bg-sidebar rounded-lg p-2 text-[#99A1AF] hover:text-white transition-colors"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-3 left-3 h-[calc(100vh-24px)] w-[260px] bg-sidebar flex flex-col gap-[30px] overflow-y-auto p-8 z-50 rounded-2xl transition-transform duration-300 md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-[272px]"
        }`}
      >
        {/* Mobile close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 md:hidden text-[#99A1AF] hover:text-white transition-colors"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Profile Header */}
        <div className="w-full">
          <div className="w-12 h-12 rounded-full overflow-hidden mb-3">
            <Image
              src="/images/profile.png"
              alt="Anne Merie Nguyen"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="font-bold text-[17px] text-white leading-snug">
            Anne Merie Nguyen
          </p>
          <p className="text-[15px] text-[#99A1AF] leading-snug">
            Product Management
          </p>
        </div>

        {/* Navigation */}
        <nav className="w-full flex flex-col gap-[11px]">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-[11px] text-[15px] transition-colors ${
              pathname === "/" ? "text-white" : "text-[#99A1AF] hover:text-white"
            }`}
          >
            <Home className="h-[17px] w-[17px]" />
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-[11px] text-[15px] transition-colors ${
              pathname === "/about"
                ? "text-white"
                : "text-[#99A1AF] hover:text-white"
            }`}
          >
            <User className="h-[17px] w-[17px]" />
            About
          </Link>
        </nav>

        {/* Projects */}
        <div className="w-full flex flex-col gap-[11px]">
          <p className="text-[13px] text-[#8B8F9A] uppercase tracking-[0.7px]">
            Projects
          </p>
          <div className="flex flex-col gap-[7px]">
            {projects.map((project) => (
              <Link
                key={project.name}
                href={project.href}
                onClick={() => setMobileOpen(false)}
                className={`group flex items-center gap-[9px] text-[15px] transition-colors ${
                  pathname === project.href
                    ? "text-accent"
                    : "text-[#99A1AF] hover:text-accent"
                }`}
              >
                <div className={`w-[17px] h-[17px] rounded-[6px] shrink-0 transition-colors ${
                  pathname === project.href
                    ? "bg-accent"
                    : "bg-[#4A5565] group-hover:bg-accent"
                }`} />
                {project.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Let's Connect */}
        <div className="w-full flex flex-col gap-[11px]">
          <p className="text-[13px] text-[#8B8F9A] uppercase tracking-[0.7px]">
            {"Let's Connect"}
          </p>
          <div className="flex flex-col gap-[7px]">
            {connectLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-[9px] text-[15px] text-[#99A1AF] hover:text-white transition-colors"
                >
                  <Icon className="h-[15px] w-[15px] shrink-0" />
                  {link.name}
                </Link>
              )
            })}
          </div>
        </div>
      </aside>
    </>
  )
}
