import type { Metadata } from "next";
import Link from "next/link";
import PixelAgent from "@/components/PixelAgent";
import type { AgentType } from "@/components/PixelAgent";

export const metadata: Metadata = {
  title: "Agents",
  description:
    "Meet the AI digital workers — from research to development to content creation.",
};

interface AgentInfo {
  type: AgentType;
  name: string;
  role: string;
  bullets: string[];
}

const agents: AgentInfo[] = [
  {
    type: "executive",
    name: "Executive",
    role: "Point of Contact",
    bullets: [
      "Orchestrates the entire agent team",
      "Routes tasks to the right specialist",
      "Makes high-level decisions",
      "Keeps everything moving on schedule",
    ],
  },
  {
    type: "researcher",
    name: "Researcher",
    role: "Intelligence",
    bullets: [
      "Deep market analysis and research",
      "Competitive intelligence gathering",
      "Trend monitoring and reporting",
      "Always cites sources",
    ],
  },
  {
    type: "developer",
    name: "Developer",
    role: "Engineering",
    bullets: [
      "Code generation and review",
      "Technical implementation",
      "Debugging and troubleshooting",
      "Architecture design",
    ],
  },
  {
    type: "content-creator",
    name: "Content Creator",
    role: "Creative",
    bullets: [
      "Blog posts and articles",
      "Email sequences",
      "Whitepapers and guides",
      "Adapts to any voice or tone",
    ],
  },
  {
    type: "brand-manager",
    name: "Brand Manager",
    role: "Brand",
    bullets: [
      "Brand governance",
      "Voice consistency enforcement",
      "Content review and approval",
      "Style guide management",
    ],
  },
  {
    type: "social-media",
    name: "Social Media Manager",
    role: "Distribution",
    bullets: [
      "Platform strategy development",
      "Content adaptation per channel",
      "Scheduling and publishing",
      "Engagement monitoring",
    ],
  },
  {
    type: "project-manager",
    name: "Project Manager",
    role: "Operations",
    bullets: [
      "PRDs and roadmap creation",
      "Sprint planning",
      "Stakeholder updates",
      "Cross-team coordination",
    ],
  },
  {
    type: "qa-engineer",
    name: "QA Engineer",
    role: "Quality",
    bullets: [
      "Testing and validation",
      "Quality gates enforcement",
      "Edge case identification",
      "Regression prevention",
    ],
  },
];

export default function AgentsPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "6rem 2rem 2rem" }}>
        <div className="container mx-auto max-w-[1100px] text-center">
          <div className="section-label">Your AI Team</div>
          <h1 className="section-title">
            Meet the <span className="text-gradient-neon">Digital Workers</span>
          </h1>
          <p className="section-sub mx-auto text-center">
            Each agent is purpose-built for a specific role. Together, they form
            a complete AI workforce for your startup.
          </p>
        </div>
      </section>

      {/* Agent Grid */}
      <section style={{ padding: "2rem 2rem 6rem" }}>
        <div className="container mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <div
                key={agent.type}
                className="team-card"
              >
                <div className="flex justify-center mb-4">
                  <PixelAgent type={agent.type} size={80} />
                </div>
                <h3 className="font-semibold text-[1.15rem] mb-1 text-text-main">
                  {agent.name}
                </h3>
                <p className="text-magenta text-[0.75rem] uppercase font-semibold mb-4" style={{ letterSpacing: "0.12em" }}>
                  {agent.role}
                </p>
                <ul className="space-y-2">
                  {agent.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-body-color"
                    >
                      <span className="mt-0.5 shrink-0 text-magenta">&#9654;</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "0 2rem 6rem" }}>
        <div className="container mx-auto max-w-[1100px] text-center">
          <h2 className="section-title">
            Which agents does your team need?
          </h2>
          <p className="text-body-color mb-8 max-w-xl mx-auto">
            Let&apos;s find out. Book a discovery call and we&apos;ll design
            the perfect agent team for your startup.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
          >
            Let&apos;s Find Out
          </Link>
        </div>
      </section>
    </>
  );
}
