import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageBanner } from "@/components/PageBanner";
import { BrainCircuit, Bot, Boxes, Store, Database, BarChart3, Check } from "lucide-react";



const solutions = [
  {
    icon: BrainCircuit,
    title: "Predictive AI & Decision Models",
    desc: "We build proprietary forecasting and decision models — including Kota AI — that turn operational data into practical recommendations for demand, stock and resource planning.",
    bullets: ["Demand forecasting", "Reorder & stock logic", "Event & weather-aware models", "Continuous retraining"],
  },
  {
    icon: Bot,
    title: "AI Agents & Task Automation",
    desc: "We connect intelligent agents to business workflows to reduce repetitive administration, coordinate routine tasks and support customer engagement and reporting.",
    bullets: ["Auto-reorder agents", "WhatsApp/chat agents", "Sales & ops assistants", "Workflow automation"],
  },
  {
    icon: Boxes,
    title: "Web, Mobile & Business Systems",
    desc: "Custom applications built around how your organisation operates, from customer-facing platforms to internal systems. Our township experience keeps usability, affordability and low-bandwidth access central.",
    bullets: ["Web, Android & iOS apps", "Business portals & e-commerce", "POS & inventory systems", "Supplier integrations"],
  },
  {
    icon: Database,
    title: "Data Engineering & Cloud",
    desc: "We connect, organise and secure the data behind your operations. Databases, pipelines and managed cloud infrastructure provide a reliable foundation for your applications, analytics and AI.",
    bullets: ["Database design & migration", "Data pipelines & API integrations", "Cloud hosting & management", "Backups & operational continuity"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    desc: "A clear view of sales, stock, finance and operations. We transform raw data into reporting and dashboards that help owners, managers and teams make informed decisions.",
    bullets: ["Interactive dashboards", "Sales, stock & operations reporting", "Customer insights", "KPI tracking"],
  },
  {
    icon: Store,
    title: "Project Delivery & SLA Support",
    desc: "A technology partner beyond launch. We bring structured project delivery, stakeholder communication and ongoing maintenance together to keep your systems aligned with your business.",
    bullets: ["ICT project delivery", "Stakeholder reporting", "Maintenance & SLA retainers", "Ongoing system optimisation"],
  },
];

function Solutions() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        { ([
          ...[
      { title: "Solutions — MOZK Solutions" },
      {
        name: "description",
        content:
           "AI automation, custom business systems, cloud and data engineering, analytics and SLA support for businesses and public institutions, backed by proven client results.",
      },
      { property: "og:title", content: "Solutions — MOZK Solutions" },
      {
        property: "og:description",
         content: "Business technology, cloud, data and support — with proprietary AI and intelligent automation as our edge.",
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
      <PageBanner
        title="Our Solutions"
        subtitle="Connected business systems, reliable infrastructure and intelligent automation — built around your operations."
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Capability Backed by Delivered Results</h2>
          <p className="mt-4 text-muted-foreground">
            Our anchor township client grew sales by 40% in under six months, while our model reduced
            perishable waste by over 20%. Integrated delivery supported two scooters and employment,
            including one full-time position. Tell us about your operations — let's discuss where
            software, data and automation can make the difference.
          </p>
          <Button asChild className="mt-8" size="lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Let's Chat</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Solutions;
