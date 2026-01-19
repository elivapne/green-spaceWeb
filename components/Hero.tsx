"use client";

import { Lang, translations } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";

export default function Hero({ lang }: { lang: Lang }) {
  const t = translations[lang];

  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 pb-16 pt-24 md:pb-24"
      style={{
        // Branding: hero-only background image (place file at `/public/images/greenspace-background.jpg`)
        backgroundImage: "url(/images/greenspace-background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Readability overlay: premium dark + green tint */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gs-black/80 via-gs-black/70 to-gs-black/90"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(42,214,124,0.22),transparent_45%)]"
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="max-w-3xl space-y-6 hero-fade">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gs-lime/80">
            GreenSpace AI
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            {t.hero.headline}
          </h1>
          <p className="text-base text-white/85 md:text-lg">
            {t.hero.subheadline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#instant"
              className="btn-primary"
              onClick={() => trackEvent("cta_hero_primary", { lang })}
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="#quote"
              className="btn-secondary"
              onClick={() => trackEvent("cta_hero_secondary", { lang })}
            >
              {t.hero.secondaryCta}
            </a>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-white/85">
            {t.hero.trust.map((item) => (
              <span key={item} className="badge">
                {item}
              </span>
            ))}
          </div>
        </div>
        {/* Removed: Before/After (Raw Photo / AI Render) comparison block as requested. */}
      </div>
    </section>
  );
}
