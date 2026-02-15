import type { Metadata } from "next";
import Link from "next/link";
import {
  PixelSetupIcon,
  PixelManageIcon,
  PixelServerIcon,
  PixelHandoffIcon,
} from "@/components/PixelIcons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI agent setup, deployment, managed services, and hosting for small SaaS startups.",
};

const services = [
  {
    icon: <PixelSetupIcon size={56} color="#00f0ff" />,
    title: "Setup & Deployment",
    price: "$1,000 one-time",
    timeline: "3-5 business days",
    items: [
      "Discovery call to map your workflows",
      "Agent architecture design",
      "Workspace configuration",
      "Telegram bot creation",
      "Notion workflow setup",
      "Deployment to your infrastructure or ours",
    ],
  },
  {
    icon: <PixelManageIcon size={56} color="#9b59ff" />,
    title: "Managed Services",
    price: "Monthly retainer",
    timeline: "Ongoing",
    items: [
      "Ongoing agent monitoring and tuning",
      "Memory and context optimization",
      "New agent additions",
      "Workflow adjustments",
      "Priority support",
    ],
  },
  {
    icon: <PixelServerIcon size={56} color="#39ff14" />,
    title: "Hosting",
    price: "Add-on",
    timeline: "Always-on",
    items: [
      "Dedicated Mac Mini infrastructure",
      "Tailscale secure networking",
      "Automated backups",
      "99.9% uptime target",
    ],
  },
  {
    icon: <PixelHandoffIcon size={56} color="#ffe600" />,
    title: "Handoff Package",
    price: "Included",
    timeline: "30-day support window",
    items: [
      "Full documentation",
      "Training session",
      "Source config and workspace files",
      "30-day support window",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "6rem 2rem 2rem" }}>
        <div className="container mx-auto max-w-[1100px] text-center">
          <div className="section-label">What We Do</div>
          <h1 className="section-title">
            Our <span className="text-gradient-neon">Services</span>
          </h1>
          <p className="section-sub mx-auto text-center">
            From discovery to deployment to ongoing management — we handle
            everything so your AI workforce runs smoothly.
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
                    <ul className="space-y-2">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center" style={{ padding: "0 2rem 6rem" }}>
        <h2 className="section-title">
          Ready to get started?
        </h2>
        <p className="text-body-color mb-8 max-w-xl mx-auto">
          Book a discovery call and we&apos;ll map out your AI workforce in
          30 minutes.
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
