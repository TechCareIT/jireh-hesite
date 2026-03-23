"use client";

import { useEffect, useState } from "react";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const contactInView = rect.top < window.innerHeight && rect.bottom > 0;
        setVisible(window.scrollY > 300 && !contactInView);
      } else {
        setVisible(window.scrollY > 300);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-dark/95 px-4 pb-[env(safe-area-inset-bottom,8px)] pt-3 backdrop-blur-xl transition-all duration-300 lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center gap-3">
        <a
          href="tel:+639275671795"
          className="flex h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-accent font-display text-sm font-semibold text-dark active:scale-[0.97]"
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
          className="flex h-[48px] flex-1 items-center justify-center gap-2 rounded-full border border-border-light font-display text-sm font-medium text-text active:scale-[0.97]"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.907 1.453 5.497 3.727 7.197V22l3.414-1.876c.91.252 1.876.389 2.859.389 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.07 12.456l-2.547-2.72L5.89 14.456l4.999-5.304 2.547 2.72 4.633-2.72-4.999 5.304z" />
          </svg>
          Message
        </a>
      </div>
    </div>
  );
}
