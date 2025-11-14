"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import IntroSection from "@/components/intro-section"
import FeaturesShowcase from "@/components/features-showcase"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <IntroSection />
      <FeaturesShowcase />
      <Testimonials />
      <Footer />
    </div>
  )
}
