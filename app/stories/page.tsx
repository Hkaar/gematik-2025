"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function StoriesPage() {
  const stories = [
    {
      name: "Amara Williams",
      role: "Founded EdTech Startup",
      story:
        "Started as a curious teenager, now leading a team that has impacted 100k+ students globally. The mentorship and network from our programs were game-changers.",
      image: "👩‍💼",
      achievement: "Series A Funded",
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
      achievement: "Top AI Company",
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
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Success Stories</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real people, real achievements. Discover how our community members are making waves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, i) => (
              <Card
                key={i}
                className="p-8 bg-card border-border hover:border-accent hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{story.image}</div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{story.name}</h3>
                <p className="text-primary font-semibold mb-4">{story.role}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{story.story}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-accent font-bold">{story.achievement}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
