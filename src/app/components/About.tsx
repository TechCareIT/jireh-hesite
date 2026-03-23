import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-14 lg:py-32">
      <div className="absolute inset-0 bg-surface" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mb-8 flex items-center gap-4 lg:mb-16">
          <div className="h-[1px] w-12 bg-accent" />
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            About
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-20">
          {/* Photo — square crop on mobile, taller on desktop */}
          <div className="relative mx-auto w-full max-w-[240px] lg:mx-0 lg:max-w-none">
            <div className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/5]">
              <Image
                src="/jiji2.jpeg"
                alt="Jireh Hesite"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 240px, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>
          </div>

          <div>
            <h2 className="font-display text-[1.4rem] font-bold tracking-tight text-text sm:text-3xl lg:text-4xl">
              Young. Hungry.
              <br />
              <span className="bg-gradient-to-r from-accent to-[#F0A87A] bg-clip-text text-transparent">
                Relentlessly reliable.
              </span>
            </h2>

            <div className="mt-5 space-y-4 font-body text-[14px] leading-relaxed text-text-muted lg:mt-8 lg:space-y-5 lg:text-base">
              <p>
                I&apos;m Jireh Hesite, based in Arayat, Pampanga — your go-to
                partner in smart decisions when it comes to real estate and
                insurance.
              </p>
              <p>
                Whether it&apos;s finding a home, buying land, or securing your
                family&apos;s future — message me anytime for inquiries or a
                free consultation.
              </p>
              <p className="text-text font-medium">
                My goal? To help you own more, protect more, and worry less.
              </p>
            </div>

            {/* Value props */}
            <div className="mt-6 grid grid-cols-2 gap-2.5 lg:mt-10 lg:gap-4">
              {[
                { text: "Client-first", icon: <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg> },
                { text: "Always reachable", icon: <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg> },
                { text: "No hidden fees", icon: <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                { text: "Free consult", icon: <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg> },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 rounded-lg border border-border bg-dark/50 px-3 py-3 lg:px-4">
                  {item.icon}
                  <span className="font-body text-[13px] text-text-muted lg:text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
