import Container from "../ui/Container";
import RouteCard from "../cards/RouteCard";
import { routes } from "../../data/routes";

export default function FeaturedRoutes() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-[#0F4C81]">Featured routes</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Journeys designed for modern road trip travelers.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Choose from coastal drives, mountain legends, and food-focused valley routes that showcase the best of Northern Cyprus.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {routes.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
        </div>
      </Container>
    </section>
  );
}
