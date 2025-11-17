"use client";

import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/i18n";

export default function JoinPageStats() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <div className="mt-12 grid grid-cols-3 gap-4">
        {t.join.stats.map((item, i) => (
          <div key={i} className="text-center">
            <p className="text-2xl font-bold text-primary mb-1">
              {item.number}
            </p>
            <p className="text-xs text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </>
  );
}
