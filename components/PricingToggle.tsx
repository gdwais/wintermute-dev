"use client";

import { useState } from "react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    monthly: 500,
    annual: 5000,
    setup: "$1,000",
    highlight: false,
    features: [
      { label: "Up to 3 agents", included: true },
      { label: "Self-hosted", included: true },
      { label: "Email support", included: true },
      { label: "Notion board", included: true },
      { label: "Custom workflows", included: false },
      { label: "Priority support", included: false },
    ],
  },
  {
    name: "Growth",
    monthly: 1500,
    annual: 15000,
    setup: "$1,000",
    highlight: true,
    features: [
      { label: "Up to 6 agents", included: true },
      { label: "Hosting included", included: true },
      { label: "Active management", included: true },
      { label: "Notion board", included: true },
      { label: "Custom workflows", included: true },
      { label: "Priority support", included: true },
    ],
  },
  {
    name: "Enterprise",
    monthly: 0,
    annual: 0,
    setup: "Custom",
    highlight: false,
    features: [
      { label: "Unlimited agents", included: true },
      { label: "Dedicated hosting", included: true },
      { label: "Dedicated account manager", included: true },
      { label: "Notion board", included: true },
      { label: "Custom workflows", included: true },
      { label: "Priority support", included: true },
    ],
  },
];

export default function PricingToggle() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="pb-16 lg:pb-24">
      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm ${!annual ? "text-white" : "text-body-color"}`}>
            Monthly
          </span>
          <label className="relative inline-block w-14 h-7 cursor-pointer">
            <input
              id="togglePlan"
              type="checkbox"
              checked={annual}
              onChange={() => setAnnual(!annual)}
              className="sr-only peer"
            />
            <div className="w-14 h-7 bg-surface-light rounded-full peer-checked:bg-cyan/20 transition-colors border border-white/10" />
            <div className="dot absolute top-0.5 left-0.5 w-6 h-6 bg-cyan rounded-full transition-transform peer-checked:translate-x-7" />
          </label>
          <span className={`text-sm ${annual ? "text-white" : "text-body-color"}`}>
            Annual <span className="text-cyan text-xs">(2 months free)</span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`glass-card p-8 flex flex-col ${
                tier.highlight ? "neon-border-cyan" : ""
              }`}
            >
              {tier.highlight && (
                <span className="text-[0.75rem] uppercase font-semibold text-cyan mb-4 block" style={{ letterSpacing: "0.12em" }}>
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-white text-xl font-semibold mb-2">
                {tier.name}
              </h3>
              <div className="mb-1">
                {tier.monthly === 0 ? (
                  <span className="text-3xl font-bold text-white">Custom</span>
                ) : (
                  <>
                    <span className="text-3xl font-bold text-white">
                      ${annual ? Math.round(tier.annual / 12).toLocaleString() : tier.monthly.toLocaleString()}
                    </span>
                    <span className="text-body-color text-sm">/mo</span>
                  </>
                )}
              </div>
              <p className="text-xs text-body-color mb-6">
                {tier.setup} setup fee
                {annual && tier.monthly > 0 && (
                  <> &middot; ${tier.annual.toLocaleString()}/yr</>
                )}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature.label}
                    className="flex items-center gap-2 text-sm"
                  >
                    {feature.included ? (
                      <span className="text-cyan">&#10003;</span>
                    ) : (
                      <span className="text-body-color/30">&mdash;</span>
                    )}
                    <span
                      className={
                        feature.included ? "text-body-color" : "text-body-color/30"
                      }
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded transition-colors ${
                  tier.highlight
                    ? "text-background bg-cyan hover:bg-cyan-dark"
                    : "text-cyan border border-cyan/30 hover:bg-cyan-glow"
                }`}
              >
                {tier.monthly === 0 ? "Contact Us" : "Get Started"} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
