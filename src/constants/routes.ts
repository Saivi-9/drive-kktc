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

export function normalizeRoutePath(pathname: string): string {
  const trimmed = pathname.trim().replace(/\/+$/, "");
  return trimmed.startsWith("/") ? trimmed || "/" : `/${trimmed}`;
}

export function extractRouteSlug(pathname: string): string | null {
  const normalized = normalizeRoutePath(pathname);
  const prefix = `${APP_ROUTES.ROUTES}/`;
  if (!normalized.startsWith(prefix)) {
    return null;
  }
  const rawSlug = normalized.slice(prefix.length).split("/")[0];
  if (!rawSlug) {
    return null;
  }
  try {
    return decodeURIComponent(rawSlug);
  } catch {
    return rawSlug;
  }
}

export function isRouteActive(currentPathname: string, targetRoute: string): boolean {
  const normalizedCurrent = normalizeRoutePath(currentPathname);
  const normalizedTarget = normalizeRoutePath(targetRoute);
  if (normalizedTarget === APP_ROUTES.HOME) {
    return normalizedCurrent === APP_ROUTES.HOME;
  }
  return (
    normalizedCurrent === normalizedTarget ||
    normalizedCurrent.startsWith(`${normalizedTarget}/`)
  );
}

export function buildRoutePathWithQuery(
  basePath: string,
  params?: Record<string, string | number | boolean | null | undefined>,
): string {
  const normalizedBase = normalizeRoutePath(basePath);
  if (!params) {
    return normalizedBase;
  }
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      searchParams.set(key, String(value).trim());
    }
  }
  const queryString = searchParams.toString();
  return queryString ? `${normalizedBase}?${queryString}` : normalizedBase;
}

export function isRouteDetailPath(pathname: string): boolean {
  const slug = extractRouteSlug(pathname);
  return slug !== null && slug.trim().length > 0;
}

const STATIC_APP_ROUTES: ReadonlySet<string> = new Set([
  APP_ROUTES.HOME,
  APP_ROUTES.ROUTES,
  APP_ROUTES.ABOUT,
  APP_ROUTES.EXPLORE,
  APP_ROUTES.CONTACT,
]);

export function isKnownStaticRoute(pathname: string): boolean {
  return STATIC_APP_ROUTES.has(normalizeRoutePath(pathname));
}

export function isValidAppRoute(pathname: string): boolean {
  return isKnownStaticRoute(pathname) || isRouteDetailPath(pathname);
}




