"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/animation/animated-counter";

import HeroImage from "@/public/images/hero.jpg";

import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/i18n";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      className="relative flex min-h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${HeroImage.src})` }}
    >
      <div className="flex flex-1 items-center justify-center overflow-hidden bg-linear-to-b from-background via-secondary/15 to-background px-4 py-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <p className="text-primary font-semibold text-sm">{t.hero.badge}</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 leading-tight tracking-tight text-balance">
            {t.hero.title}{" "}
            <span className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed bg-neutral-700/10 px-3 py-2 rounded-2xl">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/join">
                {t.hero.getStarted} <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="default"
              className="text-primary-foreground bg-accent"
            >
              <Link href="/programs">{t.hero.explorePrograms}</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {t.hero.stats.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl font-bold text-primary mb-2">
                  <AnimatedCounter end={stat.number} label={stat.numberLabel} />
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
