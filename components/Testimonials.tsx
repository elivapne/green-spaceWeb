"use client";

import { Lang, translations } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

export default function Testimonials({ lang }: { lang: Lang }) {
  const t = translations[lang];

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <h2 className="text-3xl font-semibold">{t.testimonials.title}</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((item) => (
            <Reveal key={item.name}>
              <div className="glass rounded-3xl p-6">
                <p className="text-sm text-gs-text/80">“{item.quote}”</p>
                <div className="mt-4 text-xs text-gs-text/50">
                  <span className="font-semibold text-gs-text/70">{item.name}</span>
                  <span className="mx-2">|</span>
                  <span>{item.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
