import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageBanner } from "@/components/PageBanner";
import { BrainCircuit, Bot, Boxes, Store, Check } from "lucide-react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — MOZK Solutions" },
      {
        name: "description",
        content:
          "AI models, intelligent agents and software solutions that digitize township businesses, make them competitive and create local employment.",
      },
      { property: "og:title", content: "Solutions — MOZK Solutions" },
      {
        property: "og:description",
        content: "Custom AI, agents and software built for the Kasi economy.",
      },
    ],
  }),
  component: Solutions,
});

const solutions = [
  {
    icon: BrainCircuit,
    title: "AI Models for Township SMEs",
    desc: "We build proprietary forecasting and decision models — like Kota AI — that learn how informal businesses actually trade and turn that into a competitive edge.",
    bullets: ["Demand forecasting", "Reorder & stock logic", "Event & weather-aware models", "Continuous retraining"],
  },
  {
    icon: Bot,
    title: "Intelligent Agents",
    desc: "AI agents that take repetitive admin off the entrepreneur's plate — from automated supplier ordering to customer engagement and reporting.",
    bullets: ["Auto-reorder agents", "WhatsApp/chat agents", "Sales & ops assistants", "Workflow automation"],
  },
  {
    icon: Boxes,
    title: "Software & Digitization",
    desc: "Lightweight, low-bandwidth web and mobile software that digitizes operations for spazas, fast-food shops and service SMEs in the township.",
    bullets: ["Web & mobile apps", "POS & sales tracking", "Inventory dashboards", "Supplier integrations"],
  },
  {
    icon: Store,
    title: "Competitiveness & Job Creation",
    desc: "Every solution is designed to help Kasi businesses compete with formal players, scale revenue and create sustainable employment in their communities.",
    bullets: ["Growth strategy", "Digital onboarding", "Local skills training", "Impact measurement"],
  },
];

function Solutions() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageBanner
        title="Our Solutions"
        subtitle="A complete set of data and software services for businesses of every size."
      />

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="p-10 rounded-2xl bg-card border border-border hover:border-primary/50 transition-smooth shadow-elegant"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-6 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-foreground/90">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[var(--navy-deep)]">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to get started?</h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your project and we'll put together a tailored proposal.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-8 px-7 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:shadow-glow transition-smooth"
          >
            Let's Chat
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
