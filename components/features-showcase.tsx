"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function FeaturesShowcase() {
  const features = [
    {
      title: "Programs",
      description: "Comprehensive learning paths designed to build real-world skills",
      href: "/programs",
      color: "from-primary/20 to-primary/5",
      icon: "📚",
    },
    {
      title: "Success Stories",
      description: "Inspiring journeys from youth who've transformed their futures",
      href: "/stories",
      color: "from-accent/20 to-accent/5",
      icon: "⭐",
    },
    {
      title: "Resources",
      description: "Tools, guides, and frameworks to accelerate your growth",
      href: "/resources",
      color: "from-secondary/20 to-secondary/5",
      icon: "📖",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Explore Our Offerings</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to thrive in your journey of personal and professional growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Link key={i} href={feature.href}>
              <Card
                className={`h-full p-8 bg-linear-to-br ${feature.color} border-border hover:border-accent hover:shadow-xl transition-all duration-300 cursor-pointer group`}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                <div className="inline-flex items-center text-primary group-hover:gap-2 gap-1 transition-all duration-300">
                  <span className="font-semibold">Learn more</span>
                  <ChevronRight size={16} />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
