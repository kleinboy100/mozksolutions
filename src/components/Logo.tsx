import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative w-12 h-12 rounded-md bg-[var(--navy-deep)] border border-primary/30 flex items-center justify-center transition-smooth group-hover:shadow-glow">
        <svg viewBox="0 0 24 24" className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1v.2h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="text-base font-semibold text-foreground tracking-wide">MOZK Solutions</div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-primary">Empowering Tomorrow, Today</div>
      </div>
    </Link>
  );
}
