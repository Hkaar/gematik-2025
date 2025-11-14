"use client"

export default function IntroSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Why Young Voices Matter Now More Than Ever
          </h2>
          <p className="text-lg text-muted-foreground">
            The world is changing faster than ever. We're here to help you navigate it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🌍",
              title: "Global Opportunities",
              description:
                "Connect with peers and mentors worldwide. Access opportunities that transcend borders and open doors you never knew existed.",
            },
            {
              icon: "💡",
              title: "Innovation at Core",
              description:
                "Learn cutting-edge skills in tech, entrepreneurship, and creative problem-solving. Stay ahead of market trends.",
            },
            {
              icon: "🤝",
              title: "Community Support",
              description:
                "Be part of a supportive ecosystem of changemakers, mentors, and like-minded individuals pushing for positive change.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
