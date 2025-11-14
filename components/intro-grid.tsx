export default function IntroGrid() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
        {/* Row 1: 2 columns wide item */}
        <div className="col-span-2 p-8 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300">
          <div className="text-4xl mb-4">🌍</div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Global Opportunities
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Connect with peers and mentors worldwide. Access opportunities that
            transcend borders and open doors you never knew existed.
          </p>
        </div>

        {/* Row 1: 1 column item */}
        <div className="col-span-1 p-8 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300">
          <div className="text-4xl mb-4">💡</div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Innovation
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Learn cutting-edge skills and stay ahead of trends.
          </p>
        </div>


        <div className="col-span-1 row-span-2 p-8 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-2xl font-bold text-foreground mb-3">Community</h3>
          <p className="text-muted-foreground leading-relaxed">
            Be part of a supportive ecosystem of changemakers.
          </p>
        </div>

        <div className="col-span-2 row-span-2 p-8 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Empowerment Through Action
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We believe the best way to empower youth is through real-world
            experience, mentorship, and collaboration. Our programs combine
            skill-building with hands-on projects that make a tangible impact in
            your community and beyond.
          </p>
          <button className="px-6 py-2 rounded-lg bg-primary text-text font-semibold hover:opacity-90 transition-opacity">
            Explore More
          </button>
        </div>

        {/* Row 3: 3 columns wide item */}
        <div className="col-span-3 p-8 rounded-2xl bg-primary/10 border border-primary/20 hover:border-primary hover:shadow-lg transition-all duration-300">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Why This Matters
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            In an era of rapid disruption, youth equipped with adaptability,
            creativity, and purpose will lead the way. Our mission is to provide
            you with the tools, network, and confidence to thrive in whatever
            future you imagine.
          </p>
        </div>
      </div>
    </>
  );
}
