import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img
        src={logoImg}
        alt="MOZK Solutions logo"
        className="h-12 w-auto object-contain transition-smooth group-hover:opacity-90"
      />
    </Link>
  );
}
