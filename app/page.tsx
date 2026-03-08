import Link from "next/link";
import {
  PixelSearchIcon,
  PixelDocIcon,
  PixelBrainIcon,
  PixelTaskIcon,
  PixelDiscoveryIcon,
  PixelDeployIcon,
  PixelManageIcon,
  PixelSetupIcon,
} from "@/components/PixelIcons";

const capabilities = [
  { icon: <PixelTaskIcon size={40} color="#00f0ff" />, title: "Scheduled Agents", desc: "Cron jobs that think. Daily reports, outreach, monitoring — running autonomously." },
  { icon: <PixelDocIcon size={40} color="#9b59ff" />, title: "Data Pipelines", desc: "Ingest, normalize, enrich. Legacy exports into modern schemas." },
  { icon: <PixelSearchIcon size={40} color="#ff00aa" />, title: "Control Planes", desc: "Telegram and Slack bots as operator interfaces for your automation." },
  { icon: <PixelBrainIcon size={40} color="#9b59ff" />, title: "Multi-Agent Systems", desc: "Specialized agents coordinating across content, intel, operations." },
  { icon: <PixelSetupIcon size={40} color="#00f0ff" />, title: "MCP Integrations", desc: "Connect Notion, Google Workspace, APIs, databases. Tool use, not toy demos." },
];

const projects = [
  {
    title: "Federal BD Outreach Engine",
    desc: "Automated daily outreach generation from USASpending contract data. AI email generation with personalized hooks, queued to Google Docs for human review.",
    stack: ["OpenClaw", "TypeScript", "USASpending API", "Google Docs API", "Telegram", "Cron"],
  },
  {
    title: "Multi-Agent Content & Intel System",
    desc: "Five-agent deployment for a fintech firm. Content creation, competitive intelligence, PR outreach, executive briefings. 22 scheduled cron jobs.",
    stack: ["OpenClaw", "Multi-Agent", "Notion", "Telegram", "Cron (22 jobs)", "MCP"],
  },
  {
    title: "Trading Operations Automation",
    desc: "OpenClaw on Mac Studio for a trading desk. Automated database checks, trade validation, Bloomberg data bridge. Daily reports before market open.",
    stack: ["OpenClaw", "Mac Studio", "PostgreSQL", "Bloomberg API", "Cron", "Telegram"],
  },
];

const steps = [
  { num: "01", title: "Discovery", desc: "We learn your workflows, data sources, and pain points.", icon: <PixelDiscoveryIcon size={48} color="#00f0ff" /> },
  { num: "02", title: "Build", desc: "Custom automation, tested against real data.", icon: <PixelDeployIcon size={48} color="#ff00aa" /> },
  { num: "03", title: "Deploy", desc: "OpenClaw instance, cron schedules, control plane, docs.", icon: <PixelSetupIcon size={48} color="#39ff14" /> },
  { num: "04", title: "Iterate", desc: "Monitor, tune, expand. Your system gets better over time.", icon: <PixelManageIcon size={48} color="#9b59ff" /> },
];

const pricing = [
  { tier: "Setup", price: "$1,000", detail: "flat", desc: "OpenClaw instance, Telegram bot, basic agent, handoff docs" },
  { tier: "Custom Builds", price: "$150/hr", detail: "or fixed-fee", desc: "Data pipelines, scheduled agents, integrations" },
  { tier: "Retainer", price: "$500–1,500", detail: "/mo", desc: "Monitoring, tuning, new agents, priority support" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "8rem 2rem 4rem" }}>
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,240,255,.08), transparent 70%)" }} />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,0,170,.06), transparent 70%)" }} />

        <div className="container mx-auto max-w-[1200px] px-4 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-text-main leading-[1.1] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>
                Automate the work{" "}
                <span className="text-gradient-neon">you shouldn&apos;t be doing.</span>
              </h1>
              <p className="text-body-color leading-relaxed mb-10 max-w-[640px] mx-auto lg:mx-0" style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}>
                We build AI-powered automation systems — data pipelines, scheduled agents, workflow integrations — so you can focus on your actual business.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="btn-primary">Talk to Us</Link>
                <Link href="/work" className="px-8 py-3 text-sm font-semibold text-cyan border border-cyan/30 rounded-lg hover:bg-cyan-glow transition-colors">
                  See Our Work
                </Link>
              </div>
            </div>

            {/* Terminal block */}
            <div className="flex-1 flex justify-center w-full max-w-md">
              <div className="glass-card w-full p-6 font-mono text-sm" style={{ background: "rgba(10,10,18,.9)" }}>
                <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: "1px solid rgba(0,240,255,.15)" }}>
                  <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                  <span className="text-body-color text-xs ml-2">terminal</span>
                </div>
                <div className="space-y-1 text-body-color">
                  <p><span className="text-cyan">$</span> openclaw cron list</p>
                  <p><span className="text-[#39ff14]">✓</span> daily-outreach &nbsp;&nbsp;&nbsp; 6:00 AM ET &nbsp; <span className="text-[#39ff14]">running</span></p>
                  <p><span className="text-[#39ff14]">✓</span> market-report &nbsp;&nbsp;&nbsp; 5:30 AM PT &nbsp; <span className="text-[#39ff14]">running</span></p>
                  <p><span className="text-[#39ff14]">✓</span> intel-scan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8:00 AM MT &nbsp; <span className="text-[#39ff14]">running</span></p>
                  <p><span className="text-cyan">$</span> <span className="animate-blink">_</span></p>
                </div>
              </div>
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
              <div key={cap.title} className="glass-card p-8 text-center transition-all duration-300 hover:border-[rgba(0,240,255,.3)] hover:shadow-neon-cyan">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="glass-card-hover p-8">
                <h3 className="text-text-main font-semibold text-[1.1rem] mb-3">{project.title}</h3>
                <p className="text-sm text-body-color mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded font-medium" style={{ background: "rgba(0,240,255,.08)", color: "#00f0ff", border: "1px solid rgba(0,240,255,.15)" }}>
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
              <div key={item.num} className="glass-card p-8 pl-[4.5rem] relative transition-all duration-300 hover:border-[rgba(0,240,255,.25)] hover:shadow-neon-cyan">
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
            <h2 className="section-title">Transparent rates. No tiers.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricing.map((plan) => (
              <div key={plan.tier} className="glass-card p-8 text-center transition-all duration-300 hover:border-[rgba(0,240,255,.3)] hover:shadow-neon-cyan">
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
