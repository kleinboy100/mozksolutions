import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageBanner } from "@/components/PageBanner";
import { Cloud, Code2, BrainCircuit, HeartHandshake, Check } from "lucide-react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — MOZK Solutions" },
      {
        name: "description",
        content:
          "Cloud analytics, application development, data science and customer experience services for SMEs and the education sector.",
      },
      { property: "og:title", content: "Solutions — MOZK Solutions" },
      {
        property: "og:description",
        content: "Affordable, reliable data and software solutions tailored to your business.",
      },
    ],
  }),
  component: Solutions,
});

const solutions = [
  {
    icon: Cloud,
    title: "Cloud Analytics & Modernization",
    desc: "Harness the power of the cloud to manage and analyze your data. We help you make sense of your data with insights and visualizations that enable informed decisions.",
    bullets: ["Cloud migration", "Data warehousing", "Interactive dashboards", "Real-time analytics"],
  },
  {
    icon: Code2,
    title: "Application Development",
    desc: "Our team of experienced developers builds custom applications that meet the unique needs of your business — web, mobile or desktop.",
    bullets: ["Web applications", "Mobile apps", "Desktop software", "API integrations"],
  },
  {
    icon: BrainCircuit,
    title: "Data Science & Machine Learning",
    desc: "Gain deeper insights into your data and make informed decisions using advanced analytical techniques to identify patterns and trends.",
    bullets: ["Predictive models", "Data mining", "ML pipelines", "Natural language processing"],
  },
  {
    icon: HeartHandshake,
    title: "Full Customer Experience Service",
    desc: "Improve your customer experience — from customer journey mapping to feedback and analytics — for stronger retention and loyalty.",
    bullets: ["Journey mapping", "Feedback analytics", "Loyalty programs", "CX strategy"],
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
