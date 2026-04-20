import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--navy-deep)]">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Helping businesses unlock the power of their data through analytics, applications, and machine learning.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary mb-4 tracking-widest uppercase">Navigate</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-foreground/80 hover:text-primary transition-smooth">Home</Link></li>
            <li><Link to="/solutions" className="text-foreground/80 hover:text-primary transition-smooth">Solutions</Link></li>
            <li><Link to="/vision" className="text-foreground/80 hover:text-primary transition-smooth">Vision</Link></li>
            <li><Link to="/blog" className="text-foreground/80 hover:text-primary transition-smooth">Blog</Link></li>
            <li><Link to="/contact" className="text-foreground/80 hover:text-primary transition-smooth">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary mb-4 tracking-widest uppercase">Get in touch</h4>
          <p className="text-sm text-muted-foreground">Schedule a consultation and learn how data can drive your growth.</p>
          <Link
            to="/contact"
            className="inline-block mt-4 text-sm px-5 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:shadow-glow transition-smooth"
          >
            Let's Chat
          </Link>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} MOZK Solutions. All rights reserved.
      </div>
    </footer>
  );
}
