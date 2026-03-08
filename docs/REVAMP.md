# WintermuteDev Website Revamp — Planning Document

## 1. Design Reference Analysis

### Raycast.com — What We're Borrowing

**Copy Style:**
- Short, declarative headlines. "Your shortcut to everything." "It's not about saving time. It's about feeling like you're never wasting it." No qualifiers, no hedging.
- Feature descriptions are one sentence max. If it needs two sentences, it's too complex.
- Section labels are terse: "AI", "Extensions", not "Our Powerful AI Features"
- Social proof is names + roles, not paragraphs of testimonials
- CTAs are direct: "Download", not "Start Your Free Trial Today"

**Layout Patterns:**
- Full-width hero with product visual (keyboard illustration = their signature element)
- Clean section breaks — generous whitespace between sections
- Feature sections alternate between full-width showcases and grid layouts
- Cards are simple: icon/visual + short text. No walls of bullets.
- Sticky/fixed header with minimal nav items

**Visual Approach:**
- Dark background, high contrast text
- Subtle gradients for depth, not decoration
- Product screenshots/demos are the visual centerpiece, not stock illustrations
- Minimal color palette — accent colors used sparingly for hierarchy

**What to adopt for WintermuteDev:**
- Headline formula: short verb phrase, no fluff, confident tone
- One-line feature descriptions
- Show-don't-tell sections (what we build > what we promise)
- Generous spacing, fewer words per section
- Let the pixel art visuals carry visual weight instead of text

### Anthropic / Claude Code — What We're Borrowing

**Aesthetic:**
- Developer-focused credibility. The Claude Code product page literally shows a terminal session — real work, not marketing theater.
- Clean typography hierarchy: big headline, concise sub, then proof
- Monospace/code aesthetic for technical credibility
- Minimal UI chrome — content is the interface

**Copy Style:**
- "Think fast, build faster" — active verbs, parallel structure
- Feature lists are capabilities, not benefits-speak: "Generate code and visualize data" not "Supercharge your development workflow"
- Pricing is straightforward tables, no gamification

**What to adopt for WintermuteDev:**
- Terminal/code aesthetic elements alongside the pixel art (they complement each other — both evoke "builder" energy)
- Capability-first copy: say what the system does, not what the client "feels"
- Show real output/artifacts where possible (cron schedules, Telegram screenshots, pipeline diagrams)
- The pixel art font (Press Start 2P) already gives us the "retro-technical" vibe that Claude Code's terminal aesthetic achieves differently — lean into it

---

## 2. Current Site Audit

### What Exists

| File | Purpose | Status |
|---|---|---|
| `app/page.tsx` | Homepage | Full rewrite needed |
| `app/services/page.tsx` | Services | Full rewrite needed |
| `app/pricing/page.tsx` | Pricing | Full rewrite needed |
| `app/agents/page.tsx` | Agent showcase | Rename to Work, full rewrite |
| `app/contact/page.tsx` | Contact form | Keep, minor copy updates |
| `app/blog/page.tsx` | Blog listing | Simplify to placeholder |
| `app/blog/[slug]/page.tsx` | Blog post template | Keep as-is (placeholder) |
| `app/layout.tsx` | Root layout + metadata | Metadata update |
| `components/Header.tsx` | Nav header | Update nav links |
| `components/Footer.tsx` | Footer | Update tagline |
| `components/PixelAgent.tsx` | SVG pixel art characters | Keep, use differently |
| `components/PixelIcons.tsx` | SVG pixel art icons | Keep, add new if needed |
| `components/PricingToggle.tsx` | Monthly/annual toggle pricing | Delete (replace with static) |
| `lib/blog-data.ts` | Blog post content | Keep for now |
| `styles/index.css` | Global styles + Tailwind layers | Keep, minor additions |
| `tailwind.config.js` | Tailwind config | Keep as-is |

