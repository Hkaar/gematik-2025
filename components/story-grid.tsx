"use client";

import StoryCard from "@/components/story-card";

import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/i18n";

export default function StoryGrid() {
  const { language } = useLanguage();
  const t = translations[language];

  const stories = [
    {
      name: "Amara Williams",
      role: "Founded Ecoshot Studios",
      story:
        "Started as a curious teenager, now leading a team that has impacted 100k+ students globally. The mentorship and network from our programs were game-changers.",
      image: "👩‍💼",
      achievement: "Silent Drive Producer",
    },
    {
      name: "Karim Hassan",
      role: "Climate Tech Innovator",
      story:
        "Went from environmental studies to building AI solutions for carbon tracking. Found my co-founders and investors through the community.",
      image: "👨‍🔬",
      achievement: "$2M Raised",
    },
    {
      name: "Sophia Rodriguez",
      role: "Social Impact Leader",
      story:
        "Created a nonprofit connecting rural communities to digital opportunities. Built my entire leadership team and donor base through the program.",
      image: "👩‍🎓",
      achievement: "50K Lives Impacted",
    },
    {
      name: "Liam Chen",
      role: "AI Research Engineer",
      story:
        "Transitioned from uncertain career path to landing dream role at top AI lab. The skills training and interview prep were invaluable.",
      image: "👨‍💻",
      achievement: "AI Eons LLC.",
    },
    {
      name: "Zara Okafor",
      role: "Creative Director",
      story:
        "Built a global creative agency from scratch. The design thinking principles and community support helped me launch and scale successfully.",
      image: "🎨",
      achievement: "Agency Growth 500%",
    },
    {
      name: "James Park",
      role: "Product Manager",
      story:
        "Advanced from junior role to leading product strategy at leading tech company. The mentorship accelerated my growth by 5 years.",
      image: "📊",
      achievement: "VP of Product",
    },
  ];

  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          {t.stories.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t.stories.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, i) => (
          <StoryCard
            key={i}
            name={story.name}
            role={story.role}
            image={`https://placehold.co/100x100/EBF4FF/0F172A?text=${story.name.charAt(
              0
            )}`}
            achievement={story.achievement}
          >
            {story.story}
          </StoryCard>
        ))}
      </div>
    </>
  );
}
