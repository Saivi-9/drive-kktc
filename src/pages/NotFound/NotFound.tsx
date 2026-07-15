import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>404 — Page not found | Drive KKTC</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Find the best Northern Cyprus routes and travel planning resources on Drive KKTC."
        />
      </Helmet>

      <Container className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.45em] text-slate-400">404 error</p>
          <h1 className="mt-6 text-6xl font-semibold tracking-tight sm:text-7xl">
            Page not found.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            The route you were navigating to doesn’t exist anymore. Return to the Drive KKTC homepage or explore our curated tours.
          </p>
          <Link to="/">
            <Button className="mt-10">Return home</Button>
          </Link>
        </motion.div>
      </Container>
    </main>
  );
}