### What's Good (Keep)
- **Visual system is strong.** The dark theme + neon cyan/magenta + pixel art is distinctive and memorable. Don't dilute it.
- **Glass card components** (`glass-card`, `glass-card-hover`, `team-card`) — well-built, good hover states
- **PixelAgent + PixelIcons** — unique brand asset, high craft quality
- **Tailwind config** is clean and well-organized with good custom colors/shadows
- **CSS utilities** (`.text-gradient-neon`, `.btn-primary`, `.section-label`, `.section-title`) are solid patterns
- **Mobile responsive** approach with sensible breakpoints
- **Contact form** is clean and functional

### What Needs to Change
- **Messaging is generic.** "Deploy an AI Agent Team for Your Business" could be any AI agency. Nothing signals real experience or specific capability.
- **Pain points section** is filler. "Researching competitors takes hours" — obvious, unconvincing.
- **Agent roster** (executive, researcher, developer, etc.) frames the offering as "hire our AI employees" which is both vague and competitive with everyone else.
- **Pricing model** (Starter/Growth/Enterprise with agent counts) doesn't match actual service delivery. The toggle adds complexity for no value.
- **"Three Steps to Your AI Workforce"** is generic agency-speak.
- **Blog** has minimal content and isn't adding value yet.
- **Services page** lists "Hosting" and "Handoff Package" as standalone services — these are delivery details, not offerings.

---

## 3. New Information Architecture

### Navigation
```
Logo    Services    Work    Pricing    Contact    [Talk to Us]
```
- Drop: Agents, Blog
- Add: Work (replaces Agents)
- Blog route stays alive but de-listed from nav

### Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | Homepage | Hook → What we do → Real examples → How it works → Pricing preview → CTA |
| `/services` | Services | Four clear offerings with scope, price, deliverables |
| `/work` | Work | Portfolio of real (anonymized) projects |
| `/pricing` | Pricing | Simple rate card + FAQ |
| `/contact` | Contact | Form + email (mostly unchanged) |
| `/blog` | Blog | Placeholder — "Coming soon" or minimal |

### File Changes Required

| Action | File |
|---|---|
| Rewrite | `app/page.tsx` |
| Rewrite | `app/services/page.tsx` |
| Rewrite | `app/pricing/page.tsx` |
| Create | `app/work/page.tsx` (new) |
| Simplify | `app/blog/page.tsx` |
| Update | `app/agents/page.tsx` → redirect to `/work` |
| Update | `app/layout.tsx` (metadata only) |
| Update | `components/Header.tsx` (nav links) |
| Update | `components/Footer.tsx` (tagline) |
| Delete content of | `components/PricingToggle.tsx` (or remove import) |
| No change | `components/PixelAgent.tsx` |
| No change | `components/PixelIcons.tsx` |
| No change | `styles/index.css` |
| No change | `tailwind.config.js` |
| No change | `app/contact/page.tsx` (minor copy tweak optional) |

---

## 4. Copy Direction — Page by Page

### Homepage (`app/page.tsx`)

**Hero**
- Headline: `Automate the work you shouldn't be doing.`
- Sub: `We build AI-powered automation systems — data pipelines, scheduled agents, workflow integrations — so you can focus on your actual business.`
- CTA primary: `Talk to Us`
- CTA secondary: `See Our Work`
- Visual: Keep the PixelAgentAtDesk grid but reduce to 3-4 agents to feel less crowded

**What We Build (replaces "The Problem")**
- Section label: `What We Build`
- Title: `Real systems. Running in production.`
- Grid of 5 capability cards (icon + one-liner):
  1. `Scheduled Agents` — Cron jobs that think. Daily reports, outreach, monitoring — running autonomously.
  2. `Data Pipelines` — Ingest, normalize, enrich. Legacy exports into modern schemas.
  3. `Control Planes` — Telegram and Slack bots as operator interfaces for your automation.
  4. `Multi-Agent Systems` — Specialized agents coordinating across content, intel, operations.
  5. `MCP Integrations` — Connect Notion, Google Workspace, APIs, databases. Tool use, not toy demos.

