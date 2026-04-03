import type { Metadata } from "next";
import Link from "next/link";
import {
  PixelBrainIcon,
  PixelDeployIcon,
  PixelSearchIcon,
  PixelTaskIcon,
  PixelDocIcon,
  PixelManageIcon,
} from "@/components/PixelIcons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI systems, application development, code audits, data pipelines, and ongoing management. Production-grade, not proof-of-concept.",
};

const services = [
  {
    icon: <PixelBrainIcon size={56} color="#3E78B2" />,
    title: "AI Agent Systems",
    price: "From $1,000",
    timeline: "1–4 weeks",
    items: [
      "OpenClaw setup, multi-agent deployments, cron scheduling",
      "Fleet management and provisioning at scale",
      "Telegram/Slack control planes",
      "Monitoring, alerting, and orchestration",
    ],
    outcome: "Autonomous systems, not chatbots.",
  },
  {
    icon: <PixelDeployIcon size={56} color="#E36397" />,
    title: "Application Development",
    price: "From $5,000",
    timeline: "2–6 weeks",
    items: [
      "Full-stack SaaS: React, Node/TypeScript, Postgres",
      "Supabase, Vercel, AWS deployment",
      "Architecture, build, deploy, CI/CD",
      "Monolith decomposition and refactoring",
    ],
    outcome: "Production code, not a prototype.",
  },
  {
    icon: <PixelSearchIcon size={56} color="#9b59ff" />,
    title: "Code Audit & Refactoring",
    price: "$500 audit",
    timeline: "1–2 days",
    items: [
      "Security assessment and architecture review",
      "Written report with prioritized findings",
      "TypeScript conversion and test suite creation",
      "Refactoring scoped per project",
    ],
    outcome: "Know exactly what needs fixing, and why.",
  },
  {
    icon: <PixelTaskIcon size={56} color="#3E78B2" />,
    title: "Embedded AI Services",
    price: "Scoped per engagement",
    timeline: "2–4 weeks",
    items: [
      "AI features integrated into your existing platform",
      "Content generation and intelligent workflows",
      "Analysis engines and recommendation systems",
      "Microservice architecture",
    ],
    outcome: "AI that fits your product, not the other way around.",
  },
  {
    icon: <PixelDocIcon size={56} color="#E36397" />,
    title: "Data & Reporting Automation",
    price: "From $2,500",
    timeline: "1–3 weeks",
    items: [
      "Multi-platform API integrations",
      "Automated reporting pipelines and dashboards",
      "Data normalization from legacy systems",
      "CSV/PDF export and admin tooling",
    ],
    outcome: "Your data, unified and actionable.",
  },
  {
    icon: <PixelManageIcon size={56} color="#9b59ff" />,
    title: "Ongoing Management",
    price: "From $500/mo",
    timeline: "Monthly retainer",
    items: [
      "Monitoring, optimization, new capabilities",
      "Priority support and incident response",
      "Scaled to scope and complexity",
      "Enterprise engagements welcome",
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
            How we work with you. All scoped, all delivered.
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
