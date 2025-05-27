interface Coordinates {
  lat: number;
  lng: number;
}

interface Location {
  address: string;
  city: string;
  state: string;
  coordinates: Coordinates;
}

export interface Facility {
  _id: string;
  name: string;
  type: string;
  description: string;
  features: string[];
  capacity: number;
  location: Location;
  image: string;
} 