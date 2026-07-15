import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,233,184,0.18),_transparent_18%),linear-gradient(180deg,_rgba(15,76,129,0.88),_rgba(15,76,129,0.62))]" />
      <Container className="relative z-10 py-28">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[#F8E9B8]">
              Northern Cyprus by road
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
              Discover coastal castles, mountain legends, and hidden villages along unforgettable drives.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-200">
              Drive KKTC blends premium route curation with practical planning, so every trip feels inspired, effortless, and locally connected.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/routes">
                <Button className="min-w-[180px]">Browse routes</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="min-w-[180px] text-white">Request itinerary</Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-slate-950/20"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(248,233,184,0.18),_transparent_20%)]" />
            <div className="relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(180deg,_rgba(255,255,255,0.03),_rgba(15,76,129,0.25))] p-8">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-[#F8E9B8]">Featured journey</p>
                <h2 className="text-3xl font-semibold">Golden Coast Loop</h2>
                <p className="text-base leading-7 text-slate-200">
                  A scenic day route with seaside viewpoints, castle ruins, and quiet villages to explore.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/70 p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Duration</p>
                  <p className="mt-3 text-2xl font-semibold">8 hours</p>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Distance</p>
                  <p className="mt-3 text-2xl font-semibold">185 km</p>
                </div>
              </div>
              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F8E9B8]">Why this drive</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li>Harbour mornings, castle views, and coastal sunsets.</li>
                  <li>Local seafood, village cafés, and quiet seaside escapes.</li>
                  <li>A balanced itinerary for first-time and repeat visitors.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
