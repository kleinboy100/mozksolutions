import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageBanner } from "@/components/PageBanner";
import { ExternalLink, Check } from "lucide-react";

const projects = [
  {
    client: "Nosty's Fresh Fast Food",
    url: "https://www.nosty.co.za",
    domain: "www.nosty.co.za",
    category: "Hospitality platform · AI forecasting",
    desc: "A customer ordering app with integrated delivery, powered by our Kota AI demand prediction and smart restocking engine.",
    points: ["+40% sales in under six months", "Over 20% less perishable waste", "2 delivery scooters & 1 full-time job"],
  },
  {
    client: "Visual Axis Media",
    url: "https://www.visualaxis.co.za",
    domain: "www.visualaxis.co.za",
    category: "Digital media & photography portal",
    desc: "A media and photography platform for showcasing work and serving clients online.",
    points: ["Online proofing", "Client galleries", "Automated invoicing"],
  },
  {
    client: "Diteboho Kotoane Attorneys Inc",
    url: "https://www.dkattorney.co.za",
    domain: "www.dkattorney.co.za",
    category: "Legal practice web platform",
    desc: "A professional web platform presenting the firm's practice areas and making it easy for clients to get in touch.",
    points: ["Professional practice website", "Client enquiry channels", "Secure, maintained hosting"],
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portfolio — MOZK Solutions</title>
        <meta name="description" content="Client work by MOZK Solutions: hospitality ordering with AI forecasting, media portals and legal practice platforms." />
        <meta property="og:title" content="Portfolio — MOZK Solutions" />
        <meta property="og:description" content="Live platforms we have built and support for our clients." />
      </Helmet>
      <Header />
      <PageBanner title="Our Portfolio" subtitle="Live platforms we have built and continue to support for our clients." />
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article key={p.client} className="flex flex-col p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-smooth shadow-elegant">
              <span className="text-xs uppercase tracking-widest text-primary">{p.category}</span>
              <h2 className="mt-3 text-2xl font-bold text-foreground">{p.client}</h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <ul className="mt-6 space-y-2 flex-1">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 text-sm text-foreground/90">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:underline">
                Visit {p.domain} <ExternalLink className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Portfolio;
