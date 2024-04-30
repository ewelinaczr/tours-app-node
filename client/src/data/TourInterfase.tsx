import {
  Facilities,
  GroupSize,
  DepartureAirport,
  DepartureTime,
  Difficulty,
  Duration,
  Meals,
  TourType,
  Destination,
} from "./TourDetails";

export interface Tour {
  destination: Destination;
  subTitle: string;
  description: string;
  price: number;
  priceDiscount: number;
  rating: number;
  ratingQuantity: number;
  startDates: DepartureTime[];
  duration: Duration[];
  airport: DepartureAirport[];
  tourType: TourType;
  meals: Meals;
  facilities: Facilities[];
  groupSize: GroupSize;
  flyghtDuration: string;
  distance: string;
  weather: string;
  bestseller: boolean;
  lastMinute: boolean;
  difficulty: Difficulty;
  tourPlan: string[];
  locations: Location[];
  attractions: string[];
  guides: string[];
  photos: string[];
  createdAt: Date[];
}

export interface Location {
  id: string;
  description: string;
  type: string;
  coordinates: number[];
  address: string;
  day: number;
}
