"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-background via-secondary/10 to-background px-4 py-20">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
          <p className="text-primary font-semibold text-sm">🚀 Transform Tomorrow</p>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          Empowering Youth in the Era of{" "}
          <span className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Disruption
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Equip the next generation with skills, knowledge, and confidence to thrive in a rapidly changing world. Join a
          community of innovators, mentors, and changemakers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/join">
              Get Started <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5 bg-transparent"
          >
            <Link href="/programs">Explore Programs</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { number: "50K+", label: "Youth Empowered" },
            { number: "200+", label: "Programs" },
            { number: "100+", label: "Mentors" },
            { number: "95%", label: "Success Rate" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
