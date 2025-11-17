"use client";

import IntroGrid from "./intro-grid";

export default function IntroSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Why Young Voices Matter Now More Than Ever
          </h2>
          <p className="text-lg text-muted-foreground">
            The world is changing faster than ever. We're here to help you
            navigate it.
          </p>
        </div>

        <IntroGrid />
      </div>
    </section>
  );
}
