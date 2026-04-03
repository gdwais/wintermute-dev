"use client";
import AnimatedTerminal from "@/components/AnimatedTerminal";
import Link from "next/link";
import {
  PixelDocIcon,
  PixelBrainIcon,
  PixelTaskIcon,
  PixelDiscoveryIcon,
  PixelDeployIcon,
  PixelManageIcon,
  PixelSetupIcon,
  PixelCodeIcon,
  PixelAnalyticsIcon,
} from "@/components/PixelIcons";

const capabilities = [
  { icon: <PixelBrainIcon size={40} color="#3E78B2" />, title: "AI Agent Systems", desc: "Multi-agent deployments with scheduled automation, monitoring, and fleet management at scale." },
  { icon: <PixelSetupIcon size={40} color="#E36397" />, title: "Application Architecture", desc: "Full-stack SaaS builds and refactors. TypeScript, React, Node, Postgres, Supabase, Vercel." },
  { icon: <PixelDocIcon size={40} color="#9b59ff" />, title: "Data Pipelines", desc: "Ingest, normalize, enrich. Legacy platform exports into modern schemas. API integrations." },
  { icon: <PixelCodeIcon size={40} color="#3E78B2" />, title: "Code Audits & Refactoring", desc: "Security review, architecture assessment, monolith decomposition, CI/CD setup." },
  { icon: <PixelTaskIcon size={40} color="#E36397" />, title: "Embedded AI Services", desc: "AI features that plug into your existing platform. Content generation, analysis, intelligent workflows." },
  { icon: <PixelAnalyticsIcon size={40} color="#9b59ff" />, title: "Reporting & Analytics", desc: "Multi-platform data aggregation, automated reports, dashboards, insights." },
];

const projects = [
  {
    title: "Tax Planning Platform Overhaul",
    desc: "5,385-line monolith → typed modular architecture. 336 tests, CI/CD, security hardening. Full audit + restructure.",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "CI/CD", "Security Audit"],
  },
  {
    title: "AI Practice Growth Platform",
    desc: "Embedded AI services for a wealth management TAMP serving 235+ advisors. Website generation, content pipeline, outreach automation.",
    stack: ["AI/ML", "TypeScript", "React", "Content Pipeline", "Automation"],
  },
  {
    title: "Multi-Agent Fleet Management",
    desc: "Control plane for provisioning, monitoring, and managing AI agent instances across multiple client deployments.",
    stack: ["Hatchery API", "Multi-Agent", "Telegram", "Fleet Management", "Monitoring"],
  },
  {
    title: "Newsletter Automation Pipeline",
    desc: "Automated reporting across 6 newsletter brands, 6M emails/day. Multi-platform data aggregation from ESP, revenue, and IVT systems.",
    stack: ["Data Pipeline", "API Integrations", "Analytics", "Automation", "Reporting"],
  },
];

const steps = [
  { num: "01", title: "Discovery", desc: "We learn your workflows, data, and pain points. You get a clear scope and timeline.", icon: <PixelDiscoveryIcon size={48} color="#3E78B2" /> },
  { num: "02", title: "Build", desc: "Custom architecture, tested against real data. Not a demo — production code.", icon: <PixelDeployIcon size={48} color="#E36397" /> },
  { num: "03", title: "Deploy", desc: "Secure deployment with monitoring, CI/CD, documentation, and handoff.", icon: <PixelSetupIcon size={48} color="#39ff14" /> },
  { num: "04", title: "Iterate", desc: "Ongoing retainer. Your system gets smarter and more capable over time.", icon: <PixelManageIcon size={48} color="#9b59ff" /> },
];

