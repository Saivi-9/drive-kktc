import { useState } from "react";
import type { FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-slate-50 text-slate-900">
      <Helmet>
        <title>Contact | Drive KKTC</title>
        <meta
          name="description"
          content="Reach out to Drive KKTC for personalized road trip planning, insider tips, and local travel guidance across Northern Cyprus."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F4C81] via-[#2D6A4F] to-[#1E293B] px-6 py-24 text-white sm:px-10">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_45%)]" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[#F8E9B8]">
              Contact the local guides
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
              Plan your Northern Cyprus road trip together.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Send a message, request a sample itinerary, or ask for insider recommendations on routes, food, and hidden coastal viewpoints.
            </p>
          </motion.div>
        </Container>
      </section>

      <Container className="pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative z-10 mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-white p-8 shadow-[0_40px_120px_rgba(15,76,129,0.12)] md:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <SectionTitle title="Start planning" subtitle="Let us craft your perfect driving adventure." />
            <p className="mt-4 text-slate-600 leading-8">
              Whether you are planning a coastal escape, a cultural itinerary, or a scenic mountain route, Drive KKTC is here to help. Tell us about your travel dates, group size and interests.
            </p>

            <div className="mt-10 grid gap-6">
              <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">Road trip vision</h3>
                <p className="mt-2 text-sm text-slate-500">
                  What kind of driving route are you dreaming of? Culture, nature, beaches, or a complete Northern Cyprus loop?
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">Local recommendations</h3>
                <p className="mt-2 text-sm text-slate-500">
                  Ask about hidden restaurants, sunrise viewpoints, quiet villages, and off-the-beaten-path attractions.
                </p>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="rounded-[2rem] border border-[#0F4C81] bg-[#ECFDF5] p-8 text-slate-900 shadow-sm">
              <p className="text-xl font-semibold">Thank you!</p>
              <p className="mt-3 text-slate-600">
                Your inquiry has been received. We’ll review your request and follow up with personalized route recommendations.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-3xl bg-slate-100 p-6 sm:p-8"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/20"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/20"
                  placeholder="hello@drivekktc.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formState.message}
                  onChange={(event) => setFormState((prev) => ({ ...prev, message: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/20"
                  placeholder="Tell us the dates, interests, and number of travelers."
                  required
                />
              </div>
              <Button type="submit" className="w-full py-4 text-base">
                Send inquiry
              </Button>
            </form>
          )}
        </motion.div>
      </Container>
    </main>
  );
}
