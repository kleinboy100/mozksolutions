import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/contact";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/solutions", label: "Solutions" },
  { to: "/kasiconnect", label: "KasiConnect" },
  { to: "/vision", label: "Vision" },
  { to: "/blog", label: "Blog" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 inset-x-0 z-50">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={"end" in l ? l.end : false}
              className={({ isActive }) =>
                `text-sm transition-smooth hover:text-primary ${isActive ? "text-primary" : "text-foreground/90"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" /> Let's Chat
            </a>
          </Button>
        </nav>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur border-t border-border">
          <nav className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-foreground" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Button asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                <MessageCircle aria-hidden="true" /> Let's Chat
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
