"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Agents", href: "/agents" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[12px]"
      style={{
        background: "rgba(10,10,18,.85)",
        borderBottom: "1px solid rgba(0,240,255,.1)",
      }}
    >
      <div className="container mx-auto max-w-[1200px] px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <span className="text-[1.3rem] font-bold tracking-tight text-text-main">
              Wintermute<span className="text-cyan">Dev</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.9rem] uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-cyan"
                    : "text-body-color hover:text-cyan"
                }`}
                style={{ letterSpacing: "0.08em" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex nav-cta"
            >
              Talk to Us
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 border-t border-white/5 mt-2 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm uppercase px-2 py-1.5 rounded transition-colors ${
                    pathname === link.href
                      ? "text-cyan"
                      : "text-body-color hover:text-cyan"
                  }`}
                  style={{ letterSpacing: "0.08em" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="sm:hidden nav-cta text-center mt-2"
              >
                Talk to Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
