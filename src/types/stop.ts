export interface Stop {
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
  directions: string;
}
