import type { Metadata } from "next";
import Link from "next/link";
import PricingToggle from "@/components/PricingToggle";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for AI digital worker deployment and management.",
};

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "6rem 2rem 2rem" }}>
        <div className="container mx-auto max-w-[1100px] text-center">
          <div className="section-label">Pricing</div>
          <h1 className="section-title">
            Simple, Transparent{" "}
            <span className="text-gradient-neon">Pricing</span>
          </h1>
          <p className="section-sub mx-auto text-center">
            $1,000 one-time setup fee + a monthly retainer based on your needs.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <PricingToggle />

      {/* FAQ */}
      <section style={{ padding: "6rem 2rem" }}>
        <div className="container mx-auto max-w-[800px]">
          <div className="text-center mb-12">
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What AI models do the agents use?",
                a: "Our agents leverage the latest large language models including Claude, GPT-4, and others depending on the task. We select the best model for each agent's role to optimize for quality and cost.",
              },
              {
                q: "Can I add more agents later?",
                a: "Absolutely. You can add new agents at any time. If you're on a managed plan, we'll configure and deploy them for you. Otherwise, we offer individual agent setup for a flat fee.",
              },
              {
                q: "Do I need my own API keys?",
                a: "For self-hosted setups, yes — you'll provide your own API keys so you maintain full control over costs. For our hosted plans, API costs are included in your monthly retainer.",
              },
              {
                q: "What happens if I want to self-manage?",
                a: "No problem. Our Handoff Package includes full documentation, a training session, and all configuration files. We also provide 30 days of support during the transition.",
              },
              {
                q: "How do agents communicate with my team?",
                a: "Agents can communicate via Telegram bots, Notion boards, Slack integrations, or custom channels. We set up the communication layer during onboarding based on your team's preferences.",
              },
              {
                q: "Is my data secure?",
                a: "Yes. All agent communications are encrypted. Self-hosted setups keep data entirely on your infrastructure. Our hosted plans use dedicated, isolated environments with Tailscale secure networking.",
              },
            ].map((faq, i) => (
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
        <h2 className="section-title">
          Not sure which plan is right?
        </h2>
        <p className="text-body-color mb-8 max-w-xl mx-auto">
          Book a free discovery call and we&apos;ll recommend the perfect
          setup for your team.
        </p>
        <Link
          href="/contact"
          className="btn-primary"
        >
          Book a Discovery Call
        </Link>
      </section>
    </>
  );
}
