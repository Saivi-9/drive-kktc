import { theme } from "./theme";

/**
 * Named Brand Color Tokens derived from the Drive KKTC theme palette
 */
export const BRAND_COLORS = theme.colors;
export type BrandColorKey = keyof typeof BRAND_COLORS;

export function getBrandColor(key: BrandColorKey): (typeof BRAND_COLORS)[BrandColorKey] {
  return BRAND_COLORS[key];
}

