"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#proof" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/80 shadow-lg shadow-black/30 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10 lg:py-5">
        <a href="#" className="group flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent font-display text-sm font-bold text-dark">
            JH
          </div>
          <span className="hidden font-display text-sm font-medium tracking-tight text-text sm:block">
            Jireh Hesite
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-body text-sm text-text-muted transition-colors hover:text-text after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <a
            href="#contact"
            className="btn-primary hidden rounded-full px-5 py-2.5 text-sm md:inline-block"
          >
            Work with me
          </a>

          {/* Mobile hamburger — 44px min touch target */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg md:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center gap-1.5">
              <span className={`h-[2px] w-5 bg-text transition-all duration-300 ${mobileOpen ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-5 bg-text transition-all duration-300 ${mobileOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu — full height links with big touch targets */}
      <div
        className={`overflow-hidden border-t border-border bg-dark/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-4 font-body text-base text-text-muted transition-colors active:bg-surface"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 grid grid-cols-2 gap-3">
            <a
              href="tel:+639275671795"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-accent py-3.5 font-display text-sm font-semibold text-dark"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call
            </a>
            <a
              href="https://m.me/61576438250109"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-border-light py-3.5 font-display text-sm font-medium text-text"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.907 1.453 5.497 3.727 7.197V22l3.414-1.876c.91.252 1.876.389 2.859.389 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.07 12.456l-2.547-2.72L5.89 14.456l4.999-5.304 2.547 2.72 4.633-2.72-4.999 5.304z" />
              </svg>
              Message
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