**Real Examples (replaces "Your AI Team")**
- Section label: `In Production`
- Title: `Not demos. Deployed systems.`
- 3 featured project cards (abbreviated from Work page):
  - Federal BD Outreach Engine
  - Multi-Agent Content & Intel System
  - Trading Operations Automation
- Each: one-line description + 3-4 tech stack pills
- Link: `See all projects →` → `/work`

**How It Works (replaces "Three Steps")**
- Section label: `Process`
- Title: `Discovery → Build → Deploy → Iterate`
- 4-step horizontal layout:
  1. **Discovery** — We learn your workflows, data sources, and pain points.
  2. **Build** — Custom automation, tested against real data.
  3. **Deploy** — OpenClaw instance, cron schedules, control plane, docs.
  4. **Iterate** — Monitor, tune, expand. Your system gets better over time.

**Pricing Preview**
- Section label: `Pricing`
- Title: `Transparent rates. No tiers.`
- Three simple cards (no toggle):
  - `Setup` — $1,000 flat — OpenClaw instance, Telegram bot, basic agent, handoff docs
  - `Custom Builds` — $150/hr or fixed-fee — Data pipelines, scheduled agents, integrations
  - `Retainer` — $500–1,500/mo — Monitoring, tuning, new agents, priority support
- Link: `Full pricing details →` → `/pricing`

**CTA Banner**
- Title: `Ready to automate?`
- Sub: `Let's talk about what your business actually needs.`
- Button: `Talk to Us`

---

### Services (`app/services/page.tsx`)

**Header**
- Label: `Services`
- Title: `What We Build`
- Sub: `Four ways to work with us. All scoped, all delivered.`

**Four Service Cards** (2×2 grid, glass-card style):

1. **OpenClaw Setup** — `$1,000 flat`
   - Icon: PixelSetupIcon (cyan)
   - Timeline: 1–2 days
   - Bullets:
     - Install and configure OpenClaw on your hardware or VPS
     - Pair Telegram bot as control plane
     - Deploy first agent with cron schedule
     - Handoff docs and operator walkthrough
   - Outcome: *You walk away with a running system.*

2. **Custom Automation Build** — `From $1,500 / project-based`
   - Icon: PixelDeployIcon (magenta)
   - Timeline: 1–3 weeks
   - Bullets:
     - Data pipelines (ingest, normalize, enrich)
     - Scheduled agents for reports, outreach, monitoring
     - API integrations (Notion, Google, custom)
     - MCP tool development
   - Outcome: *Purpose-built automation, tested and deployed.*

3. **Multi-Agent Deployment** — `From $2,500`
   - Icon: PixelBrainIcon (purple)
   - Timeline: 2–4 weeks
   - Bullets:
     - Multiple specialized agents with defined roles
     - Cron schedules and orchestration
     - Voice/personality calibration
     - Notion, Telegram, Slack integration
   - Outcome: *A coordinated system, not a collection of chatbots.*

4. **Ongoing Management** — `$500–1,500/mo`
   - Icon: PixelManageIcon (purple)
   - Timeline: Monthly retainer
   - Bullets:
     - System monitoring and uptime
     - Agent tuning and prompt optimization
     - New agent development
     - Priority support and incident response
   - Outcome: *We keep it running. You keep building.*

**CTA**
- Title: `Know what you need?`
- Sub: `Reach out. We'll scope it in 30 minutes.`
- Button: `Get in Touch`

---

### Work (`app/work/page.tsx`) — NEW

**Header**
- Label: `Work`
- Title: `Systems in Production`
- Sub: `Real projects. Anonymized where needed. All running.`

**Project Cards** (single column, full-width, glass-card):

Each project card has:
- Title (h3, bold)
- 1-2 sentence description
- Tech stack pills (small rounded badges: cyan bg for tools, magenta for platform)
- Outcome line (italic or muted, one sentence)

