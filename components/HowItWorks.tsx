"use client";

import { Lang, translations } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

export default function HowItWorks({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const icons = [
    // Inline SVG icons for each step (both modes).
    <svg key="upload" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 16V4M12 4L7 9M12 4L17 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>,
    <svg key="visuals" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>,
    <svg key="meeting" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 18v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>,
    <svg key="build" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3 21l3-3m2-2 6-6 4 4-6 6-2 2-5 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    <svg key="handover" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 7h16M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 11h6M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ];
  const isRtl = lang === "he";

  return (
    <section className="section" id="process">
      <div className="container">
        <Reveal>
          <h2 className="text-3xl font-semibold">{t.how.title}</h2>
        </Reveal>
        {/* Both modes: aligned infographic container */}
        <div className="mt-8 rounded-3xl border border-gs-border/10 bg-gs-deep/80 p-6 shadow-card backdrop-blur md:p-10">
          <div className="relative">
            {/* Desktop connector line (single axis) */}
            <div
              className="pointer-events-none absolute left-8 right-8 top-8 hidden h-px bg-gs-emerald/40 md:block"
              aria-hidden="true"
            />
            {/* Mobile connector line (vertical) */}
            <div
              className="pointer-events-none absolute inset-x-1/2 top-6 hidden h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-gs-emerald/30 md:hidden"
              aria-hidden="true"
            />

            <div
              className={`flex flex-col items-center gap-8 md:flex-row md:justify-between ${
                // RTL/LTR handling for desktop flow
                isRtl ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {t.how.steps.map((step, index) => (
                <Reveal key={step}>
                  <div className="flex w-full flex-col items-center text-center md:w-[11rem]">
                    {/* Step badge + icon (aligned centerline) */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gs-green text-white shadow-glow">
                      {icons[index]}
                    </div>
                    <p className="mt-4 text-sm font-medium text-gs-text/90">{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
