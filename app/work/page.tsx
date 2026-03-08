import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "Real automation projects, running in production. OpenClaw deployments, data pipelines, and multi-agent systems.",
};

const projects = [
  {
    title: "Federal BD Outreach Engine",
    desc: "Automated daily outreach generation from USASpending contract data. TypeScript preprocessing pipeline feeds AI email generation with personalized hooks. Output queued to Google Docs for human review. Telegram bot for operator control.",
    stack: ["OpenClaw", "TypeScript", "USASpending API", "Google Docs API", "Telegram", "Cron"],
    outcome: "60+ personalized outreach drafts per day, zero manual research.",
  },
  {
    title: "Multi-Agent Content & Intel System",
    desc: "Five-agent deployment for a fintech firm. Content creation, competitive intelligence, PR outreach, executive briefings, and social distribution. 22 scheduled cron jobs across the system.",
    stack: ["OpenClaw", "Multi-Agent", "Notion", "Telegram", "Cron (22 jobs)", "MCP"],
    outcome: "Full content + intel operation running autonomously across 5 platforms.",
  },
  {
    title: "Trading Operations Automation",
    desc: "OpenClaw deployed on Mac Studio for a trading desk. Automated database checks, trade validation, Bloomberg data bridge. Daily reports generated before market open.",
    stack: ["OpenClaw", "Mac Studio", "PostgreSQL", "Bloomberg API", "Cron", "Telegram"],
    outcome: "Pre-market operations report delivered by 6am, every day.",
  },
  {
    title: "Property Management Data Pipeline",
    desc: "Multi-platform import system handling exports from AppFolio, Vantaca, and Buildium. Normalizes inconsistent legacy data into a unified modern schema for an AI-native property management platform.",
    stack: ["TypeScript", "Data Pipeline", "AppFolio", "Vantaca", "Buildium", "Schema Normalization"],
    outcome: "Three legacy platforms, one clean data model.",
  },
  {
    title: "Secure VPS Deployment",
    desc: "Hardened OpenClaw instance on cloud VPS. SSH lockdown, fail2ban, UFW firewall, systemd service management. Full operator documentation for non-technical client.",
    stack: ["OpenClaw", "Ubuntu VPS", "systemd", "SSH Hardening", "Tailscale", "Documentation"],
    outcome: "Production-grade deployment with full handoff to non-technical operator.",
  },
];

export default function WorkPage() {
  return (
    <>
      <section style={{ padding: "6rem 2rem 2rem" }}>
        <div className="container mx-auto max-w-[1100px] text-center">
          <div className="section-label">Work</div>
          <h1 className="section-title">Systems in Production</h1>
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
        <h2 className="section-title">Have a system in mind?</h2>
        <p className="text-body-color mb-8 max-w-xl mx-auto">
          We&apos;ll tell you if we can build it — and what it&apos;ll take.
        </p>
        <Link href="/contact" className="btn-primary">Talk to Us</Link>
      </section>
    </>
  );
}
