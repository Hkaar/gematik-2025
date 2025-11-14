import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Code, Zap, Users, Briefcase, Palette } from "lucide-react"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Programs | GEMPAR",
  description: "Programs provided by us to empower youths for a new age",
};

export default function ProgramsPage() {
  const programs = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Tech Bootcamp",
      description: "Master modern web development, AI, and emerging technologies with hands-on projects.",
      duration: "12 weeks",
      level: "All levels",
      color: "border-primary",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Entrepreneurship Accelerator",
      description: "Launch and scale your startup with mentorship from successful founders.",
      duration: "8 weeks",
      level: "Intermediate",
      color: "border-accent",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Leadership",
      description: "Develop leadership skills through design thinking and creative problem-solving.",
      duration: "10 weeks",
      level: "All levels",
      color: "border-secondary",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Impact Innovation",
      description: "Create solutions for real-world social and environmental challenges.",
      duration: "12 weeks",
      level: "Advanced",
      color: "border-primary",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Building",
      description: "Learn to build, manage, and scale communities with purpose and impact.",
      duration: "8 weeks",
      level: "Intermediate",
      color: "border-accent",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Career Mastery",
      description: "Navigate career transitions and build a personal brand that stands out.",
      duration: "6 weeks",
      level: "All levels",
      color: "border-secondary",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Our Programs</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from a variety of programs designed to develop your skills, mindset, and impact potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <Card
                key={i}
                className={`p-8 bg-card border-2 ${program.color} hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-primary mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full">
                    {program.duration}
                  </span>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">{program.level}</span>
                </div>
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="/join">Enroll Now</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
