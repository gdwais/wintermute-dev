import Link from "next/link";
import { PixelAgentAtDesk } from "@/components/PixelAgent";
import PixelAgent from "@/components/PixelAgent";
import {
  PixelSearchIcon,
  PixelDocIcon,
  PixelBrainIcon,
  PixelTaskIcon,
  PixelDiscoveryIcon,
  PixelDeployIcon,
  PixelManageIcon,
} from "@/components/PixelIcons";

const featuredAgents = [
  { type: "executive" as const, name: "Executive", role: "Orchestrates the team. Routes tasks, makes decisions." },
  { type: "researcher" as const, name: "Researcher", role: "Deep market analysis, competitive intel, trends." },
  { type: "content-creator" as const, name: "Content Creator", role: "Blog posts, articles, emails, whitepapers." },
  { type: "developer" as const, name: "Developer", role: "Code generation, debugging, architecture." },
];

const painPoints = [
  { icon: <PixelSearchIcon size={40} color="#00f0ff" />, text: "Researching competitors takes hours" },
  { icon: <PixelDocIcon size={40} color="#9b59ff" />, text: "Content creation is a bottleneck" },
  { icon: <PixelBrainIcon size={40} color="#ff00aa" />, text: "Context switching kills deep work" },
  { icon: <PixelTaskIcon size={40} color="#39ff14" />, text: "Operational tasks pile up" },
];

const pricingPreview = [
  { tier: "Starter", price: "$500", period: "/mo", agents: "Up to 3 agents", highlight: false },
  { tier: "Growth", price: "$1,500", period: "/mo", agents: "Up to 6 agents", highlight: true },
  { tier: "Enterprise", price: "Custom", period: "", agents: "Unlimited agents", highlight: false },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "8rem 2rem 4rem" }}>
        {/* Background glow effects */}
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,240,255,.08), transparent 70%)" }} />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,0,170,.06), transparent 70%)" }} />

        <div className="container mx-auto max-w-[1200px] px-4 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-text-main leading-[1.1] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>
                Deploy an{" "}
                <span className="text-gradient-neon">AI Agent Team</span>
                <br />for Your Business
              </h1>
              <p className="text-body-color leading-relaxed mb-10 max-w-[640px] mx-auto lg:mx-0" style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)" }}>
                WintermuteDev builds and manages teams of AI agents that handle
                research, content, development, and operations — so your team
                can focus on building.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="btn-primary"
                >
                  Get Started
                </Link>
                <Link
                  href="/agents"
                  className="px-8 py-3 text-sm font-semibold text-cyan border border-cyan/30 rounded-lg hover:bg-cyan-glow transition-colors"
                >
                  See Our Agents
                </Link>
              </div>
            </div>

            {/* Pixel Office Scene */}
            <div className="flex-1 flex justify-center">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 max-w-sm">
                {(["executive", "researcher", "developer", "content-creator", "brand-manager", "qa-engineer"] as const).map(
                  (type) => (
                    <div key={type} className="flex justify-center animate-float" style={{ animationDelay: `${Math.random() * 2}s` }}>
                      <PixelAgentAtDesk type={type} size={80} />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-alt" style={{ padding: "6rem 2rem" }}>
        <div className="container mx-auto max-w-[1100px]">
          <div className="text-center mb-12">
            <div className="section-label">The Problem</div>
            <h2 className="section-title">Your team is drowning in busywork</h2>
            <p className="section-sub mx-auto text-center">
              Every hour spent on repetitive tasks is an hour not spent building your product.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, i) => (
              <div key={i} className="glass-card p-8 text-center transition-all duration-300 hover:border-[rgba(0,240,255,.3)] hover:shadow-neon-cyan">
                <div className="flex justify-center mb-4">{point.icon}</div>
                <p className="text-text-main text-sm font-medium">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section style={{ padding: "6rem 2rem" }}>
        <div className="container mx-auto max-w-[1100px]">
          <div className="text-center mb-12">
            <div className="section-label">Your AI Team</div>
            <h2 className="section-title">Meet your new digital team</h2>
            <p className="section-sub mx-auto text-center">
              AI agents purpose-built for the work that slows you down.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAgents.map((agent) => (
              <div key={agent.type} className="team-card text-center">
                <div className="flex justify-center mb-4">
                  <PixelAgent type={agent.type} size={64} />
                </div>
                <h3 className="text-text-main font-semibold text-[1.15rem] mb-2">{agent.name}</h3>
                <p className="text-sm text-body-color">{agent.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/agents" className="text-cyan text-sm hover:text-magenta transition-colors">
              See all agents &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-alt" style={{ padding: "6rem 2rem" }}>
        <div className="container mx-auto max-w-[1100px]">
          <div className="text-center mb-12">
            <div className="section-label">How It Works</div>
            <h2 className="section-title">Three Steps to Your AI Workforce</h2>
            <p className="section-sub mx-auto text-center">
              From onboarding to deployment in days, not months.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <PixelDiscoveryIcon size={48} color="#00f0ff" />,
                step: "01",
                title: "Discovery",
                desc: "We learn your business, workflows, and pain points",
              },
              {
                icon: <PixelDeployIcon size={48} color="#ff00aa" />,
                step: "02",
                title: "Deployment",
                desc: "We configure and deploy your AI agent team",
              },
              {
                icon: <PixelManageIcon size={48} color="#9b59ff" />,
                step: "03",
                title: "Management",
                desc: "We keep your agents running, learning, and improving",
              },
            ].map((item) => (
              <div key={item.step} className="glass-card p-8 pl-[4.5rem] relative transition-all duration-300 hover:border-[rgba(0,240,255,.25)] hover:shadow-neon-cyan">
                <span className="absolute left-6 top-7 text-[1.6rem] font-extrabold text-gradient-neon">
                  {item.step}
                </span>
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
            <h2 className="section-title">Simple Pricing</h2>
            <p className="section-sub mx-auto text-center">$1,000 one-time setup + monthly retainer</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricingPreview.map((plan) => (
              <div
                key={plan.tier}
                className={`glass-card p-8 text-center transition-all duration-300 hover:border-[rgba(0,240,255,.3)] hover:shadow-neon-cyan ${
                  plan.highlight ? "neon-border-cyan" : ""
                }`}
              >
                <h3 className="text-text-main font-semibold mb-2">{plan.tier}</h3>
                <div className="mb-3">
                  <span className="text-2xl font-bold text-text-main">{plan.price}</span>
                  <span className="text-body-color text-sm">{plan.period}</span>
                </div>
                <p className="text-sm text-body-color">{plan.agents}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/pricing" className="text-cyan text-sm hover:text-magenta transition-colors">
              See full pricing details &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="text-center" style={{ padding: "6rem 2rem" }}>
        <h2 className="section-title">
          Ready to Deploy Your{" "}
          <span className="text-gradient-neon">AI Team</span>?
        </h2>
        <p className="text-body-color mb-8 text-[1.1rem]">
          Let&apos;s talk about what your business needs.
        </p>
        <Link
          href="/contact"
          className="btn-primary"
        >
          Talk to Us
        </Link>
      </section>
    </>
  );
}
