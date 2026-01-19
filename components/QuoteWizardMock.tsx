"use client";

import { useState } from "react";
import { Lang, translations } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";
import Reveal from "@/components/Reveal";

export default function QuoteWizardMock({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const [showSummary, setShowSummary] = useState(false);
  const sunOptions = lang === "he" ? ["צפון", "מזרח", "דרום", "מערב"] : ["North", "East", "South", "West"];
  const windOptions = lang === "he" ? ["נמוכה", "בינונית", "גבוהה"] : ["Low", "Medium", "High"];
  const budgetOptions =
    lang === "he" ? ["₪60k-₪120k", "₪120k-₪250k", "₪250k+"] : ["₪60k-₪120k", "₪120k-₪250k", "₪250k+"];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowSummary(true);
    trackEvent("quote_generated", { lang });
  };

  return (
    <section className="section" id="quote">
      <div className="container">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold">{t.quote.title}</h2>
              <p className="mt-4 text-gs-text/70">{t.quote.subtitle}</p>
              <div className="mt-6 space-y-3 text-sm text-gs-text/60">
                <p>{t.quote.steps.dimensions}</p>
                <p>{t.quote.steps.sunWind}</p>
                <p>{t.quote.steps.budget}</p>
                <p>{t.quote.steps.style}</p>
              </div>
            </div>
            <form className="glass rounded-3xl p-6" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-xs text-gs-text/60">
                  {t.quote.fields.length}
                  <input className="input-dark mt-2" type="text" placeholder="4" />
                </label>
                <label className="text-xs text-gs-text/60">
                  {t.quote.fields.width}
                  <input className="input-dark mt-2" type="text" placeholder="3" />
                </label>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <label className="text-xs text-gs-text/60">
                  {t.quote.fields.sun}
                  <select className="input-dark mt-2">
                    {sunOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className="text-xs text-gs-text/60">
                  {t.quote.fields.wind}
                  <select className="input-dark mt-2">
                    {windOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="mt-4">
                <label className="text-xs text-gs-text/60">
                  {t.quote.fields.budget}
                  <select className="input-dark mt-2">
                    {budgetOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="mt-4">
                <label className="text-xs text-gs-text/60">
                  {t.quote.fields.style}
                  <select className="input-dark mt-2">
                    <option>{t.styles.tropical.title}</option>
                    <option>{t.styles.modern.title}</option>
                    <option>{t.styles.med.title}</option>
                  </select>
                </label>
              </div>
              <button type="submit" className="btn-primary mt-6 w-full">
                {t.quote.submit}
              </button>
            </form>
          </div>
        </Reveal>
        {showSummary && (
          <Reveal>
            <div className="mt-10 grid gap-6 rounded-3xl border border-gs-border/10 bg-gs-deep p-6 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gs-text/50">
                  {t.quote.summary.title}
                </p>
                <p className="mt-3 text-gs-text/80">
                  {lang === "he"
                    ? "חלל ירוק עם אזורי ישיבה והצללה רב-שכבתית."
                    : "A layered green lounge with shaded seating zones."}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gs-text/50">
                  {t.quote.summary.budget}
                </p>
                <p className="mt-3 text-gs-text/80">₪120k - ₪220k</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gs-text/50">
                  {t.quote.summary.materials}
                </p>
                <p className="mt-3 text-gs-text/80">
                  {lang === "he"
                    ? "דק עץ, אדניות בטון, צמחייה עמידה לשמש."
                    : "Wood decking, concrete planters, sun-tolerant planting."}
                </p>
              </div>
              <div className="md:col-span-3">
                <a
                  href="#contact"
                  className="btn-secondary"
                  onClick={() => trackEvent("quote_cta", { lang })}
                >
                  {t.quote.cta}
                </a>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
