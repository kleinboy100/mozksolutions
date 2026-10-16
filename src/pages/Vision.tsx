import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageBanner } from "@/components/PageBanner";
import team from "@/assets/team.jpg";
import leadership from "@/assets/leadership.jpg";



function Vision() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        { ([
          ...[
      { title: "Vision — MOZK Solutions" },
      {
        name: "description",
        content:
          "Our mission is to digitize township businesses with AI models, agents and software — making them competitive and creating local employment.",
      },
      { property: "og:title", content: "Vision — MOZK Solutions" },
      {
        property: "og:description",
        content: "Discover our story, mission and the leadership behind MOZK Solutions.",
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
      <PageBanner title="Our Story & Impact" subtitle="Built for township businesses. Backed by results in the real world." />

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">What sets us apart</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground">We Build. We Integrate. We Deliver.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              MOZK Solutions exists to digitize the township economy. We build AI models,
              intelligent agents and software solutions that give Kasi entrepreneurs the same
              competitive tools as formal businesses — affordable, low-bandwidth and grounded in
              the realities of how they trade.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              For our anchor restaurant client, our partnership enabled 40% sales growth in under six months.
              Our model reduced waste by 20%, and app-integrated delivery mobilised two scooters
              and helped create employment, including one full-time position.
            </p>
          </div>
          <img
            src={team}
            alt="MOZK Solutions team collaborating"
            className="rounded-2xl shadow-elegant border border-border"
            width={1280}
            height={960}
            loading="lazy"
          />
        </div>
      </section>

      <section className="py-20 bg-[var(--navy-deep)]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={leadership}
            alt="Leadership team meeting"
            className="rounded-2xl shadow-elegant border border-border md:order-2"
            width={1280}
            height={960}
            loading="lazy"
          />
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Our story</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground">Built for the Kasi Economy</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              MOZK Solutions was founded to close the digital gap between township businesses and
              the formal economy. We combine deep technical expertise — AI, software engineering
              and data — with first-hand understanding of how informal businesses operate.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our track record is practical: a live restaurant app, data pipelines feeding Kota AI,
              and forecasting connected to daily stock decisions. We work alongside the business
              to make technology part of its operations, not a standalone experiment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Leadership & Executive Management</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground">Operators & Builders</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Kleinboy Sebusiwa Diphoko",
                role: "Founder & Managing Director",
                bio: "Directs the technical vision, software deployment and enterprise growth strategy of MOZK Solutions. With a background in Mathematical Sciences, Data Analysis and Software Engineering, he leads the development of agentic AI systems and digital platforms. Under his direction MOZK launched KasiConnect, driving over R100,000 in revenue for anchor clients while reducing perishable food waste by over 20%.",
              },
              {
                name: "Boitshoko Maganeloa",
                role: "Executive Director",
                bio: "Oversees corporate governance, strategic partnerships and enterprise operations, ensuring full statutory compliance, commercial growth and seamless service delivery across our client portfolio.",
              },
            ].map((p) => (
              <div key={p.name} className="p-8 rounded-2xl bg-card border border-border shadow-elegant">
                <div className="text-xs uppercase tracking-[0.2em] text-primary">{p.role}</div>
                <h3 className="mt-2 text-2xl font-bold text-foreground">{p.name}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--navy-deep)]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Core competencies</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground">What We Do Best</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Software Engineering", "Full-stack web applications, cloud backend infrastructure and scalable e-commerce for enterprise and local businesses."],
              ["Agentic AI & ML", "Predictive demand modelling, automated restocking engines and autonomous workflow agents that reduce operational waste."],
              ["Digital Inclusion", "Technology that empowers township economic development, local food vendors and emerging MSMEs across South Africa."],
              ["Enterprise SLA & Support", "Platform maintenance retainers, cloud infrastructure management and high-availability service agreements."],
            ].map(([t, d]) => (
              <div key={t} className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Enterprise work</span>
            <h2 className="mt-4 text-3xl font-bold text-foreground">Custom Platforms We Have Delivered</h2>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              ["Digital Media & Photography Portals", "High-volume media portals with online proofing, secure client galleries and automated invoicing."],
              ["Legal Practice Web Platforms", "Compliant, high-performance platforms for legal firms to manage inquiries, secure documents and services."],
              ["Autonomous Workflow AI Agents", "Agents that automate business admin, customer scheduling, analytics and data pipeline management."],
            ].map(([t, d]) => (
              <div key={t} className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Governance, IP & compliance</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground">A Company You Can Trust</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              ["Registered & Accredited", "Registered South African private company (Reg No: 2025/960100/07), SARS tax compliant, B-BBEE Level 1 contributor — 100% Black Youth-Owned. Trademark filings in process for Class 9 and Class 42."],
              ["Owned Intellectual Property", "All source code, branding, UI/UX designs and infrastructure are owned by MOZK SOLUTIONS (PTY) LTD under a Deed of Assignment. Clients operate under Software-as-a-Service agreements."],
              ["POPIA & Data Security", "We adhere strictly to POPIA, with encrypted database routing, authenticated payment gateway webhooks and secure access logging."],
            ].map(([t, d]) => (
              <div key={t} className="p-8 rounded-2xl bg-card border border-border shadow-elegant">
                <h3 className="text-lg font-semibold text-foreground">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--navy-deep)]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Innovation unit</span>
          <h2 className="mt-4 text-4xl font-bold text-foreground">
            Introducing <span className="text-primary">KasiConnect</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            KasiConnect is our digital innovation unit focused on the township economy. Its product, Kota AI, is live with our anchor clients, using sales data, weather and local events to guide stock decisions. It has driven over R100,000 in revenue for anchor clients and reduced perishable waste by over 20%.
          </p>
          <Link
            to="/kasiconnect"
            className="inline-block mt-8 px-7 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:shadow-glow transition-smooth"
          >
            Discover KasiConnect
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Vision;
