export interface RouteFacts {
  stops: number;
  photoSpots: number;
  restaurants: number;
  heritageSites: number;
  fuelStops: number;
}

export interface ItineraryItem {
  time: string;
  title: string;
}

export interface RouteStop {
  id: string;
  name: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  image: string;
  hours: string;
  fee: string;
  parking: string;
  access: string;
  duration: string;
  tips: string[];
  nearby: string[];
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
}

export interface Route {
  id: string;
  slug: string;
  title: string;
  category: string;
  themes: string[];
  difficulty: string;
  duration: string;
  distance: string;
  drivingTime: string;
  walkingTime: string;
  bestSeason: string;
  budget: string;
  elevation: string;
  weather: string;
  heroImage: string;
  overview: string;
  highlights: string[];
  tags: string[];
  gallery: GalleryItem[];
  stops: RouteStop[];
  itinerary: ItineraryItem[];
  facts: RouteFacts;
  travelTips: string[];
  relatedRouteIds: string[];
}
