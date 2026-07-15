import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { routes } from "../../data/routes";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";

export default function Explore() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Helmet>
        <title>Explore | Drive KKTC</title>
        <meta
          name="description"
          content="Explore themed route collections, destination categories, and the best Northern Cyprus driving experiences with Drive KKTC."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-[#0F4C81] text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_center,_rgba(248,233,184,0.18),_transparent_25%)]" />
        <Container className="relative py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[#F8E9B8]">Explore Northern Cyprus</p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
              Discover travel themes, route ideas, and destination stories.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-200">
              Explore routes by mood, landscape, and cultural focus to build a road trip that feels personal and memorable.
            </p>
          </motion.div>
        </Container>
      </section>

      <Container className="space-y-20 py-24">
        <section>
          <SectionTitle title="Themed journeys" subtitle="Choose your travel mood" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: "Coastal escapes", description: "Sunlit bays, seaside villages and ocean-facing castles." },
              { title: "Mountain legends", description: "Forest trails, ancient fortresses, and dramatic highland roads." },
              { title: "Food & wine", description: "Vineyards, olive mills and market lunches in village squares." },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-xl font-semibold text-slate-950">{item.title}</p>
                <p className="mt-4 text-slate-600 leading-7">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle title="Route preview" subtitle="What travellers love" />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              {routes.map((route) => (
                <Link
                  key={route.id}
                  to={`/routes/${route.slug}`}
                  className="rounded-[1.75rem] border border-slate-200 p-6 transition hover:border-[#0F4C81] hover:bg-slate-50"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold text-slate-950">{route.title}</p>
                      <p className="mt-2 text-sm text-slate-500">{route.category}</p>
                    </div>
                    <span className="rounded-full bg-[#F8E9B8]/20 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#0F4C81]">{route.duration}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="rounded-[2rem] overflow-hidden bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center p-8 text-white">
              <div className="rounded-[2rem] bg-slate-950/65 p-8 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[#E6C68A]">Local insight</p>
                <h2 className="mt-4 text-3xl font-semibold">Travel planning with local perspective</h2>
                <p className="mt-4 leading-8 text-slate-200">
                  Follow routes that are shaped by local culture, quiet viewpoints, and roads that feel safe and scenic.
                </p>
                <Button className="mt-8">Start exploring</Button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Practical route filters" subtitle="Search by what matters" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: "Best season", description: "Spring and autumn bring the best weather for every drive." },
              { title: "Family friendly", description: "Routes with easy stops, local food, and calm landscapes." },
              { title: "Adventure & culture", description: "Combine heritage sites with scenic roads and local dining." },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-lg font-semibold text-slate-950">{item.title}</p>
                <p className="mt-4 text-slate-600 leading-7">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
