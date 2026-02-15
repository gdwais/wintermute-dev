import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with WintermuteDev to start building your AI workforce.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "6rem 2rem 2rem" }}>
        <div className="container mx-auto max-w-[1100px] text-center">
          <div className="section-label">Contact</div>
          <h1 className="section-title">
            Get In <span className="text-gradient-neon">Touch</span>
          </h1>
          <p className="section-sub mx-auto text-center">
            Ready to deploy your AI workforce? Fill out the form or email us
            directly.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ padding: "0 2rem 6rem" }}>
        <div className="container mx-auto max-w-[700px]">
          <div className="glass-card p-8 lg:p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-text-main mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-surface-light border border-white/10 rounded-lg text-text-main text-sm placeholder:text-body-color/50 focus:outline-none focus:border-cyan/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-text-main mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 bg-surface-light border border-white/10 rounded-lg text-text-main text-sm placeholder:text-body-color/50 focus:outline-none focus:border-cyan/50 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm text-text-main mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your company"
                    className="w-full px-4 py-3 bg-surface-light border border-white/10 rounded-lg text-text-main text-sm placeholder:text-body-color/50 focus:outline-none focus:border-cyan/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="teamSize" className="block text-sm text-text-main mb-2">
                    Team Size
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    className="w-full px-4 py-3 bg-surface-light border border-white/10 rounded-lg text-text-main text-sm focus:outline-none focus:border-cyan/50 transition-colors"
                  >
                    <option value="">Select team size</option>
                    <option value="1-5">1-5 people</option>
                    <option value="6-15">6-15 people</option>
                    <option value="16-50">16-50 people</option>
                    <option value="50+">50+ people</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-text-main mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your team and what you're looking for..."
                  className="w-full px-4 py-3 bg-surface-light border border-white/10 rounded-lg text-text-main text-sm placeholder:text-body-color/50 focus:outline-none focus:border-cyan/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-center"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/5 text-center">
              <p className="text-sm text-body-color">
                Or email us directly at{" "}
                <a
                  href="mailto:me@daltonwais.com"
                  className="text-cyan hover:text-magenta transition-colors"
                >
                  me@daltonwais.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
