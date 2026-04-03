import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing about AI systems, code audits, agent architecture, and building production-grade infrastructure.",
};

export default function BlogPage() {
  return (
    <>
      <section style={{ padding: "6rem 2rem 2rem" }}>
        <div className="container mx-auto max-w-[800px] text-center">
          <div className="section-label">Blog</div>
          <h1 className="section-title">
            Thinking in <span className="text-gradient-neon">Systems</span>
          </h1>
          <p className="section-sub mx-auto text-center">
            Case studies, technical deep dives, and lessons from production.
          </p>
        </div>
      </section>

      <section style={{ padding: "2rem 2rem 6rem" }}>
        <div className="container mx-auto max-w-[800px]">
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                <div className="glass-card-hover p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="tech-pill">{post.category}</span>
                    <span className="text-body-color text-xs">{post.date}</span>
                  </div>
                  <h2 className="text-text-main font-semibold text-lg mb-2">{post.title}</h2>
                  <p className="text-sm text-body-color leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
