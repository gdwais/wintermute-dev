import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI agents, productivity, and building digital workforces for startups.",
};

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-[1200px] px-4 text-center">
          <div className="section-label">Insights</div>
          <h1 className="section-title">
            <span className="text-gradient-neon">Blog</span>
          </h1>
          <p className="section-sub mx-auto text-center">
            Insights on AI agents, automation, and building digital workforces.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass-card-hover p-6 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-cyan bg-cyan-glow px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-body-color">{post.date}</span>
                </div>
                <h2 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-body-color leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
