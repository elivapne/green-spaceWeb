"use client";

import { Lang, translations } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

export default function HowItWorks({ lang }: { lang: Lang }) {
  const t = translations[lang];

  return (
    <section className="section" id="process">
      <div className="container">
        <Reveal>
          <h2 className="text-3xl font-semibold">{t.how.title}</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {t.how.steps.map((step, index) => (
            <Reveal key={step}>
              <div className="glass rounded-2xl p-5">
                <span className="text-xs font-semibold text-gs-lime">
                  0{index + 1}
                </span>
                <p className="mt-3 text-sm text-gs-text/80">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
