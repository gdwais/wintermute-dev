import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for AI automation systems. No tiers, no per-agent pricing.",
};

const plans = [
  {
    title: "Setup",
    price: "$1,000",
    detail: "One-time flat fee",
    items: [
      "OpenClaw instance configured and deployed",
      "Telegram bot paired as control plane",
      "First agent deployed with cron schedule",
      "Handoff documentation",
      "1–2 day delivery",
    ],
    highlight: false,
  },
  {
    title: "Custom Builds",
    price: "$150/hr",
    detail: "Or fixed-fee for scoped projects",
    items: [
      "Data pipelines, integrations, scheduled agents",
      "MCP tool development",
      "Multi-agent orchestration from $2,500",
      "Scoped and estimated upfront",
    ],
    highlight: true,
  },
  {
    title: "Retainer",
    price: "$500–1,500/mo",
    detail: "Scaled to system complexity",
    items: [
      "Ongoing monitoring and uptime",
      "Agent tuning and optimization",
      "New agent development",
      "Priority support",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "What's OpenClaw?",
    a: "OpenClaw is an AI agent orchestration platform. It runs on your hardware (Mac, Linux, VPS) and manages AI agents with cron scheduling, Telegram integration, and MCP tool use. We deploy and configure it for you.",
  },
  {
    q: "Do I need my own hardware?",
    a: "Not necessarily. We can deploy to a cloud VPS ($10–50/mo hosting cost) or your existing Mac/Linux machine. We'll recommend the right setup during discovery.",
  },
  {
    q: "What about API costs?",
    a: "You provide your own API keys (Anthropic, OpenAI, etc.). Typical costs are $50–300/mo depending on usage. We optimize prompts and scheduling to keep costs low.",
  },
  {
    q: "Can I manage the system myself after setup?",
    a: "Yes. Every deployment includes handoff docs and a walkthrough. The Telegram bot gives you day-to-day control. We're available for retainer support if you want ongoing help.",
  },
  {
    q: "How long does a custom build take?",
    a: "Simple automations: 1–2 weeks. Multi-agent systems: 2–4 weeks. We scope everything upfront so there are no surprises.",
  },
  {
    q: "Is my data secure?",
    a: "Your agents run on your infrastructure. Nothing passes through our servers. VPS deployments include SSH hardening, firewall config, and encrypted connections via Tailscale.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "6rem 2rem 2rem" }}>
        <div className="container mx-auto max-w-[1100px] text-center">
          <div className="section-label">Pricing</div>
          <h1 className="section-title">
            Simple <span className="text-gradient-neon">Rates</span>
          </h1>
          <p className="section-sub mx-auto text-center">
            No tiers. No per-agent pricing. You pay for what we build.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ padding: "2rem 2rem 6rem" }}>
        <div className="container mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={`glass-card p-8 transition-all duration-300 hover:border-[rgba(0,240,255,.3)] hover:shadow-neon-cyan ${
                  plan.highlight ? "neon-border-cyan" : ""
                }`}
              >
                <h2 className="text-text-main text-xl font-semibold mb-2">{plan.title}</h2>
                <div className="mb-1">
                  <span className="text-2xl font-bold text-text-main">{plan.price}</span>
                </div>
                <p className="text-body-color text-sm mb-6">{plan.detail}</p>
                <ul className="space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-body-color">
                      <span className="text-cyan mt-0.5 shrink-0">&#9654;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 2rem 6rem" }}>
        <div className="container mx-auto max-w-[800px]">
          <div className="text-center mb-12">
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card group">
                <summary className="flex items-center justify-between p-6 cursor-pointer text-text-main font-medium hover:text-cyan transition-colors list-none">
                  {faq.q}
                  <span className="text-cyan ml-4 shrink-0 transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-sm text-body-color leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center" style={{ padding: "0 2rem 6rem" }}>
        <h2 className="section-title">Not sure what you need?</h2>
        <p className="text-body-color mb-8 max-w-xl mx-auto">
          Book a discovery call. 30 minutes. No pitch.
        </p>
        <Link href="/contact" className="btn-primary">
          Book a Call
        </Link>
      </section>
    </>
  );
}