1. **Federal BD Outreach Engine**
   - Automated daily outreach generation from USASpending contract data. TypeScript preprocessing pipeline feeds AI email generation with personalized hooks. Output queued to Google Docs for human review. Telegram bot for operator control.
   - Stack: `OpenClaw` `TypeScript` `USASpending API` `Google Docs API` `Telegram` `Cron`
   - Outcome: *60+ personalized outreach drafts per day, zero manual research.*

2. **Multi-Agent Content & Intel System**
   - Five-agent deployment for a fintech firm. Content creation, competitive intelligence, PR outreach, executive briefings, and social distribution. 22 scheduled cron jobs across the system.
   - Stack: `OpenClaw` `Multi-Agent` `Notion` `Telegram` `Cron (22 jobs)` `MCP`
   - Outcome: *Full content + intel operation running autonomously across 5 platforms.*

3. **Trading Operations Automation**
   - OpenClaw deployed on Mac Studio for a trading desk. Automated database checks, trade validation, Bloomberg data bridge. Daily reports generated before market open.
   - Stack: `OpenClaw` `Mac Studio` `PostgreSQL` `Bloomberg API` `Cron` `Telegram`
   - Outcome: *Pre-market operations report delivered by 6am, every day.*

4. **Property Management Data Pipeline**
   - Multi-platform import system handling exports from AppFolio, Vantaca, and Buildium. Normalizes inconsistent legacy data into a unified modern schema for an AI-native property management platform.
   - Stack: `TypeScript` `Data Pipeline` `AppFolio` `Vantaca` `Buildium` `Schema Normalization`
   - Outcome: *Three legacy platforms, one clean data model.*

5. **Secure VPS Deployment**
   - Hardened OpenClaw instance on cloud VPS. SSH lockdown, fail2ban, UFW firewall, systemd service management. Full operator documentation for non-technical client.
   - Stack: `OpenClaw` `Ubuntu VPS` `systemd` `SSH Hardening` `Tailscale` `Documentation`
   - Outcome: *Production-grade deployment with full handoff to non-technical operator.*

**CTA**
- Title: `Have a system in mind?`
- Sub: `We'll tell you if we can build it — and what it'll take.`
- Button: `Talk to Us`

---

### Pricing (`app/pricing/page.tsx`)

**Header**
- Label: `Pricing`
- Title: `Simple Rates`
- Sub: `No tiers. No per-agent pricing. You pay for what we build.`

**Rate Cards** (3-column grid, static, no toggle):

1. **Setup** — `$1,000`
   - One-time flat fee
   - OpenClaw instance configured and deployed
   - Telegram bot paired as control plane
   - First agent deployed with cron schedule
   - Handoff documentation
   - 1–2 day delivery

2. **Custom Builds** — `$150/hr`
   - Or fixed-fee for scoped projects
   - Data pipelines, integrations, scheduled agents
   - MCP tool development
   - Multi-agent orchestration from $2,500
   - Scoped and estimated upfront

3. **Retainer** — `$500–1,500/mo`
   - Ongoing monitoring and uptime
   - Agent tuning and optimization
   - New agent development
   - Priority support
   - Scaled to system complexity

**FAQ** (updated):

1. **What's OpenClaw?**
   → OpenClaw is an AI agent orchestration platform. It runs on your hardware (Mac, Linux, VPS) and manages AI agents with cron scheduling, Telegram integration, and MCP tool use. We deploy and configure it for you.

2. **Do I need my own hardware?**
   → Not necessarily. We can deploy to a cloud VPS ($10–50/mo hosting cost) or your existing Mac/Linux machine. We'll recommend the right setup during discovery.

3. **What about API costs?**
   → You provide your own API keys (Anthropic, OpenAI, etc.). Typical costs are $50–300/mo depending on usage. We optimize prompts and scheduling to keep costs low.

4. **Can I manage the system myself after setup?**
   → Yes. Every deployment includes handoff docs and a walkthrough. The Telegram bot gives you day-to-day control. We're available for retainer support if you want ongoing help.

