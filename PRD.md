# PRD: WintermuteDev Website Revamp

**Author:** Lancelot (AI) for Dalton Wais  
**Date:** 2026-02-15  
**Status:** Draft  
**Implementing Agent:** TBD

---

## 1. Overview

Retool wintermutedev.com from a generic Next.js startup template into the marketing site for **WintermuteDev** — a company that deploys and manages AI digital workers (multi-agent OpenClaw systems) for small SaaS startups and cognitively overloaded teams.

**One-liner:** "We build your AI workforce so you can focus on what matters."

---

## 2. Business Context

- **Company:** WintermuteDev
- **Domain:** wintermutedev.com
- **Offering:** Setup, deployment, and optional ongoing management of multi-agent AI systems
- **Target Customer:** Small SaaS startups (seed → Series A), lean teams drowning in cognitive load
- **Pricing:**
  - $1,000 one-time setup fee
  - Monthly retainer (tiered by agent count / complexity)
  - Optional hosting + management add-on
  - Handoff-only option available
- **Contact:** me@daltonwais.com

---

## 3. Design Direction

### Theme: Pixel Office Workers — Neon 80s

**Vibe:** A pixel-art office where AI agents work at desks, type on terminals, and collaborate — rendered in neon colors against dark backgrounds. Think retro-futurism meets corporate productivity. Synthwave-adjacent but professional enough to convert B2B buyers.

**Visual Guidelines:**

