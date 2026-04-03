import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Real projects running in production. AI systems, application builds, data pipelines, and multi-agent deployments.",
};

const projects = [
  {
    title: "Tax Planning Platform Security + Architecture Overhaul",
    desc: "$11K audit and restructure of an AI-built tax planning engine. 5,385-line monolith decomposed into typed modular architecture. 336 tests written, CI/CD pipeline configured, security vulnerabilities patched. Full TypeScript conversion with strict mode.",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Jest", "CI/CD", "Security Audit"],
    outcome: "From untested monolith to production-grade, type-safe architecture with 336 passing tests.",
  },
  {
    title: "AI Practice Growth Platform",
    desc: "Embedded AI services for a wealth management TAMP serving 235+ financial advisors. Automated website generation, content pipeline for advisor marketing, and outreach automation. AI-powered personalization at scale.",
    stack: ["TypeScript", "React", "AI/ML", "Content Pipeline", "Supabase", "Automation"],
    outcome: "235+ advisors served with AI-generated websites, content, and outreach.",
  },
  {
    title: "Multi-Agent Content & Intel System",
    desc: "Five-agent deployment for a fintech firm. Content creation, competitive intelligence, PR outreach, executive briefings, and social distribution. 22 scheduled cron jobs. Post-deployment audit uncovered model name misconfigs, cron deduplication issues, and auth mixups — all resolved.",
    stack: ["Multi-Agent", "AI Orchestration", "Notion", "Telegram", "Cron (22 jobs)", "MCP"],
    outcome: "Full content + intel operation running autonomously across 5 platforms.",
  },
  {
    title: "Fleet Management Control Plane",
    desc: "Hatchery API — a control plane for provisioning, monitoring, and managing AI agent instances across multiple client deployments. Telegram pairing for operator control. Health checks, instance lifecycle management, and deployment automation.",
    stack: ["Hatchery API", "TypeScript", "Multi-Agent", "Telegram", "Fleet Management", "Monitoring"],
    outcome: "Centralized control over distributed AI agent fleet.",
  },
  {
    title: "Newsletter Automation Pipeline",
    desc: "Automated reporting across 6 newsletter brands sending 6M emails/day. Multi-platform data aggregation from ESP, revenue, and IVT detection systems. Unified dashboard for cross-brand performance analysis.",
    stack: ["Data Pipeline", "API Integrations", "Analytics", "Reporting", "Automation"],
    outcome: "Six brands, one automated reporting pipeline. Zero manual data pulls.",
  },
  {
    title: "Property Management Data Pipeline",
    desc: "Multi-platform import system handling exports from AppFolio, Vantaca, and Buildium. Normalizes inconsistent legacy data into a unified modern schema. Admin tooling for error review, CSV export for corrections, and white-glove onboarding flow for new properties.",
    stack: ["TypeScript", "Data Pipeline", "AppFolio", "Vantaca", "Buildium", "Admin Tooling"],
    outcome: "Three legacy platforms, one clean data model. Error handling built for non-technical operators.",
  },
  {
    title: "Curative Title Intelligence",
    desc: "Real estate acquisition opportunity identification from tax delinquency data across NY counties. AI-powered obituary verification, heir mapping, and deal scoring. Automated pipeline from public records to prioritized acquisition targets.",
    stack: ["AI/ML", "Data Pipeline", "Public Records", "Scoring Engine", "TypeScript", "Automation"],
    outcome: "Automated deal sourcing from tax delinquency data — research that took days now takes minutes.",
  },
  {
    title: "Federal BD Outreach Engine",
    desc: "Automated daily outreach generation from USASpending contract data. TypeScript preprocessing pipeline feeds AI email generation with personalized hooks. Output queued to Google Docs for human review. Telegram bot for operator control.",
    stack: ["TypeScript", "USASpending API", "AI Generation", "Google Docs API", "Telegram", "Cron"],
    outcome: "60+ personalized outreach drafts per day, zero manual research.",
  },
  {
    title: "Trading Operations Automation",
    desc: "AI agent deployed on Mac Studio for a trading desk. Automated database checks, trade validation, Bloomberg data bridge. Daily reports generated before market open.",
    stack: ["AI Agent", "Mac Studio", "PostgreSQL", "Bloomberg API", "Cron", "Telegram"],
    outcome: "Pre-market operations report delivered by 6am, every day.",
  },
  {
    title: "Secure VPS Deployment",
    desc: "Hardened AI agent instance on cloud VPS. SSH lockdown, fail2ban, UFW firewall, systemd service management. Full operator documentation for non-technical client.",
    stack: ["Ubuntu VPS", "systemd", "SSH Hardening", "Tailscale", "Documentation"],
    outcome: "Production-grade deployment with full handoff to non-technical operator.",
  },
];

export default function WorkPage() {
  return (
    <>
      <section style={{ padding: "6rem 2rem 2rem" }}>
        <div className="container mx-auto max-w-[1100px] text-center">
          <div className="section-label">Work</div>
          <h1 className="section-title">Systems in <span className="text-gradient-neon">Production</span></h1>
          <p className="section-sub mx-auto text-center">
            Real projects. Anonymized where needed. All running.
          </p>
        </div>
      </section>

      <section style={{ padding: "2rem 2rem 6rem" }}>
        <div className="container mx-auto max-w-[900px]">
          <div className="space-y-6">
            {projects.map((proj) => (
              <div key={proj.title} className="project-card p-8">
                <h3 className="text-text-main font-semibold text-xl mb-2">{proj.title}</h3>
                <p className="text-body-color text-sm mb-4 leading-relaxed">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.stack.map((tech, i) => (
                    <span key={tech} className={i % 2 === 0 ? "tech-pill" : "tech-pill-alt"}>{tech}</span>
                  ))}
                </div>
                <p className="text-cyan text-sm italic">{proj.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center" style={{ padding: "0 2rem 6rem" }}>
        <h2 className="section-title">Have a system in <span className="text-gradient-neon">mind</span>?</h2>
        <p className="text-body-color mb-8 max-w-xl mx-auto">
          We&apos;ll tell you if we can build it — and what it&apos;ll take.
        </p>
        <Link href="/contact" className="btn-primary">Talk to Us</Link>
      </section>
    </>
  );
}
