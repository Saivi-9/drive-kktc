import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import { divIcon } from "leaflet";
import { routes } from "../../data/routes";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

const markerIcon = divIcon({
  className: "custom-route-marker",
  iconSize: [20, 20],
});

export default function RouteDetail() {
  const { slug } = useParams();
  const route = useMemo(() => routes.find((item) => item.slug === slug), [slug]);

  if (!route) {
    return (
      <Container className="py-24">
        <SectionTitle title="Route not found" subtitle="We could not locate that route" />
        <p className="mt-4 text-slate-600">Please choose a different route from our collection.</p>
      </Container>
    );
  }

  const polyline = route.stops.map((stop) => [stop.coordinates.lat, stop.coordinates.lng] as [number, number]);

  return (
    <main className="bg-slate-50 text-slate-900">
      <Helmet>
        <title>{route.title} | Drive KKTC</title>
        <meta
          name="description"
          content={`Explore the ${route.title} route with stops, maps, travel tips, and itinerary highlights for Northern Cyprus.`}
        />
      </Helmet>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(248,233,184,0.18),_transparent_18%),linear-gradient(180deg,_rgba(15,76,129,0.88),_rgba(15,76,129,0.62))]" />
        <Container className="relative py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#F8E9B8]">Route guide</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">{route.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{route.overview}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                {route.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100">{tag}</span>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-slate-950/20">
              <div className="rounded-[1.75rem] overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${route.heroImage})`, minHeight: "380px" }} />
            </div>
          </div>
        </Container>
      </section>

      <Container className="space-y-20 py-24">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <Card className="rounded-[2rem] p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[#0F4C81]">Distance</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-950">{route.distance}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[#0F4C81]">Driving time</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-950">{route.drivingTime}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[#0F4C81]">Difficulty</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-950">{route.difficulty}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[#0F4C81]">Best season</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-950">{route.bestSeason}</p>
                </div>
              </div>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              {route.highlights.map((highlight) => (
                <Card key={highlight} className="rounded-[2rem] p-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#0F4C81]">Highlight</p>
                  <p className="mt-3 text-base font-semibold text-slate-950">{highlight}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="rounded-[2rem] p-8">
            <SectionTitle title="Quick facts" subtitle="Route essentials" />
            <div className="mt-8 grid gap-4">
              {[
                { label: "Travel budget", value: route.budget },
                { label: "Elevation gain", value: route.elevation },
                { label: "Average weather", value: route.weather },
                { label: "Walking time", value: route.walkingTime },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{item.label}</p>
                  <p className="mt-3 text-lg font-semibold text-slate-950">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <Button className="w-full">Copy route</Button>
              <Button variant="outline" className="w-full">Download itinerary</Button>
            </div>
          </Card>
        </section>

        <section className="space-y-10">
          <SectionTitle title="Route timeline" subtitle="A day in moments" />
          <div className="space-y-6">
            {route.itinerary.map((item, index) => (
              <div key={item.time} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-[#0F4C81]">{item.time}</p>
                    <p className="mt-2 text-xl font-semibold text-slate-950">{item.title}</p>
                  </div>
                  <div className="rounded-full bg-[#F8E9B8]/20 px-4 py-2 text-sm uppercase tracking-[0.35em] text-[#0F4C81]">Step {index + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <SectionTitle title="Interactive map" subtitle="Stops and highlights" />
          <Card className="overflow-hidden rounded-[2rem] p-0 shadow-xl">
            <MapContainer center={[route.stops[0].coordinates.lat, route.stops[0].coordinates.lng]} zoom={9} className="h-[520px] w-full">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Polyline positions={polyline} pathOptions={{ color: "#0F4C81", weight: 4 }} />
              {route.stops.map((stop) => (
                <Marker
                  key={stop.id}
                  position={[stop.coordinates.lat, stop.coordinates.lng]}
                  icon={markerIcon}
                >
                  <Popup>
                    <div className="max-w-xs">
                      <p className="font-semibold">{stop.name}</p>
                      <p className="mt-2 text-sm text-slate-700">{stop.description}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Card>
        </section>

        <section className="space-y-10">
          <SectionTitle title="Route stops" subtitle="Key experiences" />
          <div className="space-y-6">
            {route.stops.map((stop) => (
              <Card key={stop.id} className="rounded-[2rem] p-0 overflow-hidden shadow-sm">
                <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                  <div className="h-80 bg-cover bg-center" style={{ backgroundImage: `url(${stop.image})` }} />
                  <div className="p-8">
                    <p className="text-sm uppercase tracking-[0.35em] text-[#0F4C81]">{stop.name}</p>
                    <p className="mt-4 text-lg font-semibold text-slate-950">{stop.description}</p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-slate-600">
                      <div className="rounded-3xl bg-slate-50 p-4">
                        <p className="font-semibold text-slate-900">Duration</p>
                        <p className="mt-1">{stop.duration}</p>
                      </div>
                      <div className="rounded-3xl bg-slate-50 p-4">
                        <p className="font-semibold text-slate-900">Open hours</p>
                        <p className="mt-1">{stop.hours}</p>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-slate-600">
                      <div className="rounded-3xl bg-slate-50 p-4">
                        <p className="font-semibold text-slate-900">Parking</p>
                        <p className="mt-1">{stop.parking}</p>
                      </div>
                      <div className="rounded-3xl bg-slate-50 p-4">
                        <p className="font-semibold text-slate-900">Entry fee</p>
                        <p className="mt-1">{stop.fee}</p>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-slate-600">
                      <div className="rounded-3xl bg-slate-50 p-4">
                        <p className="font-semibold text-slate-900">Nearby</p>
                        <p className="mt-1">{stop.nearby.join(", ")}</p>
                      </div>
                      <div className="rounded-3xl bg-slate-50 p-4">
                        <p className="font-semibold text-slate-900">Accessibility</p>
                        <p className="mt-1">{stop.access}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${stop.coordinates.lat},${stop.coordinates.lng}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-3xl bg-[#0F4C81] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0B355B]"
                      >
                        Directions
                      </a>
                      <Button variant="outline" className="text-slate-900">Travel tips</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <SectionTitle title="Travel tips" subtitle="Practical insights" />
          <div className="grid gap-6 md:grid-cols-2">
            {route.travelTips.map((tip) => (
              <Card key={tip} className="rounded-[2rem] p-6">
                <p className="text-slate-700">{tip}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <SectionTitle title="Gallery" subtitle="Scenes from the route" />
          <div className="grid gap-4 sm:grid-cols-3">
            {route.gallery.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
                <div className="h-52 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="p-4 text-sm text-slate-600">{item.caption}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <SectionTitle title="Related routes" subtitle="Continue exploring" />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {routes
              .filter((item) => route.relatedRouteIds.includes(item.id))
              .map((item) => (
                <Link key={item.id} to={`/routes/${item.slug}`} className="rounded-[1.75rem] border border-slate-200 p-6 transition hover:border-[#0F4C81] hover:bg-slate-50">
                  <p className="text-lg font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-3 text-sm text-slate-600">{item.category}</p>
                </Link>
              ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
