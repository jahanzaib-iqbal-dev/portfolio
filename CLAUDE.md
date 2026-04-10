# CLAUDE.md — Jahanzaib Iqbal Portfolio

> Read this file at the start of every session. It contains everything needed to work on this project without re-exploring the codebase.

---

## Project Identity

| Field | Value |
|-------|-------|
| **Owner** | Jahanzaib Iqbal — Co-founder, Global Software Consulting |
| **Live URL** | https://jahanzaibiqbal.com |
| **GitHub** | git@github.com:jahanzaib-iqbal-dev/portfolio.git (remote name: `me`) |
| **Vercel project** | `jahanzaib-iqbal-portfolio` · org `team_XYCG8Rn7HoNigSLx8UdjQ3EN` |
| **Vercel project ID** | `prj_a21OcOS1o8LO1Nu6cLYpVmqiykvR` |
| **Base template** | Once UI Magic Portfolio v2.3.0 |

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (Turbopack) — App Router |
| UI System | `@once-ui-system/core` |
| Animations | Framer Motion |
| Content | MDX (blog posts, work case studies) |
| Styling | SCSS modules + Once UI CSS variables |
| i18n | Custom React Context (client-side, 30 languages) |
| Deploy | Vercel (auto-alias to jahanzaibiqbal.com) |

---

## Key Commands

```bash
npm run dev          # Local dev server
npm run build        # Production build (run before pushing)
npx tsc --noEmit     # Type-check only
git push me main     # Push to GitHub (remote is named "me", not "origin")
vercel --prod        # Deploy to production on Vercel
```

> **Always run `npx tsc --noEmit` and `npm run build` before pushing.**

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Home (server component)
│   ├── about/page.tsx          # About (server component + client islands)
│   ├── work/page.tsx           # Work (server component)
│   ├── services/page.tsx       # Services (client component)
│   ├── team/
│   │   ├── page.tsx            # Team (server component shell)
│   │   └── TeamContent.tsx     # Team (client component with all content)
│   ├── contact/
│   │   ├── page.tsx            # Contact (server shell)
│   │   └── ContactContent.tsx  # Contact (client component)
│   └── blog/                   # Blog (MDX-powered)
├── components/
│   ├── Header.tsx              # Nav — desktop pill + mobile hamburger
│   ├── HomeContent.tsx         # Home hero + sections (client)
│   ├── ClientHeading.tsx       # Translatable heading for server components
│   ├── ScheduleCallButton.tsx  # Translatable schedule button (about page)
│   ├── ProjectCard.tsx         # Work project cards
│   ├── StatsCounter.tsx        # Animated stats (team + home)
│   ├── TechMarquee.tsx         # Scrolling tech logos
│   ├── LanguageToggle.tsx      # Language switcher dropdown
│   ├── Footer.tsx              # Site footer
│   └── LazyLoad.tsx            # Lazy iframe (Calendly embed)
├── i18n/
│   ├── LanguageContext.tsx     # React Context — useLanguage() hook
│   └── translations/
│       ├── en.ts               # MASTER — add new keys here first
│       ├── zh.ts, hi.ts, es.ts, fr.ts, ar.ts, bn.ts, pt.ts, ru.ts,
│       │   ja.ts, de.ts, ko.ts, tr.ts, vi.ts, it.ts, th.ts, pl.ts,
│       │   ms.ts, uk.ts, ro.ts, el.ts, cs.ts, sv.ts, hu.ts, fa.ts,
│       │   ta.ts, ur.ts, sw.ts, tl.ts, nl.ts, he.ts
│       └── index.ts            # Exports all translations
└── resources/
    ├── content.tsx             # All personal content (bio, experience, etc.)
    ├── once-ui.config.ts       # Theme, routes, display flags
    ├── icons.ts                # Custom icon registrations
    └── index.ts                # Re-exports all resources
