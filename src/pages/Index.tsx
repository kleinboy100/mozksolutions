import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import heroBg from "@/assets/hero-bg.jpg";
import banner from "@/assets/page-banner.jpg";
import kasiHero from "@/assets/kasiconnect-hero.jpg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ClientResults } from "@/components/ClientResults";
import { Bot, Boxes, BrainCircuit, Store, Database, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";



const services = [
  {
    icon: Bot,
    title: "AI Agents & Task Automation",
    desc: "Our edge: autonomous AI agents that handle scheduling, admin, customer queries, reporting and data pipelines — so your people focus on high-value work.",
  },
  {
    icon: BrainCircuit,
    title: "Predictive AI Models",
    desc: "Demand forecasting, smart restocking and decision models that learn from your own data to cut waste and lift revenue.",
  },
  {
    icon: Boxes,
    title: "Web, Mobile & Business Systems",
    desc: "Custom web platforms, Android and iOS apps, portals and e-commerce built around how your organisation actually works.",
  },
  {
    icon: Database,
    title: "Cloud & Data Engineering",
    desc: "Secure cloud hosting, migration, backups, databases and pipelines — reliable infrastructure without the cost of on-site servers.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Dashboards",
    desc: "One clear view of sales, stock, finance and operations, turning raw data into decisions management can act on.",
  },
  {
    icon: Store,
    title: "Project Delivery & SLA Support",
    desc: "Structured ICT project delivery with clear stakeholder reporting, followed by maintenance retainers and high-availability support.",
  },
];

const difference = [
  ["Typical IT providers build systems.", "We build systems that think — AI models and agents are built into what we deliver."],
  ["Results are promised.", "Our results are measured: +40% client sales, over 20% less waste, R100k+ revenue driven."],
  ["Hand-over and walk away.", "SLA retainers, cloud management and ongoing optimisation after go-live."],
  ["Generic, one-size solutions.", "Built for South African realities — from township SMEs to corporates and the public sector."],
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        { ([
          ...[
      { title: "MOZK Solutions — Technology, AI & Proven Business Results" },
      {
        name: "description",
        content:
           "MOZK Solutions delivers AI automation, business software, cloud infrastructure and data analytics, backed by measurable client results and ongoing support.",
      },
      { property: "og:title", content: "MOZK Solutions — Technology, AI & Proven Business Results" },
      {
        property: "og:description",
        content:
          "Real client results: 40% sales growth in under six months for an anchor client, 20% less waste and integrated delivery.",
      },
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
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
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
               Technology partner · AI · Data · Software
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-[1.05]">
              MOZK SOLUTIONS{" "}
               <span className="text-primary">Smarter Technology. Proven Business Results.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-xl leading-relaxed">
               We help businesses and public institutions connect their systems, automate everyday tasks
               and make better decisions. From business software and cloud infrastructure to proprietary AI
               models and intelligent agents, we bring technology together around your operations.
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

      <ClientResults />

      {/* Transform section */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Our approach</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground">
              More Than Software. A Business Partner.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
               Technology should work around your organisation, not the other way around. We combine
               software engineering, data expertise and intelligent automation to connect fragmented
               operations, reduce repetitive work and give your team the tools to compete.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At the heart of everything we ship is data. We build and manage the databases,
              pipelines and cloud infrastructure that capture how each business trades, then turn
              that data into insights, dashboards and AI-driven decisions owners can act on daily.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
               Our roots in the township economy keep that work practical: affordable, low-bandwidth
               systems grounded in how people actually trade. Our delivered work spans forecasting,
               sales tracking and integrated delivery, with measurable gains in sales, waste reduction
               and local employment.
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
             <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground">Technology That Works Across Your Business</h2>
            <p className="mt-6 text-muted-foreground">
               Business systems, cloud infrastructure, analytics and ongoing support — strengthened
               by AI models and agents that turn insight into action.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6">
          <span className="text-xs uppercase tracking-widest text-primary">The MOZK difference</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">More Than a System Supplier</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-8">
            {difference.map(([expectation, approach]) => (
              <div key={expectation} className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground">{expectation}</p>
                <p className="mt-3 text-lg text-foreground leading-relaxed">{approach}</p>
              </div>
            ))}
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
              Our proprietary forecasting and reorder model is live in a township fast-food restaurant.
              It reduced waste by 20% as part of a wider digitization partnership that increased sales
              by 40% in under six months and brought delivery into the app.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/kasiconnect"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:shadow-glow transition-smooth"
              >
                See the client results <ArrowRight className="w-4 h-4" />
              </Link>
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
            Work with a Partner <span className="text-primary">with Proven Results</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From sales and stock data to forecasting and delivery, our client work connects
            technology to everyday operations. Tell us where your business needs to go next.
          </p>
          <Button asChild className="mt-10" size="lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Let's Chat <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Index;
