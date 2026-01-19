"use client";

import { useState } from "react";
import { Lang, translations } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

export default function FAQ({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal>
          <h2 className="text-3xl font-semibold">{t.faq.title}</h2>
        </Reveal>
        <div className="mt-8 space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="glass w-full rounded-2xl px-5 py-4 text-start"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">{item.q}</span>
                    <span className="text-xs text-gs-text/50">
                      {isOpen ? "-" : "+"}
                    </span>
                  </div>
                  {isOpen && (
                    <p className="mt-3 text-sm text-gs-text/70">{item.a}</p>
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
