"use client";

import { Lang, translations } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";
import Image from "next/image";

export default function StylesGallery({ lang }: { lang: Lang }) {
  const t = translations[lang];

  const styles = [
    // Style images (place files in `/public/images/`).
    { ...t.styles.tropical, img: "/images/style-tropical.jpg" },
    { ...t.styles.modern, img: "/images/style-modern.jpg" },
    { ...t.styles.med, img: "/images/style-mediterranean.jpg" }
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold">{t.styles.title}</h3>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {styles.map((style) => (
          <div key={style.title} className="glass rounded-2xl p-5">
            <div className="overflow-hidden rounded-xl border border-gs-border/10 bg-gs-text/5">
              <Image
                src={style.img}
                alt={lang === "he" ? `סגנון: ${style.title}` : `Style: ${style.title}`}
                width={900}
                height={540}
                className="h-24 w-full object-cover"
              />
            </div>
            <h4 className="mt-4 text-lg font-semibold">{style.title}</h4>
            <p className="mt-2 text-sm text-gs-text/70">{style.vibe}</p>
            <button
              type="button"
              className="mt-4 text-sm font-semibold text-gs-lime"
              onClick={() => trackEvent("try_style", { lang, style: style.title })}
            >
              {t.styles.try}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
