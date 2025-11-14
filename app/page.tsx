import Header from "@/components/header"
import Hero from "@/components/hero"
import IntroSection from "@/components/intro-section"
import FeaturesShowcase from "@/components/features-showcase"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home | GEMPAR",
  description: "Access resources to empower yourself for a new disruptive age",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header active="/" />
      <Hero />
      <IntroSection />
      <FeaturesShowcase />
      <Testimonials />
      <Footer />
    </div>
  )
}
