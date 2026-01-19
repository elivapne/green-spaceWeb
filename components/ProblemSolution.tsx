"use client";

import { Lang, translations } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

export default function ProblemSolution({ lang }: { lang: Lang }) {
  const t = translations[lang];

  return (
    <section className="section" aria-labelledby="problem-title">
      <div className="container">
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-gs-border/10 bg-gs-deep p-8 md:grid-cols-2">
            <div>
              <h2 id="problem-title" className="text-3xl font-semibold">
                {t.problem.title}
              </h2>
              <p className="mt-4 text-gs-text/70">{t.problem.pain}</p>
            </div>
            <div className="rounded-2xl bg-gs-text/5 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-gs-lime/70">
                {lang === "he" ? "הפתרון" : "Solution"}
              </p>
              <p className="mt-3 text-gs-text/80">{t.problem.solution}</p>
              <div className="mt-6 flex gap-3">
                <span className="badge">AI</span>
                <span className="badge">Architecture</span>
                <span className="badge">Execution</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
