import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import banner from "@/assets/page-banner.jpg";
import kasiHero from "@/assets/kasiconnect-hero.jpg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Bot, Boxes, BrainCircuit, Store, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOZK Solutions — Digitizing Township Businesses with AI" },
      {
        name: "description",
        content:
          "MOZK Solutions builds AI models, intelligent agents and software solutions that digitize township businesses — making them competitive and creating employment.",
      },
      { property: "og:title", content: "MOZK Solutions — Digitizing Township Businesses with AI" },
      {
        property: "og:description",
        content:
          "AI models, agents and software that help township SMEs compete, grow and create jobs.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: BrainCircuit,
    title: "AI Models for Township SMEs",
    desc: "Custom forecasting and decision models — like Kota AI — that help informal businesses predict demand, reduce waste and grow profitably.",
  },
  {
    icon: Bot,
    title: "Intelligent Agents",
    desc: "AI agents that automate ordering, customer engagement and admin work, so township entrepreneurs can focus on running their business.",
  },
  {
    icon: Boxes,
    title: "Software & Digitization",
    desc: "Lightweight, low-bandwidth web and mobile software that digitizes operations — from sales to stock — for fast-food shops, spazas and service SMEs.",
  },
  {
    icon: Store,
    title: "Competitiveness & Jobs",
    desc: "We equip Kasi businesses with the tools to compete with formal players, scale revenue and create sustainable local employment.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <img
          src={banner}
          alt="Modern glass architecture"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-[var(--navy-deep)]/70" />
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-40"
          width={1920}
          height={1080}
        />
        <div className="container relative mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-6">
              AI · Agents · Digitization
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-[1.05]">
              Digitizing Township Businesses{" "}
              <span className="text-primary">with AI & Smart Software</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
              MOZK Solutions builds AI models, intelligent agents and software that help Kasi
              businesses become competitive, grow sustainably and create jobs in their communities.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:shadow-glow transition-smooth"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-md border border-primary/40 text-foreground hover:bg-primary/10 transition-smooth"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transform section */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Our approach</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground">
              Turning Township Hustles into Competitive Businesses
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Township SMEs are the engine of local economies — but most operate without the digital
              tools that formal businesses take for granted. We close that gap with AI models,
              agents and software built specifically for the Kasi context: low-bandwidth, affordable
              and grounded in how informal businesses actually trade.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every solution we ship is designed to do two things — make our clients more
              competitive, and create employment in the communities they serve.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-hero rounded-2xl opacity-50 blur-xl" />
            <img
              src={heroBg}
              alt="AI digitizing township businesses"
              className="relative rounded-2xl shadow-elegant border border-border"
              width={1920}
              height={1080}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[var(--navy-deep)]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">What we do</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground">How We Digitize the Kasi Economy</h2>
            <p className="mt-6 text-muted-foreground">
              AI models, intelligent agents and software solutions — purpose-built to make township
              businesses competitive and to create local employment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md border border-primary/40 text-primary hover:bg-primary/10 transition-smooth"
            >
              Explore all solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* KasiConnect feature */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-gradient-hero rounded-2xl opacity-50 blur-xl" />
            <img
              src={kasiHero}
              alt="Kota AI demand forecasting in a township fast-food shop"
              className="relative rounded-2xl shadow-elegant border border-border w-full"
              width={1920}
              height={1080}
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Featured product · KasiConnect</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground">
              Meet <span className="text-primary">Kota AI</span> — demand forecasting for the Kasi economy.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A live AI forecasting and reorder API built for township fast-food restaurants. Already powering
              Nosty's Fresh Fast Food with weather-aware, event-aware daily predictions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/kasiconnect"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:shadow-glow transition-smooth"
              >
                Discover Kota AI <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://www.nosty.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-md border border-primary/40 text-foreground hover:bg-primary/10 transition-smooth"
              >
                Visit Nosty's
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="container relative mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Accelerate Your Business <span className="text-primary">with MOZK Solutions</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Don't let your data go to waste. Contact us today to schedule a consultation and learn how we can help you unlock the power of your data and drive growth for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-md bg-primary text-primary-foreground font-medium hover:shadow-glow transition-smooth"
          >
            Let's Chat <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
