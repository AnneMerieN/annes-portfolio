# Portfolio Project

## Owner
Anne Merie Nguyen — Product Designer + Developer

## Stack
- **Framework**: Next.js 16.2.1 (Turbopack)
- **Styling**: Tailwind CSS 3.4 + tailwindcss-animate
- **UI**: Radix UI primitives, shadcn/ui components, Lucide icons
- **Fonts**: Space Grotesk (display, via `--font-machina`), Inter (body, via `--font-helvetica`), Arimo (fallback, via `--font-arimo`)
- **Deployment**: Vercel (`npx vercel --prod`)
- **Package manager**: pnpm

## Design System
- **Accent color**: Lime green `#C6FE21`
- **Dark theme**: Always dark (`<html class="dark">`)
- **Card style**: Transparent backgrounds (`bg-white/[0.01]`) with subtle borders (`border-zinc-700`), hover brightens border (`hover:border-zinc-500`). No solid bg cards.
- **Border radius**: `rounded-card` = 28px for project cards
- **Sidebar**: Fixed left, 260px wide (`md:pl-[260px]`)

## Key Files
- `app/page.tsx` — Homepage with BentoHero + project cards
- `components/bento-hero.tsx` — Client component, 8-tile bento grid (name with "_" prefix, role, bunny icon, live clock, tagline, status, skills, focus areas)
- `components/floating-particles.tsx` — Background particle animation
- `components/fade-in.tsx` — Staggered fade-in animation wrapper
- `components/sidebar.tsx` — Navigation sidebar
- `app/layout.tsx` — Root layout, loads fonts, sidebar
- `tailwind.config.ts` — Custom accent, fonts, animations

## Case Studies
- `app/projects/ai-pitch-coach/page.tsx` — Has 6 visual infographics (feedback gap bars, research stats, horizontal arrow flow scoping diagram, solution flow, tradeoff cards, progress rings)
- `app/projects/tft-switch/page.tsx`
- `app/projects/sealbites-app/page.tsx`
- `app/projects/ux-redesign/page.tsx`
- `app/projects/[slug]/page.tsx` — Dynamic route fallback

## Dev Notes
- Port 3000 often stuck — use `npx kill-port 3000` before starting dev server
- `@/` alias can be flaky for new files in Next.js 16 — use relative imports as fallback
- Hero section is edge-to-edge (minimal padding), project cards below have their own max-width container
