"use client";

import { Lang, translations } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

export default function HowItWorks({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const isRtl = lang === "he";
  const numbers = isRtl ? ["א", "ב", "ג", "ד", "ה"] : ["1", "2", "3", "4", "5"];

  return (
    <section className="section" id="process">
      <div className="container">
        <Reveal>
          <h2 className="text-3xl font-semibold">{t.how.title}</h2>
        </Reveal>
        {/* Both modes: aligned step row (RTL/LTR via flex direction) */}
        <div className="mt-8 rounded-3xl border border-gs-border/10 bg-gs-deep/80 p-6 shadow-card backdrop-blur md:p-10">
          <div
            className={`flex flex-col items-center gap-8 md:flex-row md:justify-between ${
              // RTL/LTR handling for desktop flow
              isRtl ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {t.how.steps.map((step, index) => (
              <Reveal key={step}>
                <div className="flex w-full flex-col items-center text-center md:w-[11rem]">
                  {/* Step number badge (no icons/arrows) */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gs-green text-white shadow-glow">
                    <span className="text-sm font-semibold">{numbers[index] ?? index + 1}</span>
                  </div>
                  <p className="mt-4 text-sm font-medium text-gs-text/90">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
