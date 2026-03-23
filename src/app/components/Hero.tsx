import Image from "next/image";

export default function Hero() {
  return (
    <section className="grain relative overflow-hidden">
      <div className="glow-blob -top-32 right-1/4 h-[500px] w-[500px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-24 pb-10 lg:grid lg:min-h-screen lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-10 lg:pt-0 lg:pb-16">

        {/* ── Mobile: Text first, then photo ── */}
        {/* ── Desktop: Text left, photo right ── */}

        {/* Text content */}
        <div className="lg:order-first">
          <div className="animate-fade-up delay-1 mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 lg:mb-8 lg:px-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-body text-[11px] text-text-muted lg:text-xs">
              Available for new clients
            </span>
          </div>

          <h1 className="animate-fade-up delay-2 font-display text-[2rem] leading-[1.1] font-bold tracking-tight text-text sm:text-5xl lg:text-[clamp(2.5rem,6vw,4.5rem)]">
            Own more.
            <br />
            Protect more.
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-accent to-[#F0A87A] bg-clip-text text-transparent">
                Worry less
              </span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                <path d="M1 5.5C40 2 80 1 100 3C120 5 160 6 199 2.5" stroke="#D4764E" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>
            <span className="text-accent">.</span>
          </h1>

          <p className="animate-fade-up delay-3 mt-4 max-w-lg font-body text-[15px] leading-relaxed text-text-muted lg:mt-6 lg:text-lg">
            Looking for the right investment, protection, or property? Ako na
            bahala. I&apos;m Jireh — your partner in smart decisions.
          </p>

          {/* Mobile: single CTA — sticky bar handles the rest */}
          <div className="animate-fade-up delay-4 mt-6 lg:mt-10">
            {/* Mobile: one clean button */}
            <a href="#contact" className="btn-primary flex items-center justify-center rounded-full px-8 py-4 text-sm lg:hidden">
              Get in Touch — Free Consultation
            </a>
            {/* Desktop: two buttons side by side */}
            <div className="hidden lg:flex lg:items-center lg:gap-4">
              <a href="tel:+639275671795" className="btn-primary flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Now
              </a>
              <a href="https://m.me/61576438250109" target="_blank" rel="noopener noreferrer" className="btn-ghost flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.907 1.453 5.497 3.727 7.197V22l3.414-1.876c.91.252 1.876.389 2.859.389 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.07 12.456l-2.547-2.72L5.89 14.456l4.999-5.304 2.547 2.72 4.633-2.72-4.999 5.304z" />
                </svg>
                Message on Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Photo — after text on mobile, right side on desktop */}
        <div className="animate-fade-up delay-4 relative mt-8 lg:order-last lg:mt-0 lg:animate-slide-right">
          <div className="relative mx-auto max-w-[200px] sm:max-w-[240px] lg:max-w-none">
            <div className="absolute -top-2 -right-2 z-0 h-full w-full rounded-2xl border border-accent/20 lg:-top-4 lg:-right-4" />
            <div className="relative z-10 aspect-square w-full overflow-hidden rounded-2xl lg:aspect-[3/4] lg:max-w-[420px]">
              <Image
                src="/jiji.JPG"
                alt="Jireh Hesite"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 420px"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark to-transparent" />

              {/* Badge — compact on mobile, full on desktop */}
              <div className="absolute bottom-2 left-2 z-20 flex items-center gap-1.5 rounded-md border border-border bg-dark/80 px-2 py-1 backdrop-blur-md lg:bottom-6 lg:left-6 lg:gap-3 lg:rounded-xl lg:px-4 lg:py-3">
                <svg className="h-3 w-3 shrink-0 text-accent lg:hidden" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span className="font-display text-[9px] font-semibold text-text lg:hidden">Licensed</span>
                {/* Desktop full badge */}
                <div className="hidden lg:flex lg:items-center lg:gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-xs font-semibold text-text">Licensed Agent</p>
                    <p className="font-body text-[10px] text-text-muted">Real Estate & Insurance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats — sits under photo on mobile */}
          <div className="animate-fade-up delay-5 mt-6 flex justify-center gap-6 lg:mt-0 lg:hidden">
            {[
              { value: "100+", label: "Clients served" },
              { value: "4", label: "Service lines" },
              { value: "Pampanga", label: "Based in Arayat" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-lg font-bold text-text">{stat.value}</p>
                <p className="font-body text-[10px] text-text-dim">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Stats — desktop only, below photo area */}
          <div className="mt-14 hidden gap-10 lg:flex">
            {[
              { value: "100+", label: "Clients served" },
              { value: "4", label: "Service lines" },
              { value: "\u{1F4CD}", label: "Arayat, Pampanga" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-text">{stat.value}</p>
                <p className="mt-0.5 font-body text-xs text-text-dim">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