5. **How long does a custom build take?**
   → Simple automations: 1–2 weeks. Multi-agent systems: 2–4 weeks. We scope everything upfront so there are no surprises.

6. **Is my data secure?**
   → Your agents run on your infrastructure. Nothing passes through our servers. VPS deployments include SSH hardening, firewall config, and encrypted connections via Tailscale.

**CTA**
- Title: `Not sure what you need?`
- Sub: `Book a discovery call. 30 minutes. No pitch.`
- Button: `Book a Call`

---

### Layout (`app/layout.tsx`)

**Metadata changes only:**
- Title: `WintermuteDev — AI Automation & Workflow Engineering`
- Template: `%s | WintermuteDev` (keep)
- Description: `We build AI-powered automation systems, deploy OpenClaw agents, and engineer custom workflows for businesses ready to operate differently.`
- OG title/description: match above

---

### Header (`components/Header.tsx`)

**Nav links:**
```ts
const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];
```

---

### Footer (`components/Footer.tsx`)

**Updated tagline:**
```
WintermuteDev
wintermutedev.com — AI automation systems, built and deployed.
```

---

### Blog (`app/blog/page.tsx`)

Simplify to a placeholder. Keep the route alive:
- Title: `Blog`
- Body: `Writing about AI automation, agent orchestration, and building systems that work. Coming soon.`
- No post grid, no blog-data import.

### Agents page (`app/agents/page.tsx`)

Redirect to `/work` using Next.js `redirect()` — clean, preserves any inbound links.

---

## 5. Visual / Component Plan

### Keep As-Is
- `PixelAgent.tsx` — all agent types, used in homepage hero and potentially Work page
- `PixelIcons.tsx` — all icons, used across Services and homepage
- `styles/index.css` — all existing classes
- `tailwind.config.js` — all config

### Modify
- **Homepage hero**: Reduce PixelAgentAtDesk grid from 6 to 3–4 agents. Consider a single large "agent at terminal" composition instead of grid.
- **Cards**: Reuse `glass-card` and `glass-card-hover` for all new content. Add a new `project-card` variant for Work page (wider, horizontal layout).

### Add
- **Tech stack pills**: Small inline badges for project tech stacks on Work page. Style: `text-xs px-2 py-0.5 rounded bg-cyan/10 text-cyan border border-cyan/20` (and magenta variant).
- **Step indicator**: Horizontal 4-step component for "How It Works" with connecting lines between steps.
- **Outcome line**: Italic or muted-cyan text style for project outcomes.

### Remove
- `PricingToggle.tsx` — Replace with static pricing cards directly in `app/pricing/page.tsx`
- Monthly/annual toggle logic entirely

### Potential CSS Additions (to `styles/index.css`)
```css
/* Tech stack pill */
.tech-pill {
  @apply text-xs px-2 py-0.5 rounded font-medium;
  background: rgba(0, 240, 255, 0.08);
  color: #00f0ff;
  border: 1px solid rgba(0, 240, 255, 0.15);
}

.tech-pill-alt {
  @apply text-xs px-2 py-0.5 rounded font-medium;
  background: rgba(255, 0, 170, 0.08);
  color: #ff00aa;
  border: 1px solid rgba(255, 0, 170, 0.15);
}

/* Project card - wider variant */
.project-card {
  @apply glass-card p-8 transition-all duration-300;
}

.project-card:hover {
  border-color: rgba(0, 240, 255, 0.25);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.15);
}
```

---

## 6. Content Strategy

### Voice & Tone
- **Confident, not cocky.** "We build X" not "We're the #1 X"
- **Specific, not vague.** "22 scheduled cron jobs" not "powerful automation"
- **Builder energy.** We sound like engineers who happen to offer a service, not marketers who happen to know about AI
- **Raycast-style brevity.** If a sentence doesn't add information, cut it.

### Real Project Examples (Anonymized)
All five projects from the Work page are drawn from actual client work:
1. Federal BD → government contracting outreach automation
2. Content & Intel → fintech content operations
3. Trading Ops → financial trading desk automation
4. Property Management → PropTech data normalization (Nova-adjacent)
5. VPS Deployment → infrastructure hardening engagement