const pricing = [
  { tier: "Code Audit", price: "$500", detail: "flat", desc: "Full security + architecture review with prioritized findings" },
  { tier: "Project Build", price: "Fixed-fee", detail: "scoped", desc: "Custom automation, app builds, multi-agent systems" },
  { tier: "Retainer", price: "$500+", detail: "/mo", desc: "Monitoring, tuning, new capabilities, priority support" },
  { tier: "Hourly", price: "$60", detail: "/hr", desc: "Overflow, ad-hoc requests, consulting" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "8rem 2rem 4rem" }}>
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(62, 120, 178,.08), transparent 70%)" }} />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(227, 99, 151,.06), transparent 70%)" }} />

        <div className="container mx-auto max-w-[1200px] px-4 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-text-main leading-[1.1] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>
                AI systems that run the parts of your business{" "}
                <span className="text-gradient-neon">you shouldn&apos;t be doing manually.</span>
              </h1>
              <p className="text-body-color leading-relaxed mb-10 max-w-[640px] mx-auto lg:mx-0" style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}>
                We build automation infrastructure, AI-powered applications, and intelligent agent systems — from architecture through production. Not chatbots. Systems.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="btn-primary">Talk to Us</Link>
                <Link href="/work" className="px-8 py-3 text-sm font-semibold text-cyan border border-cyan/30 rounded-lg hover:bg-cyan-glow transition-colors">
                  See Our Work
                </Link>
              </div>
            </div>

            {/* Terminal block */}
            <div className="flex-1 flex justify-center w-full max-w-lg">
              <AnimatedTerminal />
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section-alt" style={{ padding: "6rem 2rem" }}>
        <div className="container mx-auto max-w-[1100px]">
          <div className="text-center mb-12">
            <div className="section-label">What We Build</div>
            <h2 className="section-title">Real systems. Running in production.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="glass-card p-8 text-center transition-all duration-300 hover:border-[rgba(62, 120, 178,.3)] hover:shadow-neon-cyan">
                <div className="flex justify-center mb-4">{cap.icon}</div>
                <h3 className="text-text-main font-semibold text-[1.05rem] mb-2">{cap.title}</h3>
                <p className="text-sm text-body-color">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In Production */}
      <section style={{ padding: "6rem 2rem" }}>
        <div className="container mx-auto max-w-[1100px]">
          <div className="text-center mb-12">
            <div className="section-label">In Production</div>
            <h2 className="section-title">Not demos. Deployed systems.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="glass-card-hover p-8">
                <h3 className="text-text-main font-semibold text-[1.1rem] mb-3">{project.title}</h3>
                <p className="text-sm text-body-color mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/work" className="text-cyan text-sm hover:text-magenta transition-colors">
              See all projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-alt" style={{ padding: "6rem 2rem" }}>
        <div className="container mx-auto max-w-[1100px]">
          <div className="text-center mb-12">
            <div className="section-label">Process</div>
            <h2 className="section-title">Discovery → Build → Deploy → Iterate</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item) => (
              <div key={item.num} className="glass-card p-8 pl-[4.5rem] relative transition-all duration-300 hover:border-[rgba(62, 120, 178,.25)] hover:shadow-neon-cyan">
                <span className="absolute left-6 top-7 text-[1.6rem] font-extrabold text-gradient-neon">{item.num}</span>
                <h3 className="text-text-main font-semibold text-[1.05rem] mb-2">{item.title}</h3>
                <p className="text-sm text-body-color">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section style={{ padding: "6rem 2rem" }}>
        <div className="container mx-auto max-w-[1100px]">
          <div className="text-center mb-12">
            <div className="section-label">Pricing</div>
            <h2 className="section-title">Transparent pricing. Scoped to fit.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan) => (
              <div key={plan.tier} className="glass-card p-8 text-center transition-all duration-300 hover:border-[rgba(62, 120, 178,.3)] hover:shadow-neon-cyan">
                <h3 className="text-text-main font-semibold mb-2">{plan.tier}</h3>
                <div className="mb-3">
                  <span className="text-2xl font-bold text-text-main">{plan.price}</span>
                  <span className="text-body-color text-sm ml-1">{plan.detail}</span>
                </div>
                <p className="text-sm text-body-color">{plan.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/pricing" className="text-cyan text-sm hover:text-magenta transition-colors">
              Full pricing details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center" style={{ padding: "6rem 2rem" }}>
        <h2 className="section-title">
          Ready to <span className="text-gradient-neon">automate</span>?
        </h2>
        <p className="text-body-color mb-8 text-[1.1rem]">
          Let&apos;s talk about what your business actually needs.
        </p>
        <Link href="/contact" className="btn-primary">Talk to Us</Link>
      </section>
    </>
  );
}
