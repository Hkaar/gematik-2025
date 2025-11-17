"use client";

import ProgramCard from "@/components/program-card";

import BootcampImage from "@/public/images/bootcamp.jpg";
import BusinessImage from "@/public/images/business.jpg";
import LeadershipImage from "@/public/images/leadership.jpg";
import SustainableImage from "@/public/images/sustainable.jpg";
import CommunityImage from "@/public/images/community.jpg";
import MasteryImage from "@/public/images/mastery.jpg";

import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/i18n";

export default function ProgramGrid() {
  const { language } = useLanguage();
  const t = translations[language];

  const programs = [
    {
      title: t.programs.techBootcamp.title,
      description: t.programs.techBootcamp.description,
      duration: "12 weeks",
      level: "All levels",
      color: "border-primary",
      image: BootcampImage.src,
    },
    {
      title: t.programs.entrepreneurship.title,
      description: t.programs.entrepreneurship.description,
      duration: "8 weeks",
      level: "Intermediate",
      color: "border-accent",
      image: BusinessImage.src,
    },
    {
      title: t.programs.leadership.title,
      description: t.programs.leadership.description,
      duration: "10 weeks",
      level: "All levels",
      color: "border-secondary",
      image: LeadershipImage.src,
    },
    {
      title: t.programs.impact.title,
      description: t.programs.impact.description,
      duration: "12 weeks",
      level: "Advanced",
      color: "border-primary",
      image: SustainableImage.src,
    },
    {
      title: t.programs.community.title,
      description: t.programs.community.description,
      duration: "8 weeks",
      level: "Intermediate",
      color: "border-accent",
      image: CommunityImage.src,
    },
    {
      title: t.programs.career.title,
      description: t.programs.career.description,
      duration: "6 weeks",
      level: "All levels",
      color: "border-secondary",
      image: MasteryImage.src,
    },
  ];

  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          {t.programs.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t.programs.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, i) => (
          <ProgramCard
            key={i}
            title={program.title}
            description={program.description}
            image={program.image}
            duration={program.duration}
            level={program.level}
            color={program.color}
          />
        ))}
      </div>
    </>
  );
}
