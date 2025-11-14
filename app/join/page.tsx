"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Check } from "lucide-react"

export default function JoinPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Please enter your email")
      return
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email")
      return
    }

    // Simulate submission
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4 py-20">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Join Our Community</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Be part of a global movement empowering youth to thrive in the era of disruption. Get exclusive access to
              programs, mentorship, and resources.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6">
                  <Check className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Welcome! 🎉</h2>
                <p className="text-muted-foreground mb-6">
                  Check your email for confirmation and next steps to get started.
                </p>
                <p className="text-sm text-muted-foreground">
                  We'll be in touch soon with exclusive opportunities and resources.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-lg font-semibold transition"
                >
                  Join the Movement
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We respect your privacy. Unsubscribe anytime. No spam, we promise.
                </p>
              </form>
            )}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4">
            {[
              { number: "50K+", label: "Members" },
              { number: "150+", label: "Countries" },
              { number: "1000+", label: "Success Stories" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold text-primary mb-1">{item.number}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
