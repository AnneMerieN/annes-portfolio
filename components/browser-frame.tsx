import type { ReactNode } from "react"

export default function BrowserFrame({ children, url = "app.vercel.app" }: { children: ReactNode; url?: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-zinc-700 bg-[#1A1A1A]">
      {/* Browser chrome */}
      <div className="bg-zinc-900 px-4 py-2.5 flex items-center gap-3 border-b border-zinc-800">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
        </div>
        <div className="flex-1 bg-zinc-800 rounded-md px-3 py-1 text-[11px] text-zinc-500 truncate" />
      </div>
      {/* Content */}
      {children}
    </div>
  )
}
