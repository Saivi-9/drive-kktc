import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Hero from "../../components/hero/Hero";
import FeaturedRoutes from "../../components/sections/FeaturedRoutes";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";

const stats = [
  { label: "Routes curated", value: "32" },
  { label: "Major viewpoints", value: "98" },
  { label: "Local experiences", value: "24" },
  { label: "Coastal drives", value: "18" },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Drive KKTC | Northern Cyprus road trips</title>
        <meta
          name="description"
          content="Discover premium driving routes across Northern Cyprus with coastal views, mountain legends, and authentic local experiences."
        />
      </Helmet>
      <Hero />
      <section className="bg-slate-50 py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#0F4C81]">Why Drive KKTC</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Road trips with destination, story, and local insight.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Explore Northern Cyprus through thoughtfully designed drives that combine heritage, nature, coastal light, and authentic food stops.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="rounded-[2rem] bg-white p-8 shadow-[0_30px_70px_rgba(15,76,129,0.08)]">
                  <p className="text-3xl font-semibold text-slate-950">{item.value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FeaturedRoutes />

      <section className="py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            <div>
              <SectionTitle title="Route categories" subtitle="Find your ideal drive" />
              <p className="mt-4 max-w-2xl text-slate-600 leading-8">
                Choose the experience that fits your travel mood — whether it is coastal light, mountain legends, or slow food and wine.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Coastal escapes", description: "Hidden beaches, harbours, and sunset views." },
                { title: "Heritage journeys", description: "Castles, villages, and historic landscapes." },
                { title: "Food & wine", description: "Winery meals, olive mills, and local markets." },
                { title: "Nature drives", description: "Mountain passes, forests, and overlooking panoramas." },
              ].map((category) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55 }}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <p className="text-lg font-semibold text-slate-950">{category.title}</p>
                  <p className="mt-3 text-slate-600">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <SectionTitle title="Interactive route preview" subtitle="Plan your next road trip" />
              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                Preview the route map, major stops, and experience highlights before you set out — all designed for easy planning and confident driving.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#F8E9B8]">Map insight</p>
                  <p className="mt-3 leading-7 text-slate-200">Every route features clear markers, custom highlights, and short drive details.</p>
                </div>
                <div className="rounded-[2rem] bg-white/10 p-6 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#F8E9B8]">Road ready</p>
                  <p className="mt-3 leading-7 text-slate-200">Discover the best seasons, difficulty, and local tips before you depart.</p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0F172A]/70 p-6 shadow-2xl shadow-slate-950/40">
              <div className="h-[420px] rounded-[1.75rem] bg-[url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionTitle title="Traveler stories" subtitle="What our guests enjoy" />
              <p className="mt-4 max-w-2xl text-slate-600 leading-8">
                Choose a route inspired by real journeys, from harbour mornings to sunset terraces and village dining.
              </p>
            </div>
            <div className="grid gap-6">
              {[
                {
                  quote: "The coastal route felt like a private discovery every step of the way.",
                  name: "Maya, Berlin",
                },
                {
                  quote: "The mountain drive was both dramatic and wonderfully calm.",
                  name: "Elias, Athens",
                },
              ].map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55 }}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <p className="text-xl italic text-slate-900">“{item.quote}”</p>
                  <p className="mt-5 text-sm uppercase tracking-[0.3em] text-slate-400">{item.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-[#0F4C81] via-[#2D6A4F] to-[#15324A] py-24 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionTitle title="Stay in the loop" subtitle="Newsletter" />
              <p className="mt-4 max-w-2xl text-slate-200 leading-8">
                Get seasonal route updates, hidden gem recommendations, and travel planning tips for Northern Cyprus.
              </p>
            </div>
            <form className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-[1.4fr_0.8fr]">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-3xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-slate-300 outline-none transition focus:border-[#F8E9B8] focus:ring-2 focus:ring-[#F8E9B8]/20"
                />
                <Button className="w-full">Subscribe</Button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
