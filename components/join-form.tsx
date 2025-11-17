"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { toast } from "sonner";

export function JoinForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }

    toast.success("Welcome! 🎉", {
      description:
        "Check your email for confirmation and next steps to get started.",
    });

    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-foreground mb-3"
        >
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
  );
}
