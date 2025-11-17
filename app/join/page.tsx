import Header from "@/components/header";
import Footer from "@/components/footer";
import { JoinForm } from "@/components/join-form";
import { Metadata } from "next";
import JoinPageHeading from "@/components/join-page-heading";
import JoinPageStats from "@/components/join-page-stats";

export const metadata: Metadata = {
  title: "Join us! | GEMPAR",
  description: "Join the program to empower yourself for a new age!",
};

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header active="/join" />

      <section className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4 py-20">
        <div className="w-full max-w-lg">
          <JoinPageHeading />

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <JoinForm />
          </div>

          <JoinPageStats />
        </div>
      </section>

      <Footer />
    </div>
  );
}
