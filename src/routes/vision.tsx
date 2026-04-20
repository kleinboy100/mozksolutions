import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageBanner } from "@/components/PageBanner";
import team from "@/assets/team.jpg";
import leadership from "@/assets/leadership.jpg";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision — MOZK Solutions" },
      {
        name: "description",
        content:
          "Our mission is to make data-driven solutions accessible to all — for SMEs, businesses and the education sector.",
      },
      { property: "og:title", content: "Vision — MOZK Solutions" },
      {
        property: "og:description",
        content: "Discover our story, mission and the leadership behind MOZK Solutions.",
      },
    ],
  }),
  component: Vision,
});

function Vision() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageBanner title="Our Vision" subtitle="Making data-driven solutions accessible to all." />

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Mission</span>
            <h2 className="mt-4 text-4xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At MOZK Solutions, we are dedicated to helping our clients build databases to extract insights that drive improvement. Our team of professionals specializes in data analysis and web development, providing affordable and reliable solutions for small to medium-sized enterprises, businesses, and the education sector.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our mission is to showcase our services and generate leads for our clients. We aim to make data-driven solutions accessible to all. Let us help you succeed by harnessing the power of data.
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
            <h2 className="mt-4 text-4xl font-bold text-foreground">Built on Experience</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              MOZK Solutions was founded with a vision to make data-driven solutions accessible to all. Our team of professionals has years of experience in data analysis and web development. We specialize in providing affordable and reliable solutions for small to medium-sized enterprises, businesses, and the education sector.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our passion for data and technology drives us to deliver exceptional services to our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Leadership</span>
          <h2 className="mt-4 text-4xl font-bold text-foreground">Experienced Leadership</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            At MOZK Solutions, our team is led by experienced professionals with years of expertise in data analysis and web development. Our leadership team is dedicated to providing exceptional services and building strong relationships with clients — delivering solutions that exceed expectations.
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
            KasiConnect is our digital innovation unit focused on the township economy. Its first product, Kota AI, is a live demand forecasting and reorder API tailored for small-to-medium fast-food restaurants in the North West province of South Africa.
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
