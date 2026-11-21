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

export type AppRouteKey = keyof typeof APP_ROUTES;
export type AppRoutePath = (typeof APP_ROUTES)[AppRouteKey];

export function buildRouteDetailPath(slug: string): string {
  return `/routes/${encodeURIComponent(slug.trim())}`;
}

export function isRouteActive(currentPathname: string, targetRoute: string): boolean {
  const normalizedCurrent = currentPathname.replace(/\/+$/, "") || "/";
  const normalizedTarget = targetRoute.replace(/\/+$/, "") || "/";
  if (normalizedTarget === APP_ROUTES.HOME) {
    return normalizedCurrent === APP_ROUTES.HOME;
  }
  return (
    normalizedCurrent === normalizedTarget ||
    normalizedCurrent.startsWith(`${normalizedTarget}/`)
  );
}

