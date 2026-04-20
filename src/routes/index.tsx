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
    icon: Cloud,
    title: "Cloud Analytics & Modernization",
    desc: "Harness the power of the cloud to manage and analyze your data, with insights and visualizations that enable informed decisions.",
  },
  {
    icon: Code2,
    title: "Application Development",
    desc: "Custom web, mobile, and desktop applications built by experienced developers to meet your unique business needs.",
  },
  {
    icon: BrainCircuit,
    title: "Data Science & Machine Learning",
    desc: "Advanced analytics that identify patterns and trends in your data to drive growth and improve performance.",
  },
  {
    icon: HeartHandshake,
    title: "Full Customer Experience",
    desc: "From customer journey mapping to feedback analytics — services to help you deliver an exceptional experience.",
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
              Data · Insights · Growth
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-[1.05]">
              Unlock the Power of Your Data{" "}
              <span className="text-primary">with MOZK Solutions</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
              MOZK Solutions helps you build and manage databases to extract insights and drive growth for your business.
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
              Transform Your Data into Actionable Insights
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At MOZK Solutions, we believe that data is the key to unlocking your business's full potential. Our team of experts can help you build and manage databases that extract insights and drive growth.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We specialize in working with the education sector, small to medium-sized enterprises, and small to medium-sized businesses — offering affordable and reliable solutions to meet your unique needs.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-hero rounded-2xl opacity-50 blur-xl" />
            <img
              src={heroBg}
              alt="Data network"
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
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
            <p className="mt-6 text-muted-foreground">
              A range of services to help you unlock the power of your data and drive growth — for startups, enterprises and the education sector alike.
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
