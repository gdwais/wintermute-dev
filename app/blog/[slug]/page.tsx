import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="py-16 lg:py-24">
        <div className="container mx-auto max-w-[800px] px-4">
          {/* Back link */}
          <Link
            href="/blog"
            className="text-sm text-body-color hover:text-cyan transition-colors mb-8 inline-block"
          >
            &larr; Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-medium text-cyan bg-cyan-glow px-2 py-0.5 rounded">
                {post.category}
              </span>
              <span className="text-xs text-body-color">{post.date}</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-body-color">{post.excerpt}</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {post.content.map((section, i) => (
              <div key={i} className="mb-6">
                {section.heading && (
                  <h2 className="text-xl font-semibold text-white mb-3">
                    {section.heading}
                  </h2>
                )}
                <p className="text-body-color leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <div className="glass-card p-6 text-center">
              <p className="text-white font-medium mb-3">
                Ready to build your AI workforce?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2 text-sm font-semibold text-background bg-cyan rounded hover:bg-cyan-dark transition-colors"
              >
                Get Started &rarr;
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
