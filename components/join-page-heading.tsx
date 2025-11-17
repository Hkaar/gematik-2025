"use client";

import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/i18n";

export default function JoinPageHeading() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          {t.join.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {t.join.subtitle}
        </p>
      </div>
    </>
  );
}
