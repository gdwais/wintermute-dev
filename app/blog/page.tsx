import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing about AI automation, agent orchestration, and building systems that work.",
};

export default function BlogPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto max-w-[800px] px-4 text-center">
        <div className="section-label">Blog</div>
        <h1 className="section-title">Blog</h1>
        <p className="text-body-color text-lg">
          Writing about AI automation, agent orchestration, and building systems that work. Coming soon.
        </p>
      </div>
    </section>
  );
}
