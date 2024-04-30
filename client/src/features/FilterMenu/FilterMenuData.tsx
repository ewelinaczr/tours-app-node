import {
  DepartureAirport,
  DepartureTime,
  Destination,
  Duration,
  Facilities,
  Meals,
  TourType,
} from "../../data/TourDetails.tsx";
import { ButtonType } from "../../ui/Buttons/FullButton.tsx";

export interface CountInput {
  label: string;
  boundries: number[];
}

export interface SelectInput {
  id: string;
  label: string;
  options: string[];
}

export interface FilerButton {
  label: string;
  type: "reset" | "submit" | "button";
  style: ButtonType;
}

export const tourGeneralInfo: CountInput[] = [
  {
    label: "Guests",
    boundries: [1, 10],
  },
  { label: "Duration", boundries: [7, 30] },
];

export const tourDetailedInfo: SelectInput[] = [
  {
    id: "startDates",
    label: "Tour start date",
    options: Object.values(DepartureTime),
  },
  {
    id: "airport",
    label: "Departure from",
    options: Object.values(DepartureAirport),
  },
  {
    id: "meals",
    label: "Meals",
    options: Object.values(Meals),
  },
  { id: "tourType", label: "Tour type", options: Object.values(TourType) },
];

export const filterButtons: FilerButton[] = [
  { label: "Filter", type: "submit", style: ButtonType.PRIMARY },
  { label: "Clear", type: "reset", style: ButtonType.SECONDARY },
];

export interface TourFilters {
  destination: Destination[];
  startDates: DepartureTime;
  duration: Duration;
  turists: number;
  airport: DepartureAirport;
  tourType: TourType;
  meals: Meals;
  facilities: Facilities[];
}
