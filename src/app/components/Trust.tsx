const steps = [
  {
    number: "1",
    title: "Message me",
    description: "Send me a message on Facebook or give me a call. Tell me what you need — a home, land, or insurance.",
  },
  {
    number: "2",
    title: "Free consultation",
    description: "We'll talk through your options. No pressure, no fees — just honest advice tailored to your situation.",
  },
  {
    number: "3",
    title: "Get started",
    description: "Once you're ready, I'll handle the process from start to finish. You focus on your life.",
  },
];

export default function Trust() {
  return (
    <section id="proof" className="relative py-14 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mb-8 flex items-center gap-4 lg:mb-16">
          <div className="h-[1px] w-12 bg-accent" />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            How It Works
          </span>
        </div>

        <div className="mb-8 lg:mb-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl">
            Simple lang<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Steps — always show descriptions */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-border bg-surface/50 p-4 sm:p-5 lg:border-0 lg:bg-transparent lg:p-0"
            >
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-bold text-accent lg:mb-4 lg:h-10 lg:w-10">
                {step.number}
              </div>

              <h3 className="mb-1.5 font-display text-[14px] font-semibold text-text lg:mb-2 lg:text-lg">
                {step.title}
              </h3>

              <p className="font-body text-[13px] leading-relaxed text-text-muted lg:text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-8 sm:pt-12 lg:mt-16">
          {[
            "Licensed Real Estate Agent",
            "Accredited Insurance Advisor",
            "Based in Arayat, Pampanga",
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2.5">
              <svg className="h-5 w-5 shrink-0 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <span className="font-body text-[13px] text-text-muted lg:text-sm">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
