"use client";

import { Lang, translations } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  const t = translations[lang];

  return (
    <footer className="border-t border-gs-border/10 px-6 py-10">
      <div className="container flex flex-col gap-6 text-xs text-gs-text/50 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-gs-text/70">{t.footer.details}</p>
          <p className="mt-2">info@greenspace.co.il · 03-0000000</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gs-text">
            Instagram
          </a>
          <a href="#" className="hover:text-gs-text">
            Behance
          </a>
          <a href="#" className="hover:text-gs-text">
            LinkedIn
          </a>
        </div>
        <div>© 2025 {t.footer.rights}</div>
      </div>
    </footer>
  );
}
