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
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Leadership</span>
          <h2 className="mt-4 text-4xl font-bold text-foreground">Operators & Builders</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Our leadership team blends AI, software and on-the-ground experience working with
            township SMEs. We don't just ship technology — we partner with our clients to digitize
            their operations, grow their revenue and hire from their communities.
          </p>
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
