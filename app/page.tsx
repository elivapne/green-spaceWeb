"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import InstantVisualization from "@/components/InstantVisualization";
import QuoteWizardMock from "@/components/QuoteWizardMock";
import HowItWorks from "@/components/HowItWorks";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Lang } from "@/lib/i18n";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("he");

  return (
    <div
      dir={lang === "he" ? "rtl" : "ltr"}
      className={`min-h-screen ${lang === "en" ? "font-en" : "font-sans"}`}
    >
      <Navbar
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === "he" ? "en" : "he"))}
      />
      <main>
        <Hero lang={lang} />
        <ProblemSolution lang={lang} />
        <InstantVisualization lang={lang} />
        <QuoteWizardMock lang={lang} />
        <HowItWorks lang={lang} />
        <CaseStudies lang={lang} />
        <Testimonials lang={lang} />
        <FAQ lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
