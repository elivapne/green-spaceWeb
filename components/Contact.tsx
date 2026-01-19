"use client";

import { Lang, translations } from "@/lib/i18n";
import { trackEvent } from "@/lib/analytics";
import Reveal from "@/components/Reveal";

export default function Contact({ lang }: { lang: Lang }) {
  const t = translations[lang];

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal>
          <div className="grid gap-10 rounded-3xl border border-gs-border/10 bg-gs-deep p-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-semibold">{t.contact.title}</h2>
              <p className="mt-3 text-gs-text/70">{t.contact.subtitle}</p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#"
                  className="btn-secondary"
                  onClick={() => trackEvent("whatsapp_click", { lang })}
                >
                  {t.contact.whatsapp}
                </a>
                <span className="text-xs text-gs-text/40">24/7</span>
              </div>
            </div>
            <form className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input className="input-dark" placeholder={t.contact.fields.name} />
                <input className="input-dark" placeholder={t.contact.fields.phone} />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input className="input-dark" placeholder={t.contact.fields.email} />
                <input className="input-dark" placeholder={t.contact.fields.city} />
              </div>
              <label className="input-dark flex cursor-pointer items-center gap-3 text-xs text-gs-text/50">
                <span className="badge">+</span>
                {t.contact.fields.upload}
                <input className="hidden" type="file" />
              </label>
              <textarea
                className="input-dark min-h-[120px]"
                placeholder={t.contact.fields.message}
              />
              <button
                type="submit"
                className="btn-primary"
                onClick={() => trackEvent("contact_submit", { lang })}
              >
                {t.contact.submit}
              </button>
              <p className="text-xs text-gs-text/40">{t.contact.privacy}</p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
