import Header from "@/components/header";
import Footer from "@/components/footer";

import { Metadata } from "next";
import ResourceGrid from "@/components/resource-grid";

export const metadata: Metadata = {
  title: "Resources | GEMPAR",
  description: "Resources provided by us to empower youths for a new age",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header active="/resources" />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ResourceGrid />
        </div>
      </section>

      <Footer />
    </div>
  );
}
