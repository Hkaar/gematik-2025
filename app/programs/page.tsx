import Header from "@/components/header";
import Footer from "@/components/footer";

import { Metadata } from "next";

import ProgramGrid from "@/components/program-grid";

export const metadata: Metadata = {
  title: "Programs | GEMPAR",
  description: "Programs provided by us to empower youths for a new age",
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header active="/programs" />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ProgramGrid />
        </div>
      </section>

      <Footer />
    </div>
  );
}
