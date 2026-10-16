import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ClientResults } from "@/components/ClientResults";
import heroImg from "@/assets/kasiconnect-hero.jpg";
import forecastImg from "@/assets/kota-forecast.jpg";
import {
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  CloudSun,
  PackageCheck,
  Server,
  Store,
  TrendingUp,
  Users,
  ShieldCheck,
  ExternalLink,
  Check,
} from "lucide-react";



const features = [
  {
    icon: BrainCircuit,
    title: "Proprietary AI Forecasting",
    desc: "Prophet-based time series models retrain on-the-fly using new sales data, staying responsive to consumer behaviour shifts.",
  },
  {
    icon: CalendarDays,
    title: "Event-Aware Predictions",
    desc: "Local festivals, promotions and pay-day patterns are baked in via a dedicated events table that adjusts demand forecasts.",
  },
  {
    icon: CloudSun,
    title: "Weather-Adjusted Sales",
    desc: "Open-Meteo forecasts translate into multiplicative impact scores — weather conditions help guide daily stock decisions.",
  },
  {
    icon: PackageCheck,
    title: "Auto-Reorder Logic",
    desc: "“Days of Stock Left” and Urgency status use a 1.5× safety buffer to minimise stock-outs and reduce spoilage.",
  },
  {
    icon: Server,
    title: "Built for Low-Bandwidth",
    desc: "Designed for Kasi infrastructure — light on compute, cash-on-delivery aware, and cost-effective for small vendors.",
  },
  {
    icon: ShieldCheck,
    title: "Owned IP, Open Standards",
    desc: "Forecasting engine, event impact model and reorder buffer formulas are fully developed and owned in-house.",
  },
];

const delivered = [
  {
    phase: "Data & AI",
    title: "Less waste, smarter stock",
    points: [
      "Live sales data feeds Kota AI through data pipelines",
      "Weather and local events inform daily forecasts",
      "Our model reduced perishable waste by over 20%",
    ],
  },
  {
    phase: "Software & Operations",
    title: "A connected restaurant",
    points: [
      "Live online ordering app for an anchor restaurant",
      "Delivery integrated into the app",
      "Two delivery scooters mobilised for the restaurant",
    ],
  },
  {
    phase: "Business & Employment",
    title: "Impact beyond the app",
    points: [
      "40% sales growth in under six months of our partnership",
      "Employment created through digitization and delivery",
      "One full-time position created",
    ],
  },
];

function KasiConnect() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        { ([
          ...[
      { title: "KasiConnect & Kota AI — Proven Results" },
      {
        name: "description",
        content:
          "Kota AI reduced waste by 20% for our anchor client. MOZK's wider partnership enabled 40% sales growth in under six months, integrated delivery and employment.",
      },
      { property: "og:title", content: "KasiConnect & Kota AI — Demand Forecasting API" },
      {
        property: "og:description",
        content:
          "Proven results: 40% sales growth in under six months, 20% less waste, two delivery scooters and one full-time position.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ]
        ] as Array<Record<string,string>>).map((t, i) => {
          if (t.title) return <title key={i}>{t.title}</title>;
          if (t.name) return <meta key={i} name={t.name} content={t.content} />;
          if (t.property) return <meta key={i} property={t.property} content={t.content} />;
          return null;
        }) }
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Township fast-food vendor with overlaid demand forecast charts"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-[var(--navy-deep)]/80" />
        <div className="container relative mx-auto px-6 py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary mb-6">
              KasiConnect · A unit of MOZK Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-[1.05]">
              Kota AI <span className="text-primary">— demand forecasting</span> for the Kasi economy.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
              Our proprietary model reduced perishable waste by over 20% for our anchor client.
              Part of a MOZK partnership that enabled 40% sales growth in under six months,
              integrated delivery and created employment.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://restaurant-demand-forecasting-1.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-md border border-primary/40 text-foreground hover:bg-primary/10 transition-smooth"
              >
                Explore the API <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ClientResults />

      {/* Problem / Solution */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">The problem</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground">
              Over-ordering and spoilage are silent margin killers.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              In township fast-food economies, vendors juggle perishable stock against unpredictable foot
              traffic — driven by weekends, pay-days, local events and the weather. Mainstream POS systems
              overlook them due to cost and infrastructure.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Kota AI was built ground-up for the Kasi context: light infrastructure, cash-on-delivery aware,
              and tuned for the rhythms that actually move sales.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-hero rounded-2xl opacity-50 blur-xl" />
            <img
              src={forecastImg}
              alt="Demand forecast chart with weather and event indicators"
              className="relative rounded-2xl shadow-elegant border border-border"
              width={1600}
              height={1200}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[var(--navy-deep)]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">What's inside</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground">Inside the Kota AI engine</h2>
            <p className="mt-6 text-muted-foreground">
              A modular, multi-tenant forecasting service that turns raw sales data into actionable reorder
              recommendations — every single day.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Tech stack</span>
          <h2 className="mt-4 text-4xl font-bold text-foreground">Production-grade, edge-friendly</h2>
          <p className="mt-6 text-muted-foreground">
            FastAPI · Supabase (PostgreSQL) · Facebook Prophet · Open-Meteo · Render
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["FastAPI", "Supabase", "Prophet", "Open-Meteo", "Render", "Python"].map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm text-foreground/90"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Delivered outcomes */}
      <section className="py-24 bg-[var(--navy-deep)]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Delivered for our clients</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground">What We Have Put to Work</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {delivered.map((r) => (
              <div
                key={r.phase}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-primary">{r.phase}</div>
                <h3 className="mt-3 text-xl font-semibold text-foreground">{r.title}</h3>
                <ul className="mt-6 space-y-3">
                  {r.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-foreground/90">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Store,
              title: "Township-first",
              desc: "Digitising the informal food retail economy — a sector mainstream tech overlooks.",
            },
            {
              icon: TrendingUp,
              title: "Higher margins",
              desc: "Our model reduced perishable waste by over 20%.",
            },
            {
              icon: Users,
              title: "Job creation",
              desc: "App-integrated delivery with two scooters helped create employment, including one full-time position.",
            },
          ].map((i) => (
            <div key={i.title} className="p-8 rounded-2xl bg-card border border-border shadow-elegant">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                <i.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{i.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--navy-deep)]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Bring proven expertise to your restaurant.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our work connects AI, sales data, software and delivery to measurable outcomes.
            Talk to us about your business and the operational challenges that matter to you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:shadow-glow transition-smooth"
            >
              Talk to us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default KasiConnect;
