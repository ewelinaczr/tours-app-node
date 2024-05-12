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
  step: number;
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
    step: 1,
  },
  { label: "Duration", boundries: [0, 2], step: 5 },
];

const defalutSelect = "";

export const tourDetailedInfo: SelectInput[] = [
  {
    id: "startDates",
    label: "Tour start date",
    options: [defalutSelect, ...Object.values(DepartureTime)],
  },
  {
    id: "airport",
    label: "Departure from",
    options: [defalutSelect, ...Object.values(DepartureAirport)],
  },
  {
    id: "meals",
    label: "Meals",
    options: [defalutSelect, ...Object.values(Meals)],
  },
  {
    id: "tourType",
    label: "Tour type",
    options: [defalutSelect, ...Object.values(TourType)],
  },
];

export const filterButtons: FilerButton[] = [
  { label: "Filter", type: "submit", style: ButtonType.PRIMARY },
  { label: "Clear", type: "reset", style: ButtonType.SECONDARY },
];

export interface TourFilters {
  destination?: Destination[];
  startDates?: DepartureTime;
  duration?: Duration;
  turists: number;
  airport?: DepartureAirport;
  tourType?: TourType;
  meals?: Meals;
  facilities?: Facilities[];
}
