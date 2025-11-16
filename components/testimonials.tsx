"use client";

import { Card } from "@/components/ui/card";
import TestimonyCard from "./testimony-card";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "This program completely transformed how I think about my career. The mentorship alone was worth its weight in gold.",
      author: "Sarah Chen",
      role: "Product Designer",
      image: "👩‍💼",
    },
    {
      quote:
        "I came in uncertain about my path. Now I'm confident, skilled, and ready to make an impact in my field.",
      author: "Marcus Johnson",
      role: "Tech Entrepreneur",
      image: "👨‍💻",
    },
    {
      quote:
        "The resources and community support here are unmatched. I feel part of something bigger than myself.",
      author: "Priya Patel",
      role: "Social Impact Leader",
      image: "👩‍🔬",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Hear from Our Community
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from youth who are making a real impact
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonyCard
              name={testimonial.author}
              role={testimonial.role}
              profileImage="https://placehold.co/600x400"
              key={i}
            >
              {testimonial.quote}
            </TestimonyCard>
          ))}
        </div>
      </div>
    </section>
  );
}
