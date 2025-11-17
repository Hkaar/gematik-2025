"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import SlideUp from "./animation/slide-up";

import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/i18n";

export default function FeaturesShowcase() {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      title: t.features.programs.title,
      description: t.features.programs.description,
      href: "/programs",
      color: "from-primary/20 to-primary/5",
      icon: "📚",
    },
    {
      title: t.features.stories.title,
      description: t.features.stories.description,
      href: "/stories",
      color: "from-accent/20 to-accent/5",
      icon: "⭐",
    },
    {
      title: t.features.resources.title,
      description: t.features.resources.description,
      href: "/resources",
      color: "from-secondary/20 to-secondary/5",
      icon: "📖",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.features.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <SlideUp key={i} delay={1 + i / 2}>
              <Link href={feature.href}>
                <Card
                  className={`h-full p-8 bg-linear-to-br ${feature.color} border-border hover:border-accent hover:shadow-xl transition-all duration-300 cursor-pointer group`}
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3.5">
                      <div className="flex items-center gap-2.5">
                        <div className="text-3xl">{feature.icon}</div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    <div className="inline-flex items-center text-primary group-hover:gap-2 gap-1 transition-all duration-300">
                      <span className="font-semibold">
                        {t.features.learnMore}
                      </span>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </Card>
              </Link>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
