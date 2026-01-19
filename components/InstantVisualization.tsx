"use client";

import { useState } from "react";
import { Lang, translations } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";
import Reveal from "@/components/Reveal";
import StylesGallery from "@/components/StylesGallery";

export default function InstantVisualization({ lang }: { lang: Lang }) {
  const t = translations[lang];
  const [isLoading, setIsLoading] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  const handleGenerate = () => {
    setIsLoading(true);
    trackEvent("generate_visual", { lang });
    setTimeout(() => {
      setIsLoading(false);
      setHasResult(true);
    }, 1400);
  };

  return (
    <section className="section" id="instant">
      <div className="container space-y-10">
        <Reveal>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">{t.instant.title}</h2>
            <p className="max-w-2xl text-gs-text/70">{t.instant.subtitle}</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <StylesGallery lang={lang} />
            <div className="glass rounded-3xl p-6">
              <div className="rounded-2xl border border-dashed border-gs-border/25 px-6 py-8 text-center">
                <p className="text-sm text-gs-text/70">{t.instant.upload.title}</p>
                <div className="mt-4 flex flex-col items-center gap-3">
                  <button className="btn-secondary" type="button">
                    {t.instant.upload.button}
                  </button>
                  <span className="text-xs text-gs-text/40">PNG / JPG עד 10MB</span>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  className="btn-primary w-full"
                  onClick={handleGenerate}
                  disabled={isLoading}
                  aria-live="polite"
                >
                  {isLoading ? t.instant.upload.loading : t.instant.upload.generate}
                </button>
              </div>
              <div className="mt-6 rounded-2xl bg-gs-text/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-gs-text/50">
                  {t.instant.upload.result}
                </p>
                <div className="mt-3 h-32 rounded-xl bg-gradient-to-br from-gs-green/30 via-gs-emerald/20 to-transparent">
                  <div className="flex h-full items-center justify-center text-xs text-gs-text/60">
                    {hasResult
                      ? lang === "he"
                        ? "הדמיה מוכנה"
                        : "Visualization ready"
                      : lang === "he"
                      ? "התוצאה תופיע כאן"
                      : "Result will appear here"}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-gs-text/50">{t.instant.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
