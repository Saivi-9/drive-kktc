import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";

export default function About() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <Helmet>
        <title>About | Drive KKTC</title>
        <meta
          name="description"
          content="Learn about Drive KKTC, our mission to create premium Northern Cyprus driving experiences, and our commitment to sustainable travel and local culture."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-[#0F4C81] text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(248,233,184,0.15),_transparent_20%)]" />
        <Container className="relative py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[#F8E9B8]">About Drive KKTC</p>
            <h1 className="mt-6 text-5xl font-semibold leading-tight sm:text-6xl">
              A modern travel guide for discovering Northern Cyprus by car.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200">
              We bring together stunning routes, local stories, and practical planning tools so every road trip feels effortless, memorable, and authentically Cypriot.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#values">
                <Button className="min-w-[180px]">Our values</Button>
              </a>
              <a href="#approach">
                <Button variant="outline" className="min-w-[180px] text-white">How we plan</Button>
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      <Container className="space-y-20 py-24">
        <section id="values" className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Local authenticity",
              description: "Every route is shaped by local guides, hidden viewpoints, and genuine Northern Cyprus stories.",
            },
            {
              title: "Premium clarity",
              description: "Clear itineraries, realistic timings, and planning details for confident travelers.",
            },
            {
              title: "Responsible travel",
              description: "We highlight quiet seasons, respectful experiences, and routes that honor local communities.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_35px_120px_rgba(15,76,129,0.08)]"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-[#0F4C81]">{item.title}</p>
              <p className="mt-4 text-lg leading-8 text-slate-700">{item.description}</p>
            </motion.div>
          ))}
        </section>

        <section id="approach" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#1E293B] via-[#0F4C81] to-[#2D6A4F] p-10 text-white shadow-2xl shadow-[#0F4C81]/10">
            <SectionTitle title="How we design each route" subtitle="Designed for travelers who want more than a map." />
            <p className="mt-6 text-lg leading-8 text-slate-200">
              We combine scenic roads, cultural insight, food experiences, and practical stops into routes that feel unforgettable without being rushed.
            </p>
          </div>
          <div className="space-y-6">
            {[
              "Story-driven route chapters, from morning light to golden hour.",
              "A balance of iconic viewpoints and quiet local discoveries.",
              "Easy-to-use route cards, maps, and planning details for every traveler.",
            ].map((text) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="text-lg leading-8 text-slate-700">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
