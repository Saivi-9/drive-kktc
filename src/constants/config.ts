/**
 * Drive KKTC Application Configuration & Regional Metadata
 */
export const APP_CONFIG = {
  siteName: "Drive KKTC",
  tagline: "Discover Scenic Driving Routes & Heritage Across Northern Cyprus",
  defaultLocale: "en",
  supportedLocales: ["en", "tr"] as const,
  regions: [
    "Lefke",
    "Girne (Kyrenia)",
    "Karpaz Peninsula",
    "Gazimağusa (Famagusta)",
    "Lefkoşa (Nicosia)",
    "Güzelyurt",
  ] as const,
  contactEmail: "info@drivekktc.com",
} as const;

export type SupportedRegion = (typeof APP_CONFIG.regions)[number];