No client names. No company names. Stack and outcomes only.

### Keywords / Positioning
- "AI automation" (not "AI agents" as primary)
- "OpenClaw" (brand the platform)
- "workflow engineering" (signals craft, not commodity)
- "data pipelines" (concrete, searchable)
- "MCP integrations" (technical audience signal)
- "scheduled agents" / "cron jobs" (specificity = credibility)

---

## 7. Technical Approach

### Files to Create
- `app/work/page.tsx` — new Work page

### Files to Rewrite (full content replacement)
- `app/page.tsx` — homepage
- `app/services/page.tsx` — services
- `app/pricing/page.tsx` — pricing

### Files to Update (surgical edits)
- `app/layout.tsx` — metadata strings only
- `components/Header.tsx` — navLinks array only
- `components/Footer.tsx` — tagline text only
- `app/blog/page.tsx` — simplify to placeholder
- `app/agents/page.tsx` — redirect to /work

### Files to Potentially Add CSS To
- `styles/index.css` — `.tech-pill`, `.tech-pill-alt`, `.project-card` if needed

### Files NOT Touched
- `tailwind.config.js`
- `components/PixelAgent.tsx`
- `components/PixelIcons.tsx`
- `lib/blog-data.ts`
- `app/blog/[slug]/page.tsx`
- `app/contact/page.tsx`
- `package.json`
- Any config files

### Files to Delete (or empty)
- `components/PricingToggle.tsx` — remove content, keep file empty with a comment, or delete and remove imports

### Build Verification
After all changes, run `npm run build` to verify no TypeScript errors or broken imports.

---

## 8. Visual Direction Update — Kill the Pixel Workers

### What's Changing
The PixelAgent character sprites (executive, researcher, developer, content-creator, etc.) are being removed from the site entirely. They don't look good and frame the offering as "digital employees" which is the exact messaging we're moving away from.

### What Replaces Them
- **Pixel text logo** — Large "WintermuteDev" or "W" mark in Press Start 2P font, potentially with a subtle terminal/cursor animation. Think Claude Code's terminal aesthetic but in pixel font.
- **Text-driven hero** — Let the headline carry the visual weight. Big, bold type. No character illustrations.
- **Code/terminal elements** — Show real-looking output snippets, cron schedules, pipeline diagrams in monospace. This signals "we build real systems" better than cartoon workers.
- **PixelIcons stay** — The abstract icons (search, doc, brain, task, etc.) are fine for capability cards. They're geometric, not character-based.

### Component Impact
- `components/PixelAgent.tsx` — Remove all imports and usage. Can delete or keep for future use.
- Homepage hero: Remove the 6-agent grid entirely. Replace with either:
  - (a) Large pixel-font text treatment + terminal-style code block showing a real cron output
  - (b) Minimal hero with just headline + sub + CTAs (Raycast style — copy-forward, no illustration)
- Services/Work: Use PixelIcons for visual accents, not PixelAgents
- Consider a simple ASCII/pixel art terminal prompt as the brand mark: `> _` or `W>_`

### New Hero Visual Options
1. **Terminal block** — Dark card with monospace text showing:
   ```
   $ openclaw cron list
   ✓ daily-outreach     6:00 AM ET    running
   ✓ market-report      5:30 AM PT    running  
   ✓ intel-scan         8:00 AM MT    running
   $ _
   ```
   This immediately communicates "real systems running in production."

2. **Animated typing** — Press Start 2P heading that types out character by character (CSS animation, already have `blink` keyframe).

3. **Clean text-only** — Just massive typography. Let the words do the work. Raycast's hero is essentially just text + a keyboard illustration. Ours can be just text.

### Recommendation
Option 1 (terminal block) + Option 3 (clean text). Big headline on the left, terminal output on the right showing real system activity. This replaces the pixel worker grid with something that actually demonstrates capability.
