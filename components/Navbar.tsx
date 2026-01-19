"use client";

import { useEffect, useState } from "react";
import { Lang, translations } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";
import Image from "next/image";
import Link from "next/link";

type Props = {
  lang: Lang;
  onToggleLang: () => void;
};

function NavLogo() {
  // If the JPEG isn't present yet, avoid Next image-optimizer errors by using `unoptimized` and fallback to SVG.
  const [src, setSrc] = useState("/images/greenspace-logo.jpeg");

  return (
    <span className="relative block h-9 w-9 md:h-12 md:w-12">
      <Image
        src={src}
        alt="לוגו גרין-ספייס"
        fill
        sizes="(max-width: 768px) 36px, 48px"
        unoptimized
        className="rounded-xl object-contain shadow-sm ring-1 ring-gs-border/10"
        priority
        onError={() => setSrc("/favicon.svg")}
      />
    </span>
  );
}

export default function Navbar({ lang, onToggleLang }: Props) {
  const t = translations[lang];
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("gs_theme");
    const initial = saved === "light" ? "light" : "dark";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      window.localStorage.setItem("gs_theme", next);
      trackEvent("theme_toggle", { lang, theme: next });
      return next;
    });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div
        className={`container flex items-center justify-between gap-6 py-4 ${lang === "he" ? "flex-row-reverse" : ""}`}
      >
        {/* Branding: logo + wordmark (clickable to homepage) */}
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold"
          aria-label={lang === "he" ? "דף הבית" : "Home"}
          onClick={() => trackEvent("nav_home", { lang })}
        >
          {/* Logo: `/public/images/greenspace-logo.jpeg` */}
          <NavLogo />
          <span className="flex items-center gap-2">
            <span className="gradient-text">גרין-ספייס</span>
            <span className="text-white/40">|</span>
            <span className="text-white/75">GreenSpace</span>
          </span>
        </Link>
        <div className="hidden items-center gap-6 text-xs text-white/70 lg:flex">
          <a href="#services" className="hover:text-white">
            {t.nav.services}
          </a>
          <a href="#instant" className="hover:text-white">
            {t.nav.instant}
          </a>
          <a href="#quote" className="hover:text-white">
            {t.nav.quote}
          </a>
          <a href="#projects" className="hover:text-white">
            {t.nav.projects}
          </a>
          <a href="#faq" className="hover:text-white">
            {t.nav.faq}
          </a>
          <a href="#contact" className="hover:text-white">
            {t.nav.contact}
          </a>
        </div>
        <div className="flex items-center gap-3">
          {/* Theme toggle (default = dark) */}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-gs-green/60"
            aria-label={theme === "dark" ? "מעבר למצב בהיר" : "מעבר למצב כהה"}
          >
            <span className="hidden sm:inline">{theme === "dark" ? "Dark" : "Light"}</span>
            <span aria-hidden="true" className="inline-flex">
              {theme === "dark" ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 12.5A8.5 8.5 0 0 1 11.5 3a7 7 0 1 0 9.5 9.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </span>
          </button>
          <button
            type="button"
            onClick={onToggleLang}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70 hover:text-white"
            aria-label="Toggle language"
          >
            {lang === "he" ? "HE" : "EN"}
          </button>
          <a
            href="#instant"
            className="btn-primary"
            onClick={() => trackEvent("cta_nav", { lang })}
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}
