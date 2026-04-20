import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageBanner } from "@/components/PageBanner";
import blog1 from "@/assets/blog-1.jpg";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Recent Work — MOZK Solutions" },
      {
        name: "description",
        content: "Recent work and case studies from MOZK Solutions, including data-driven projects for the education sector.",
      },
      { property: "og:title", content: "Recent Work — MOZK Solutions" },
      { property: "og:description", content: "Read our latest case studies and projects." },
    ],
  }),
  component: Blog,
});

const posts = [
  {
    title: "How Can Data-Driven Insights Improve Communication Between Parents and Teachers in High Schools?",
    excerpt:
      "This project, developed by MOZK Solutions, involves creating an application for a local high school aimed at storing data and deriving actionable insights to bridge the gap between parents and teachers.",
    date: "Apr 8, 2024",
    readTime: "1 min read",
    image: blog1,
  },
];

function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageBanner title="Recent Work" subtitle="Case studies and projects from MOZK Solutions." />

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-smooth shadow-elegant"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  width={1024}
                  height={768}
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{p.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{p.readTime}</span>
                </div>
                <h2 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {p.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
                  Read more <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
