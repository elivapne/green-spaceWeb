"use client";

import { useState } from "react";
import { Lang, translations } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import Image from "next/image";

function ProjectCardImage({
  src,
  alt,
  fallbackSrc
}: {
  src: string;
  alt: string;
  fallbackSrc: string;
}) {
  // Branding UX: show a nice fallback if the user images aren't in `public/projects` yet.
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      // `unoptimized` avoids Next's image optimizer 500s when a file is missing (it would return HTML 404).
      unoptimized
      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:brightness-105"
      onError={() => setCurrentSrc(fallbackSrc)}
    />
  );
}

export default function CaseStudies({ lang }: { lang: Lang }) {
  const t = translations[lang];
  // Project image mapping (order matches `t.cases.cards`).
  const projectImages = [
    {
      src: "/projects/penthouse.jpg",
      alt: "פנטהאוז תל אביב – מרפסת 40 מ״ר | גרין-ספייס",
      fallbackSrc: "/images/project-1.svg"
    },
    {
      src: "/projects/rooftop-garden.jpg",
      alt: "גינת גג – מגדל יוקרה | גרין-ספייס",
      fallbackSrc: "/images/project-2.svg"
    },
    {
      src: "/projects/hosting-balcony.jpg",
      alt: "מרפסת אירוח – קו נקי | גרין-ספייס",
      fallbackSrc: "/images/project-3.svg"
    },
    {
      src: "/projects/family-green-corner.jpg",
      alt: "פינת ירוק למשפחה | גרין-ספייס",
      fallbackSrc: "/images/project-4.svg"
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <h2 className="text-3xl font-semibold">{t.cases.title}</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {t.cases.cards.map((card, index) => (
            <Reveal key={card.title}>
              <div className="glass group rounded-3xl p-6">
                {/* Project image (hover = subtle premium zoom/brightness) */}
                <div className="relative h-36 overflow-hidden rounded-2xl border border-gs-border/10 bg-gs-text/5">
                  <ProjectCardImage
                    src={projectImages[index]?.src ?? "/projects/penthouse.jpg"}
                    alt={projectImages[index]?.alt ?? `${card.title} | גרין-ספייס`}
                    fallbackSrc={projectImages[index]?.fallbackSrc ?? "/images/project-1.svg"}
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-gs-text/70">{card.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.cases.badges.map((badge) => (
                    <span key={`${card.title}-${badge}`} className="badge">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
