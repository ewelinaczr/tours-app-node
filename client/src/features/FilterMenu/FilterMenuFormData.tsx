import { Facilities } from "../../data/TourDetails";

export interface FilterMenuForm {
  destination: string;
  startDates: Date[];
  duration: number[];
  airport: string[];
  tourType: string;
  meals: string;
  facilities: Facilities[];
  groupSize: string;
  flyghtduration: string;
  distance: string;
  weather: string;
  bestseller: boolean;
  lastMinute: boolean;
  difficulty: string;
  tourPlan: string[];
  startLocation: string[];
  locations: string[];
  attractions: string[];
  guides: string[];
  photos: string[];
  createdAt: Date[];
}
