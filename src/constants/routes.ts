/**
 * Application Route Path Constants & Navigation Helpers
 */
export const APP_ROUTES = {
  HOME: "/",
  ROUTES: "/routes",
  ROUTE_DETAIL: "/routes/:slug",
  ABOUT: "/about",
  EXPLORE: "/explore",
  CONTACT: "/contact",
} as const;

export function buildRouteDetailPath(slug: string): string {
  return `/routes/${encodeURIComponent(slug.trim())}`;
}
