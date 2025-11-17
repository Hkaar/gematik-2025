import Header from "@/components/header";
import Footer from "@/components/footer";
import ProgramCard from "@/components/program-card";

import { Metadata } from "next";

import BootcampImage from "@/public/images/bootcamp.jpg";
import BusinessImage from "@/public/images/business.jpg";
import LeadershipImage from "@/public/images/leadership.jpg";
import SustainableImage from "@/public/images/sustainable.jpg";
import CommunityImage from "@/public/images/community.jpg";
import MasteryImage from "@/public/images/mastery.jpg";

export const metadata: Metadata = {
  title: "Programs | GEMPAR",
  description: "Programs provided by us to empower youths for a new age",
};

export default function ProgramsPage() {
  const programs = [
    {
      title: "Tech Bootcamp",
      description:
        "Master modern web development, AI, and emerging technologies with hands-on projects.",
      image: BootcampImage.src,
      duration: "12 weeks",
      level: "All levels",
      color: "border-primary",
    },
    {
      title: "Entrepreneurship Accelerator",
      description:
        "Launch and scale your startup with mentorship from successful founders.",
      image: BusinessImage.src,
      duration: "8 weeks",
      level: "Intermediate",
      color: "border-accent",
    },
    {
      title: "Creative Leadership",
      description:
        "Develop leadership skills through design thinking and creative problem-solving.",
      image: LeadershipImage.src,
      duration: "10 weeks",
      level: "All levels",
      color: "border-secondary",
    },
    {
      title: "Impact Innovation",
      description:
        "Create solutions for real-world social and environmental challenges.",
      image: SustainableImage.src,
      duration: "12 weeks",
      level: "Advanced",
      color: "border-primary",
    },
    {
      title: "Community Building",
      description:
        "Learn to build, manage, and scale communities with purpose and impact.",
      image: CommunityImage.src,
      duration: "8 weeks",
      level: "Intermediate",
      color: "border-accent",
    },
    {
      title: "Career Mastery",
      description:
        "Navigate career transitions and build a personal brand that stands out.",
      image: MasteryImage.src,
      duration: "6 weeks",
      level: "All levels",
      color: "border-secondary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header active="/programs" />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Our Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from a variety of programs designed to develop your skills,
              mindset, and impact potential.
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