```

---

## i18n System

### How it works
- **Client-side only** — translations load in the browser, not at build time
- Language priority: `?lang=` URL param → `localStorage` → default English
- Hook: `const { t } = useLanguage()` — use in any `"use client"` component
- 30 languages supported (see translation files above)

### Adding a new translation key
1. Add to `src/i18n/translations/en.ts` first
2. Add the translated value to **all 30** other language files in the same position
3. Use `t("your.key")` in components

### Server component pattern (pages with `generateMetadata`)
Server components cannot use `useLanguage()`. Use these client island components instead:
- `<ClientHeading translationKey="your.key" variant="..." />` — for headings
- `<ScheduleCallButton href="..." />` — for the calendar button on About page

### What is NOT translated (intentional)
- Project titles/descriptions (MDX frontmatter — English only)
- Bio text and work achievements in `content.tsx` (React nodes)
- Tech tag names: React, Node.js, AWS, Docker, etc.
- Brand names: Email, LinkedIn, GitHub
- Industry tags: HealthTech, FinTech, SaaS, etc.

---

## Mobile Patterns

### Navigation (Header.tsx)
- **Desktop** (> 768px): Horizontal pill nav with icon + label for all routes
- **Mobile** (≤ 768px): Compact pill with Home + Language toggle + Hamburger (☰)
- Hamburger opens a **bottom sheet** with all 7 routes as full-width rows
- Sheet has backdrop blur, slide-up animation, closes on link tap or backdrop tap

### Responsive grids
Use `repeat(auto-fit, minmax(min(100%, Npx), 1fr))` — do NOT rely on Once UI's `s={{ style: {} }}` prop for grid overrides (it doesn't reliably cascade grid properties).
- Services cards: `minmax(min(100%, 280px), 1fr)` → 1 col mobile, 2 col desktop
- Team capability cards: same
- Contact cards: `minmax(min(100%, 220px), 1fr)` → 1 col mobile, 3 col desktop

### Once UI breakpoints
| Prop | px threshold |
|------|-------------|
| `xs` | 480px |
| `s`  | 768px |
| `m`  | 1024px |
| `l`  | 1440px |

---

## Once UI Notes

### Available icons (not all obvious ones exist)
```
home, person, grid, book, email, calendar, check, close, refresh,
sparkle, search, arrowUpRight, chevronRight, chevronLeft, chevronUp,
chevronDown, plus, minus, eye, eyeOff, link, copy, warning, info,
danger, security, play, pause, globe, figma, github, linkedin,
rocket, document, worldmark, flag, gift, symbol, paw, food, ball
```
> `"menu"` does NOT exist — use an inline SVG for hamburger icons.
> `"people"` does NOT exist — use `"person"`.

### Responsive props
Once UI components accept `s`, `m`, `l`, `xs` props for responsive styles:
```tsx
<Row s={{ direction: "column", gap: "16" }}>
```
Works well for direction, gap, hide/show. Does **not** reliably work for overriding
CSS grid properties set via `style` prop — use CSS `auto-fit` instead.

---

## Content Files (edit these to update site content)

| File | What it controls |
|------|-----------------|
| `src/resources/content.tsx` | Bio, work experience, skills, projects, social links |
| `src/resources/once-ui.config.ts` | Routes on/off, theme, display flags (time, location, etc.) |
| `src/i18n/translations/en.ts` | All UI text strings (master translation file) |
| `content/work/*.mdx` | Work case study pages |
| `content/blog/*.mdx` | Blog post pages |
| `public/images/` | All images (avatar, project screenshots) |

---

## Personal Details (in content.tsx / resources)

| Field | Value |
|-------|-------|
| Name | Jahanzaib Iqbal |
| Role | Software Engineer · Co-founder |
| Company | Global Software Consulting |
| Location | Lahore, Pakistan |
| Email | jahanzaib@gsoftconsulting.com |
| Calendly | https://calendly.com/jahanzaib-gsoftconsulting/30min |
| LinkedIn | https://www.linkedin.com/in/jahanzaib-iqbal-49a42b164/ |
| GitHub | https://github.com/jahanzaib-iqbal-dev |

---

## Deployment Workflow

```bash
# 1. Make changes
# 2. Type check
npx tsc --noEmit

# 3. Build check
npm run build

# 4. Commit
git add .
git commit -m "feat/fix/chore: description"

# 5. Push to GitHub
git push me main

# 6. Deploy to Vercel
vercel --prod
```

Vercel auto-aliases to `jahanzaibiqbal.com` on every production deploy.

---

## Pages Overview

| Route | Type | Notes |
|-------|------|-------|
| `/` | Static | Home hero, projects, blog, stats, tech marquee |
| `/about` | Static | Avatar, bio, work experience, skills, tech logos |
| `/work` | Static | Project cards grid |
| `/work/[slug]` | SSG | Individual case study from MDX |
| `/blog` | Static | Blog post list |
| `/blog/[slug]` | SSG | Individual post from MDX |
| `/services` | Static | 6 service offering cards |
| `/team` | Static | Team stats, capability cards |
| `/contact` | Static | Calendly embed + contact links |
| `/gallery` | Static | Photo gallery |

---

## Things That Were Deliberately Left in English

- All MDX blog and work content
- `person.name` — proper noun
- `experience.company` names — proper nouns
- `experience.timeframe` — date ranges
- Tech skill tag names (React, AWS, Docker, etc.)
- "Email", "LinkedIn", "GitHub" — brand names
- Industry tags (HealthTech, SaaS, FinTech)
