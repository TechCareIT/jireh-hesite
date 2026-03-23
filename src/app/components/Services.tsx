const services = [
  {
    number: "01",
    title: "Home / Rent-to-Own",
    description: "Find the right rent-to-own deal that fits your budget and lifestyle.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Land Acquisition",
    description: "From small cuts to hectares — I'll guide you through the entire process.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Life & Health Insurance",
    description: "Plan your retirement the smart way with the right coverage.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Accident & Financial Protection",
    description: "Be ready for the unexpected with protection that covers your family.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-14 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mb-8 flex items-center gap-4 lg:mb-16">
          <div className="h-[1px] w-12 bg-accent" />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Services
          </span>
        </div>

        <div className="mb-6 lg:mb-12">
          <h2 className="font-display text-2xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
            Ako na bahala,
            <br />
            <span className="text-text-muted">whatever you need.</span>
          </h2>
        </div>

        {/* Mobile: compact cards. Desktop: hover rows */}
        <div className="flex flex-col gap-3 lg:gap-0 lg:border-t lg:border-border">
          {services.map((service) => (
            <div
              key={service.number}
              className="flex items-start gap-4 rounded-xl border border-border bg-surface/50 p-4 active:bg-surface lg:service-row lg:group lg:cursor-default lg:items-center lg:gap-10 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:py-10"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-text-muted lg:group-hover:border-accent/30 lg:group-hover:bg-accent/10 lg:group-hover:text-accent">
                {service.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-[15px] font-semibold text-text lg:text-xl lg:service-title">
                  {service.title}
                </h3>
                <p className="mt-1 font-body text-[13px] leading-relaxed text-text-muted lg:text-base">
                  {service.description}
                </p>
              </div>
              <span className="service-number hidden shrink-0 font-display text-sm font-medium text-text-dim lg:block">
                {service.number}
              </span>
              <svg
                className="service-arrow hidden h-5 w-5 shrink-0 -translate-x-2 text-accent opacity-0 transition-all lg:block"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
