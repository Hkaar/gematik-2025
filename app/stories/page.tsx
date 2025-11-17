import Header from "@/components/header";
import Footer from "@/components/footer";

import { Metadata } from "next";

import StoryGrid from "@/components/story-grid";

export const metadata: Metadata = {
  title: "Stories | GEMPAR",
  description:
    "Hear the stories that our alumni go through when they joined us!",
};

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header active="/stories" />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <StoryGrid />
        </div>
      </section>

      <Footer />
    </div>
  );
}
