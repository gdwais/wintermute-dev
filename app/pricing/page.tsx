import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for AI systems, automation, and application development. Scoped to fit your needs.",
};

const plans = [
  {
    title: "Code Audit",
    price: "$500",
    detail: "Flat fee",
    items: [
      "Full security + architecture review",
      "Written report with prioritized findings",
      "Refactoring roadmap with effort estimates",
      "1–2 day turnaround",
    ],
    highlight: false,
  },
  {
    title: "Project Build",
    price: "Fixed-fee",
    detail: "Scoped per engagement",
    items: [
      "AI agent deployments from $1,000",
      "Custom automation from $2,500",
      "Application builds/refactors from $5,000",
      "Multi-agent systems from $5,000",
      "Scoped and estimated upfront",
    ],
    highlight: true,
  },
  {
    title: "Monthly Retainer",
    price: "From $500",
    detail: "/mo",
    items: [
      "Scaled to scope and complexity",
      "Monitoring, tuning, new capabilities",
      "Priority support and iteration",
      "Enterprise engagements welcome",
    ],
    highlight: false,
  },
  {
    title: "Hourly",
    price: "$60",
    detail: "/hr",
    items: [
      "Overflow and ad-hoc requests",
      "Consulting and advisory",
      "Billed in 15-minute increments",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "What kind of systems do you build?",
    a: "AI agent deployments, full-stack applications, data pipelines, reporting automation, and embedded AI features. We work across the stack — TypeScript, React, Node, Postgres, Supabase, Vercel, AWS — and specialize in production-grade systems, not proofs of concept.",
  },
  {
    q: "What's included in a code audit?",
    a: "A full security and architecture review of your codebase. You get a written report with prioritized findings, a refactoring roadmap with effort estimates, and a follow-up call to walk through recommendations. Typical turnaround is 1–2 days.",
  },
  {
    q: "How is a project build priced?",
    a: "Fixed-fee, scoped upfront. We define the deliverables, timeline, and cost before work begins. No hourly surprises. Complexity determines the price — an agent deployment starts around $1,000, a full application build starts around $5,000.",
  },
  {
    q: "What does a retainer include?",
    a: "Monitoring, optimization, new feature development, and priority support. Retainers scale to your system's complexity — a single agent deployment is different from a multi-platform data pipeline. No upper limit on scope.",
  },
  {
    q: "How long does a project take?",
    a: "Code audits: 1–2 days. Simple automations: 1–2 weeks. Application builds: 2–6 weeks. Multi-agent systems: 2–4 weeks. We scope everything upfront so there are no surprises.",
  },
  {
    q: "Is my data secure?",
    a: "We follow security best practices across every deployment. Infrastructure is hardened with proper access controls, encrypted connections, and monitoring. For self-hosted systems, nothing passes through our servers.",
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
            Transparent pricing. Scoped to what you actually need.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ padding: "2rem 2rem 6rem" }}>
        <div className="container mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={`glass-card p-8 transition-all duration-300 hover:border-[rgba(62, 120, 178,.3)] hover:shadow-neon-cyan ${
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
