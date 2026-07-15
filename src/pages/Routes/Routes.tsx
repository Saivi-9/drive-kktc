import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import { routes } from "../../data/routes";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

const difficulties = ["Easy", "Moderate", "Hard"];
const categories = Array.from(new Set(routes.map((route) => route.category)));

export default function RoutesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [showMap, setShowMap] = useState(false);
  const [sortKey, setSortKey] = useState("duration");

  const filteredRoutes = useMemo(() => {
    return routes
      .filter((route) => {
        const matchesSearch = route.title.toLowerCase().includes(search.toLowerCase()) || route.overview.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "All" || route.category === category;
        const matchesDifficulty = difficulty === "All" || route.difficulty === difficulty;
        return matchesSearch && matchesCategory && matchesDifficulty;
      })
      .sort((a, b) => {
        if (sortKey === "duration") {
          return a.duration.localeCompare(b.duration);
        }
        if (sortKey === "distance") {
          return parseInt(a.distance) - parseInt(b.distance);
        }
        return a.title.localeCompare(b.title);
      });
  }, [search, category, difficulty, sortKey]);

  return (
    <main className="bg-slate-50 text-slate-900">
      <Helmet>
        <title>Routes | Drive KKTC</title>
        <meta
          name="description"
          content="Browse premium Northern Cyprus driving routes, compare distance, difficulty, and itinerary highlights before you plan your next trip."
        />
      </Helmet>
      <Container className="py-24">
        <SectionTitle title="Routes" subtitle="Discover your next drive" />
        <p className="mt-4 max-w-3xl text-slate-600 leading-8">
          Search by route experience, difficulty, duration, or scenic mood to plan a road trip that fits your pace and travel style.
        </p>

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <Card className="rounded-[2rem] p-6">
              <div className="grid gap-4 sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr]">
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search routes"
                  className="rounded-3xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/20"
                />
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="rounded-3xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/20"
                >
                  <option>All</option>
                  {categories.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
                <select
                  value={difficulty}
                  onChange={(event) => setDifficulty(event.target.value)}
                  className="rounded-3xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/20"
                >
                  <option>All</option>
                  {difficulties.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="text-sm text-slate-600">Sort by</div>
                <Button variant="outline" className={sortKey === "duration" ? "pointer-events-none bg-[#0F4C81] text-white" : ""} onClick={() => setSortKey("duration")}>
                  Duration
                </Button>
                <Button variant="outline" className={sortKey === "distance" ? "pointer-events-none bg-[#0F4C81] text-white" : ""} onClick={() => setSortKey("distance")}>Distance</Button>
                <Button variant="outline" className={sortKey === "title" ? "pointer-events-none bg-[#0F4C81] text-white" : ""} onClick={() => setSortKey("title")}>Name</Button>
              </div>
            </Card>

            <div className="flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#0F4C81]">Map view</p>
                <p className="mt-2 text-slate-600">Toggle an interactive preview of route start points.</p>
              </div>
              <Button variant="secondary" onClick={() => setShowMap((visible) => !visible)}>
                {showMap ? "Hide map" : "Show map"}
              </Button>
            </div>

            {showMap ? (
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <MapContainer center={[35.35, 33.52]} zoom={9} className="h-[420px] w-full">
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  {routes.map((route) => (
                    <Marker
                      key={route.id}
                      position={[route.stops[0].coordinates.lat, route.stops[0].coordinates.lng]}
                    >
                      <Popup>
                        <div className="max-w-xs">
                          <p className="font-semibold">{route.title}</p>
                          <p className="text-sm text-slate-600">{route.overview}</p>
                          <Link to={`/routes/${route.slug}`} className="text-sm text-[#0F4C81] underline">View route</Link>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            ) : null}

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-[#0F4C81]">Quick tips</p>
              <ul className="mt-5 space-y-4 text-slate-600">
                <li>Search by route theme or travel mood to find the right experience.</li>
                <li>Use the map view for a quick geographical overview of route starts.</li>
                <li>Open detail pages for full itineraries, stops, and travel advice.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            {filteredRoutes.map((route) => (
              <Card key={route.id} className="rounded-[2rem] overflow-hidden p-0 shadow-xl">
                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="h-72 bg-cover bg-center" style={{ backgroundImage: `url(${route.heroImage})` }} />
                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#F8E9B8]/20 px-3 py-1 text-xs uppercase tracking-[0.24em] text-[#0F4C81]">{route.category}</span>
                      {route.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{tag}</span>
                      ))}
                    </div>
                    <h2 className="mt-5 text-3xl font-semibold text-slate-950">{route.title}</h2>
                    <p className="mt-4 text-slate-600 leading-7">{route.overview}</p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-slate-600">
                      <div className="rounded-3xl bg-slate-50 p-4">
                        <p className="font-semibold text-slate-900">Distance</p>
                        <p className="mt-1">{route.distance}</p>
                      </div>
                      <div className="rounded-3xl bg-slate-50 p-4">
                        <p className="font-semibold text-slate-900">Best season</p>
                        <p className="mt-1">{route.bestSeason}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link to={`/routes/${route.slug}`}>
                        <Button>View route</Button>
                      </Link>
                      <span className="inline-flex items-center rounded-3xl bg-slate-100 px-4 py-2 text-sm text-slate-600">{route.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
            {filteredRoutes.length === 0 ? <p className="rounded-[2rem] border border-slate-200 bg-white p-10 text-slate-600">No routes match your filters. Adjust search or category to explore more.</p> : null}
          </div>
        </div>
      </Container>
    </main>
  );
}
