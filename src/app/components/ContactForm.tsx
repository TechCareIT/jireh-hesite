"use client";

import { useState } from "react";

const services = [
  { id: "home", label: "Home / Rent-to-Own", icon: "🏠" },
  { id: "land", label: "Land Acquisition", icon: "🗺️" },
  { id: "insurance", label: "Life & Health Insurance", icon: "🛡️" },
  { id: "protection", label: "Accident & Protection", icon: "❤️" },
];

type FormData = {
  service: string;
  name: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>({
    service: "",
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 4;

  const next = () => setStep((s) => Math.min(s + 1, totalSteps));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = () => {
    // TODO: Wire to Formspree / Supabase / Google Sheet
    console.log("📩 Form submission:", data);
    setSubmitted(true);
  };

  const canProceed = () => {
    if (step === 0) return data.service !== "";
    if (step === 1) return data.name.trim().length >= 2;
    if (step === 2) return data.phone.trim().length >= 10;
    return true;
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-6 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-2xl">
          ✓
        </div>
        <h3 className="font-display text-xl font-bold text-text sm:text-2xl">
          Salamat!
        </h3>
        <p className="mt-2 font-body text-sm text-text-muted">
          I&apos;ll get back to you as soon as possible, {data.name.split(" ")[0]}.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="tel:+639275671795"
            className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-sm font-semibold text-dark active:scale-[0.97]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call me instead
          </a>
          <a
            href="https://m.me/61576438250109"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border-light px-6 py-3 font-display text-sm font-medium text-text active:scale-[0.97]"
          >
            Message
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Progress bar */}
      <div className="mb-6 flex items-center gap-2">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-500 ${
              i <= step ? "bg-accent" : "bg-border"
            }`}
          />
        ))}
      </div>

      {/* Steps container */}
      <div className="relative min-h-[220px]">
        {/* Step 0: Service selection */}
        <div
          className={`transition-all duration-400 ${
            step === 0
              ? "relative opacity-100 translate-x-0"
              : "absolute inset-0 opacity-0 pointer-events-none -translate-x-8"
          }`}
        >
          <p className="mb-1 font-display text-lg font-bold text-text sm:text-xl">
            What can I help you with?
          </p>
          <p className="mb-5 font-body text-[13px] text-text-muted">
            Pick one — or message me if it&apos;s something else.
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setData({ ...data, service: s.id });
                  // Auto-advance after selection
                  setTimeout(() => setStep(1), 300);
                }}
                className={`flex items-center gap-2.5 rounded-xl border px-4 py-3.5 text-left transition-all active:scale-[0.97] ${
                  data.service === s.id
                    ? "border-accent bg-accent/10 text-text"
                    : "border-border bg-surface/50 text-text-muted"
                }`}
              >
                <span className="text-lg">{s.icon}</span>
                <span className="font-body text-[13px] font-medium leading-tight">{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 1: Name */}
        <div
          className={`transition-all duration-400 ${
            step === 1
              ? "relative opacity-100 translate-x-0"
              : step < 1
              ? "absolute inset-0 opacity-0 pointer-events-none translate-x-8"
              : "absolute inset-0 opacity-0 pointer-events-none -translate-x-8"
          }`}
        >
          <p className="mb-1 font-display text-lg font-bold text-text sm:text-xl">
            What&apos;s your name?
          </p>
          <p className="mb-5 font-body text-[13px] text-text-muted">
            So I know who I&apos;m talking to.
          </p>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            onKeyDown={(e) => e.key === "Enter" && canProceed() && next()}
            placeholder="e.g. Juan Dela Cruz"
            className="w-full rounded-xl border border-border bg-surface/50 px-4 py-4 font-body text-base text-text placeholder:text-text-dim focus:border-accent focus:outline-none"
            autoFocus={step === 1}
            style={{ fontSize: "16px" }}
          />
        </div>

        {/* Step 2: Phone */}
        <div
          className={`transition-all duration-400 ${
            step === 2
              ? "relative opacity-100 translate-x-0"
              : step < 2
              ? "absolute inset-0 opacity-0 pointer-events-none translate-x-8"
              : "absolute inset-0 opacity-0 pointer-events-none -translate-x-8"
          }`}
        >
          <p className="mb-1 font-display text-lg font-bold text-text sm:text-xl">
            Best number to reach you?
          </p>
          <p className="mb-5 font-body text-[13px] text-text-muted">
            I&apos;ll call or text — whichever you prefer.
          </p>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            onKeyDown={(e) => e.key === "Enter" && canProceed() && next()}
            placeholder="09XX XXX XXXX"
            className="w-full rounded-xl border border-border bg-surface/50 px-4 py-4 font-body text-base text-text placeholder:text-text-dim focus:border-accent focus:outline-none"
            autoFocus={step === 2}
            style={{ fontSize: "16px" }}
          />
        </div>

        {/* Step 3: Message (optional) */}
        <div
          className={`transition-all duration-400 ${
            step === 3
              ? "relative opacity-100 translate-x-0"
              : step < 3
              ? "absolute inset-0 opacity-0 pointer-events-none translate-x-8"
              : "absolute inset-0 opacity-0 pointer-events-none -translate-x-8"
          }`}
        >
          <p className="mb-1 font-display text-lg font-bold text-text sm:text-xl">
            Anything else?
          </p>
          <p className="mb-5 font-body text-[13px] text-text-muted">
            Optional — but helps me prepare for our conversation.
          </p>
          <textarea
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            placeholder="e.g. Looking for a 2BR house in Pampanga..."
            rows={3}
            className="w-full resize-none rounded-xl border border-border bg-surface/50 px-4 py-4 font-body text-base text-text placeholder:text-text-dim focus:border-accent focus:outline-none"
            autoFocus={step === 3}
            style={{ fontSize: "16px" }}
          />
        </div>
      </div>

      {/* Navigation buttons */}
      {step > 0 && (
        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={back}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border text-text-muted active:scale-[0.97]"
            aria-label="Back"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {step < totalSteps - 1 ? (
            <button
              onClick={next}
              disabled={!canProceed()}
              className={`flex h-12 flex-1 items-center justify-center rounded-full font-display text-sm font-semibold transition-all active:scale-[0.97] ${
                canProceed()
                  ? "bg-accent text-dark"
                  : "bg-border text-text-dim cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-accent font-display text-sm font-semibold text-dark active:scale-[0.97]"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              Send Inquiry
            </button>
          )}
        </div>
      )}
    </div>
  );
}
