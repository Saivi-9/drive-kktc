import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const links = [
  { label: "Home", to: "/" },
  { label: "Routes", to: "/routes" },
  { label: "Explore", to: "/explore" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container className="py-4">
        <div className="flex items-center justify-between gap-6">
          <Link to="/" className="inline-flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-gradient-to-br from-[#0F4C81] to-[#2D6A4F] text-white shadow-lg shadow-[#0F4C81]/20">
              D
            </div>
            <div>
              <p className="text-base font-semibold text-slate-900">Drive KKTC</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Northern Cyprus drives</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-[#0F4C81]"
                      : "text-slate-600 hover:text-[#0F4C81]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact">
              <Button variant="primary">Enquire now</Button>
            </Link>
          </nav>

          <button
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white text-slate-900 shadow-lg shadow-slate-200/60 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white/95 px-6 py-6 shadow-xl shadow-slate-900/5 md:hidden">
          <div className="flex flex-col gap-4" role="menu" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-3xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button variant="primary" className="w-full">
                Enquire now
              </Button>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
