import Header from "@/components/header";
import Footer from "@/components/footer";
import { JoinForm } from "@/components/join-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join us! | GEMPAR",
  description: "Join the program to empower yourself for a new age!",
};

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header active="/join" />

      <section className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4 py-20">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Join Our Community
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Be part of a global movement empowering youth to thrive in the era
              of disruption. Get exclusive access to programs, mentorship, and
              resources.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <JoinForm />
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4">
            {[
              { number: "50K+", label: "Members" },
              { number: "150+", label: "Countries" },
              { number: "1000+", label: "Success Stories" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold text-primary mb-1">
                  {item.number}
                </p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
