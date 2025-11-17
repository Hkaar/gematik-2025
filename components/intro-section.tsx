"use client";

import IntroGrid from "@/components/intro-grid";

import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/i18n";

export default function IntroSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.intro.title}
          </h2>
          <p className="text-lg text-muted-foreground">{t.intro.subtitle}</p>
        </div>

        <IntroGrid />
      </div>
    </section>
  );
}
