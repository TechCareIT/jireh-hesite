export default function CTA() {
  return (
    <section id="contact" className="grain relative overflow-hidden py-14 lg:py-32">
      <div className="absolute inset-0 bg-surface-2" />
      <div className="glow-blob left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center lg:px-10">
        <h2 className="font-display text-2xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Ready to make
          <br />
          <span className="bg-gradient-to-r from-accent to-[#F0A87A] bg-clip-text text-transparent">
            your move?
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-md font-body text-[14px] text-text-muted lg:mt-5 lg:text-lg">
          Free consultation, no pressure — let&apos;s figure out the best move for you.
        </p>

        {/* Buttons — full width stacked on mobile */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:mt-10">
          <a
            href="tel:+639275671795"
            className="btn-primary flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call Now
          </a>
          <a
            href="https://m.me/61576438250109"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.907 1.453 5.497 3.727 7.197V22l3.414-1.876c.91.252 1.876.389 2.859.389 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.07 12.456l-2.547-2.72L5.89 14.456l4.999-5.304 2.547 2.72 4.633-2.72-4.999 5.304z" />
            </svg>
            Message on Facebook
          </a>
        </div>

        {/* Phone — tappable on mobile */}
        <a href="tel:+639275671795" className="mt-5 inline-block font-display text-base font-medium text-text-muted active:text-accent lg:text-sm">
          (+63) 927 567 1795
        </a>
        <p className="mt-1 font-body text-[11px] text-text-dim">
          Arayat, Pampanga &middot; Free consultation
        </p>
      </div>
    </section>
  );
}
