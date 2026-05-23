import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageBanner } from "@/components/PageBanner";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";



function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        { ([
          ...[
      { title: "Let's Chat — MOZK Solutions" },
      {
        name: "description",
        content: "Schedule a consultation with MOZK Solutions and unlock the power of your data.",
      },
      { property: "og:title", content: "Let's Chat — MOZK Solutions" },
      { property: "og:description", content: "Get in touch to discuss your data project." },
    ]
        ] as Array<Record<string,string>>).map((t, i) => {
          if (t.title) return <title key={i}>{t.title}</title>;
          if (t.name) return <meta key={i} name={t.name} content={t.content} />;
          if (t.property) return <meta key={i} property={t.property} content={t.content} />;
          return null;
        }) }
      </Helmet>

      <Header />
      <PageBanner title="Let's Chat!" subtitle="Tell us about your project and we'll be in touch." />

      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>
            <p className="mt-4 text-muted-foreground">
              Don't let your data go to waste. Schedule a consultation and learn how we can help you unlock the power of your data and drive growth.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-primary uppercase tracking-widest">Email</div>
                  <div className="text-foreground">hello@mozksolutions.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-primary uppercase tracking-widest">Chat</div>
                  <div className="text-foreground">Available Mon–Fri, 9am–5pm</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-primary uppercase tracking-widest">Location</div>
                  <div className="text-foreground">Remote · Worldwide</div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="p-8 rounded-2xl bg-card border border-border shadow-elegant space-y-5"
          >
            <div>
              <label className="text-sm text-foreground/90">Name</label>
              <input
                required
                className="mt-2 w-full px-4 py-3 rounded-md bg-background border border-border text-foreground focus:outline-none focus:border-primary transition-smooth"
              />
            </div>
            <div>
              <label className="text-sm text-foreground/90">Email</label>
              <input
                type="email"
                required
                className="mt-2 w-full px-4 py-3 rounded-md bg-background border border-border text-foreground focus:outline-none focus:border-primary transition-smooth"
              />
            </div>
            <div>
              <label className="text-sm text-foreground/90">Message</label>
              <textarea
                rows={5}
                required
                className="mt-2 w-full px-4 py-3 rounded-md bg-background border border-border text-foreground focus:outline-none focus:border-primary transition-smooth resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:shadow-glow transition-smooth"
            >
              {sent ? "Thanks — we'll be in touch!" : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
