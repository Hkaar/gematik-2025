import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Video, PenTool as Tool } from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | GEMPAR",
  description: "Resources provided by us to empower youths for a new age",
};

export default function ResourcesPage() {
  const resources = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Career Navigation Guide",
      description:
        "Step-by-step guide to choosing and advancing your career path in the modern world.",
      type: "PDF Guide",
      downloads: "12.5K",
    },
    {
      icon: <Tool className="w-6 h-6" />,
      title: "Personal Brand Toolkit",
      description:
        "Templates and frameworks for building a compelling personal brand and online presence.",
      type: "Toolkit",
      downloads: "8.3K",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Leadership Masterclass Series",
      description:
        "10-part video series on modern leadership, decision-making, and team dynamics.",
      type: "Video Series",
      downloads: "25K",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Skills Roadmap 2025",
      description:
        "Comprehensive guide to the most in-demand skills and how to master them this year.",
      type: "Interactive Guide",
      downloads: "18.7K",
    },
    {
      icon: <Tool className="w-6 h-6" />,
      title: "Startup Checklist",
      description:
        "Everything you need to know to launch your startup from idea to first customers.",
      type: "Checklist",
      downloads: "9.1K",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Industry Expert Interviews",
      description:
        "Candid conversations with leaders across tech, finance, creative, and social impact sectors.",
      type: "Podcast Series",
      downloads: "31K",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header active="/resources" />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Resources & Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Free and premium resources to support your growth journey. All
              created by experts and community members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, i) => (
              <Card
                key={i}
                className="p-8 bg-card border-border border-2 hover:border-accent hover:shadow-lg transition-all duration-300 hover:-skew-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-primary">{resource.icon}</div>
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {resource.downloads} downloads
                  </span>
                  <Button
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a href="#">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
