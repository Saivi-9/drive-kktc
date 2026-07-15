import { Link } from "react-router-dom";
import type { Route } from "../../types/route";
import Card from "../ui/Card";
import Button from "../ui/Button";

type Props = {
  route: Route;
};

export default function RouteCard({ route }: Props) {
  return (
    <Card className="overflow-hidden p-0 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
      <div
        className="h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${route.heroImage})` }}
      />
      <div className="space-y-5 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-slate-900/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-800">
            {route.category}
          </span>
          {route.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full bg-[#F8E9B8]/15 px-3 py-1 text-xs text-slate-700">
              {tag}
            </span>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-950">{route.title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{route.overview}</p>
        </div>

        <div className="grid gap-3 text-sm text-slate-500 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-3">
            <p className="font-semibold text-slate-900">Duration</p>
            <p className="mt-1">{route.duration}</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-3">
            <p className="font-semibold text-slate-900">Difficulty</p>
            <p className="mt-1">{route.difficulty}</p>
          </div>
        </div>

        <Link to={`/routes/${route.slug}`}>
          <Button className="w-full">Explore route</Button>
        </Link>
      </div>
    </Card>
  );
}
