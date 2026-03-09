import type { Metadata } from "next";
import Link from "next/link";
import {
  PixelSetupIcon,
  PixelDeployIcon,
  PixelBrainIcon,
  PixelManageIcon,
} from "@/components/PixelIcons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI automation services: OpenClaw setup, custom builds, multi-agent deployment, and ongoing management.",
};

const services = [
  {
    icon: <PixelSetupIcon size={56} color="#3E78B2" />,
    title: "OpenClaw Setup",
    price: "$1,000 flat",
    timeline: "1–2 days",
    items: [
      "Install and configure OpenClaw on your hardware or VPS",
      "Pair Telegram bot as control plane",
      "Deploy first agent with cron schedule",
      "Handoff docs and operator walkthrough",
    ],
    outcome: "You walk away with a running system.",
  },
  {
    icon: <PixelDeployIcon size={56} color="#E36397" />,
    title: "Custom Automation Build",
    price: "From $1,500 / project-based",
    timeline: "1–3 weeks",
    items: [
      "Data pipelines (ingest, normalize, enrich)",
      "Scheduled agents for reports, outreach, monitoring",
      "API integrations (Notion, Google, custom)",
      "MCP tool development",
    ],
    outcome: "Purpose-built automation, tested and deployed.",
  },
  {
    icon: <PixelBrainIcon size={56} color="#9b59ff" />,
    title: "Multi-Agent Deployment",
    price: "From $2,500",
    timeline: "2–4 weeks",
    items: [
      "Multiple specialized agents with defined roles",
      "Cron schedules and orchestration",
      "Voice/personality calibration",
      "Notion, Telegram, Slack integration",
    ],
    outcome: "A coordinated system, not a collection of chatbots.",
  },
  {
    icon: <PixelManageIcon size={56} color="#9b59ff" />,
    title: "Ongoing Management",
    price: "$500–1,500/mo",
    timeline: "Monthly retainer",
    items: [
      "System monitoring and uptime",
      "Agent tuning and prompt optimization",
      "New agent development",
      "Priority support and incident response",
    ],
    outcome: "We keep it running. You keep building.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "6rem 2rem 2rem" }}>
        <div className="container mx-auto max-w-[1100px] text-center">
          <div className="section-label">Services</div>
          <h1 className="section-title">
            What We <span className="text-gradient-neon">Build</span>
          </h1>
          <p className="section-sub mx-auto text-center">
            Four ways to work with us. All scoped, all delivered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "2rem 2rem 6rem" }}>
        <div className="container mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="glass-card-hover p-8">
                <div className="flex items-start gap-6">
                  <div className="shrink-0">{service.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-text-main text-xl font-semibold mb-1">
                      {service.title}
                    </h2>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-cyan text-sm font-medium">
                        {service.price}
                      </span>
                      <span className="text-body-color text-xs">
                        {service.timeline}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-body-color"
                        >
                          <span className="text-cyan mt-0.5 shrink-0">&#9654;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm italic text-cyan/70">{service.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center" style={{ padding: "0 2rem 6rem" }}>
        <h2 className="section-title">Know what you need?</h2>
        <p className="text-body-color mb-8 max-w-xl mx-auto">
          Reach out. We&apos;ll scope it in 30 minutes.
        </p>
        <Link href="/contact" className="btn-primary">
          Get in Touch
        </Link>
      </section>
    </>
  );
}
