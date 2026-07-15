import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, X } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <Container className="space-y-12 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="text-2xl font-semibold text-white">Drive KKTC</p>
            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Premium Northern Cyprus road trips crafted for travelers who want more than a route map.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" className="inline-flex items-center gap-2">
                <Instagram size={16} /> Instagram
              </Button>
              <Button variant="outline" className="inline-flex items-center gap-2">
                <Twitter size={16} /> Newsletter
              </Button>
            </div>
            <div className="flex flex-wrap gap-3 text-slate-300">
              <a href="#" className="inline-flex items-center gap-2 rounded-3xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm transition hover:border-[#0F4C81] hover:text-white">
                <Instagram size={18} /> Instagram
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-3xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm transition hover:border-[#1DA1F2] hover:text-white">
                <Twitter size={18} /> Twitter
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-3xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm transition hover:border-[#1877F2] hover:text-white">
                <Facebook size={18} /> Facebook
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-3xl border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm transition hover:border-[#000000] hover:text-white">
                <X size={18} /> X
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Explore</p>
            <Link to="/routes" className="text-slate-300 hover:text-white">Routes</Link>
            <Link to="/explore" className="text-slate-300 hover:text-white">Explore</Link>
            <Link to="/about" className="text-slate-300 hover:text-white">About</Link>
            <Link to="/contact" className="text-slate-300 hover:text-white">Contact</Link>
          </div>
          <div className="grid gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Useful</p>
            <a href="#" className="text-slate-300 hover:text-white">Privacy</a>
            <a href="#" className="text-slate-300 hover:text-white">FAQ</a>
            <a href="#" className="text-slate-300 hover:text-white">Support</a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row">
          <span>© 2026 Drive KKTC. Designed for Northern Cyprus driving experiences.</span>
          <span>Built with React, Tailwind, and Leaflet.</span>
        </div>
      </Container>
    </footer>
  );
}