| Element | Direction |
|---------|-----------|
| **Background** | Dark (near-black, #0a0a0f or similar). The "office" lives in darkness, lit by neon. |
| **Primary neon** | Cyan (#00f0ff) and magenta (#ff00aa) as accent colors |
| **Secondary** | Electric purple (#9b59ff), neon green (#39ff14) for highlights |
| **Typography** | Clean sans-serif for body (Inter or similar). Pixel/monospace font for headings or accents (Press Start 2P, VT323, or similar — used sparingly). |
| **Pixel art** | 16-32px style pixel characters representing each agent type. Each agent gets a unique character sitting at a desk/workstation. Isometric office layout for hero section. |
| **Animations** | Subtle: blinking cursors, typing animations, neon glow pulses. Pixel characters with idle animations (2-3 frame loops). Nothing overwhelming. |
| **Cards/containers** | Dark glass-morphism with neon border accents. Slight glow on hover. |
| **CRT/scanline effect** | Optional very subtle scanline overlay on hero area only. Should not affect readability. |

**What to avoid:**
- Overwhelming neon (keep it accent, not everything)
- Unreadable text (contrast is king)
- Cheesy "hacker" aesthetic
- Excessive animation that slows performance

**Reference vibes:**
- VA-11 Hall-A (pixel art + neon bar aesthetic)
- Poolsuite.net (retro + professional)
- Linear.app (dark + clean + accent colors)

---

## 4. Site Architecture

### Pages

```
/                   Home (landing page)
/services           Service offerings detail
/agents             Meet the digital workers
/pricing            Pricing tiers
/blog               Blog index
/blog/[slug]        Blog post
/contact            Contact form
```

### Navigation

```
Logo | Services | Agents | Pricing | Blog | Contact | [Get Started →]
```

"Get Started" is the primary CTA throughout — links to /contact or a Calendly embed.

---

## 5. Page Specifications

### 5.1 Home (`/`)

**Hero Section**
- Isometric pixel art office scene with 4-6 agent characters at workstations
- Headline: "Your AI Workforce, Deployed in Days"
- Subheadline: "WintermuteDev builds and manages teams of AI agents that handle research, content, development, and operations — so your team can focus on building."
- Primary CTA: "Get Started" → /contact
- Secondary CTA: "See Our Agents" → /agents
- Subtle idle animations on pixel characters

**Problem Section**
- "Your team is drowning in busywork"
- 3-4 pain points with pixel art icons:
  - Researching competitors takes hours
  - Content creation is a bottleneck
  - Context switching kills deep work
  - Operational tasks pile up
- Short, punchy copy. Dark cards with neon accents.

**Solution Section**
- "Meet your new digital team"
- Grid of 4 featured agents (Executive, Researcher, Content Creator, Developer) as pixel character cards
- Each card: pixel avatar, name, one-line role description
- "See all agents →" link to /agents

**How It Works**
- 3-step horizontal flow:
  1. **Discovery** — "We learn your business, workflows, and pain points"
  2. **Deployment** — "We configure and deploy your AI agent team"
  3. **Management** — "We keep your agents running, learning, and improving"
- Pixel art icons for each step
- Neon connecting lines between steps

**Pricing Preview**
- 3 tiers (compact cards, detail on /pricing)
- CTA to /pricing for full breakdown

**Testimonials / Social Proof**
- Placeholder section for future testimonials
- Could show "Trusted by X teams" or similar
- If no testimonials yet, skip this section initially

**Blog Preview**
- 3 latest posts
- "Read more →" to /blog

**CTA Banner**
- Full-width dark section with neon border
- "Ready to build your AI workforce?"
- "Get Started" button

---

### 5.2 Services (`/services`)

**Sections:**

**Setup & Deployment ($1,000)**
- What's included: discovery call, agent architecture design, workspace configuration, Telegram bot creation, Notion workflow setup, deployment to client infrastructure or WintermuteDev hosting
- Timeline: 3-5 business days
- Pixel art: character building/assembling something

**Managed Services (Monthly Retainer)**
- Ongoing agent monitoring and tuning
- Memory and context optimization
- New agent additions
- Workflow adjustments
- Priority support
- Pixel art: character at a monitoring dashboard

**Hosting (Add-on)**
- Dedicated Mac Mini infrastructure
- Tailscale secure networking
- Automated backups
- 99.9% uptime target
- Pixel art: server rack with blinking lights

**Handoff Package**
- Full documentation
- Training session
- Source config and workspace files
- 30-day support window
- Pixel art: character handing off a folder

---

### 5.3 Agents (`/agents`)

The star page. Each agent type gets a showcase.

**Layout:** Grid or staggered cards, each featuring:
- Large pixel character (64px+ rendered, could be SVG or PNG)
- Agent name
- Role title
- 3-4 bullet points of what they do
- Neon accent color unique to each agent

**Agent Roster:**

| Agent | Color Accent | Description |
|-------|-------------|-------------|
| Executive | Cyan | Orchestrates the team. Routes tasks, makes decisions, keeps everything moving. |
| Researcher | Purple | Deep market analysis, competitive intel, trend monitoring. Cites sources. |
| Developer | Orange | Code generation, technical implementation, debugging, architecture. |
| Content Creator | Green | Blog posts, articles, email sequences, whitepapers. Versatile writer. |
| Brand Manager | Magenta | Brand governance, voice consistency, content review. The quality gate. |
| Social Media Manager | Yellow | Platform strategy, content adaptation, scheduling, engagement. |
| Project Manager | Teal | PRDs, roadmaps, sprint planning, stakeholder updates. |
| QA Engineer | Red | Testing, validation, quality gates, edge case identification. |

**Bottom CTA:** "Which agents does your team need? Let's find out." → /contact

---

### 5.4 Pricing (`/pricing`)

**Three tiers:**

| | Starter | Growth | Enterprise |
|---|---------|--------|------------|
| **Setup** | $1,000 | $1,000 | Custom |
| **Monthly** | $500/mo | $1,500/mo | Custom |
| **Agents** | Up to 3 | Up to 6 | Unlimited |
| **Hosting** | Self-hosted | Included | Dedicated |
| **Management** | Email support | Active management | Dedicated account manager |
| **Notion board** | ✓ | ✓ | ✓ |
| **Custom workflows** | — | ✓ | ✓ |
| **Priority support** | — | ✓ | ✓ |

*Note: These are suggested tiers. Dalton should adjust actual pricing.*

**Monthly/Annual toggle** (annual = 2 months free)

**FAQ accordion below pricing:**
- What AI models do the agents use?
- Can I add more agents later?
- Do I need my own API keys?
- What happens if I want to self-manage?
- How do agents communicate with my team?
- Is my data secure?

---

### 5.5 Blog (`/blog`)

- Grid of post cards (title, excerpt, date, category tag)
- Categories: AI Agents, Productivity, Case Studies, Technical
- Individual post pages with clean typography
- Share buttons, related posts
- Markdown/MDX-based content

---

### 5.6 Contact (`/contact`)

- Contact form: Name, Email, Company, Team Size (dropdown), Message
- Or: Calendly embed for booking a discovery call
- Direct email fallback: me@daltonwais.com
- Pixel art: character at a reception desk

---

## 6. Technical Specification

### Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS 3.x |
| Pixel fonts | Press Start 2P (Google Fonts) for accents, Inter for body |
| Animations | CSS animations + Framer Motion (light usage) |
| Blog | MDX or Contentlayer |
| Deployment | Vercel |
| Analytics | Vercel Analytics or Plausible |
| Forms | Formspree, Resend, or Next.js API route → email |

### Upgrade Notes

The current site runs Next.js 13.1.6 with the old `@next/font` package. Upgrade to:
- Next.js 14+ (latest stable)
- `next/font` (built-in, replaces `@next/font`)
- Tailwind CSS latest
- Remove: `react-modal-video` (not needed)
- Remove: all placeholder content from the startup template

### Pixel Art Assets

Options (in order of preference):
1. **AI-generated pixel art** — use an image generation tool to create consistent character sprites
2. **Aseprite / Piskel** — manual pixel art creation
3. **Pre-made asset packs** — itch.io has office/character pixel art packs
4. **SVG pixel art** — hand-coded SVG that looks pixelated but scales perfectly

Each agent character should be delivered as:
- PNG sprite (64x64 base, exported at 2x/4x)
- Optional: 2-3 frame idle animation spritesheet

### Performance Targets

- Lighthouse score: 90+ across all categories
- First Contentful Paint: < 1.5s
- No layout shift from pixel art loading
- Lazy load below-fold images

### Responsive

- Desktop: full pixel office scene in hero
- Tablet: simplified scene, stacked layout
- Mobile: single character + headline, fully stacked

---

## 7. Content Requirements

### Copy Needed

| Section | Status |
|---------|--------|
| Hero headline + subheadline | Provided in PRD |
| Problem section (pain points) | Needs final copy |
| Solution section | Brief descriptions per agent |
| How it works (3 steps) | Provided in PRD |
| Services page (4 offerings) | Outlined in PRD, needs polish |
| Agent descriptions (8 agents) | Can pull from ClawGod templates |
| Pricing tiers | Suggested, needs Dalton approval |
| FAQ answers | Needs writing |
| Blog posts (initial 2-3) | Needs writing |
| Meta descriptions / SEO | Needs writing |

### Pixel Art Assets Needed

| Asset | Count | Notes |
|-------|-------|-------|
| Agent characters | 8 | Unique per role, consistent style |
| Hero office scene | 1 | Isometric, 4-6 agents at desks |
| Step icons | 3 | Discovery, Deployment, Management |
| Service icons | 4 | Setup, Managed, Hosting, Handoff |
| Pain point icons | 4 | Research, Content, Context switching, Operations |
| Blog category icons | 4 | Optional |
| Favicon | 1 | Pixel art "W" or agent character |

---

## 8. SEO & Meta

- **Title format:** "WintermuteDev — [Page] | AI Digital Workers for Startups"
- **Description:** "We deploy and manage teams of AI agents that handle research, content, development, and operations for small SaaS startups."
- **OG image:** Hero pixel office scene
- **Structured data:** Organization, Service, FAQ schemas

---

## 9. Milestones

| # | Milestone | Scope |
|---|-----------|-------|
| 1 | **Foundation** | Upgrade Next.js, new Tailwind config with neon theme, dark mode only, pixel font setup, layout/nav/footer |
| 2 | **Home page** | Hero (without pixel art initially), Problem, Solution, How It Works, CTA sections |
| 3 | **Inner pages** | Services, Agents, Pricing, Contact pages |
| 4 | **Blog** | MDX setup, blog index, post template, 2-3 seed posts |
| 5 | **Pixel art** | Generate/source all pixel art assets, integrate into pages, add animations |
| 6 | **Polish** | Responsive pass, performance optimization, SEO, analytics, final copy |

---

## 10. Out of Scope (for now)

- Client portal / dashboard
- Agent demo / live chat
- Payment processing / self-service signup
- Case studies (until we have them)
- Multi-language support

---

## 11. Open Questions for Dalton

- [ ] Confirm pricing tiers and actual dollar amounts
- [ ] Calendly link for discovery calls?
- [ ] Any existing logo or do we need to create one?
- [ ] Starting fresh on brand assets (colors confirmed as neon on dark)?
- [ ] Any specific blog post topics for launch?
- [ ] Domain: keeping wintermutedev.com or considering alternatives?
