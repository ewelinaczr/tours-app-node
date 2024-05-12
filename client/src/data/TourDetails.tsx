export enum Destination {
  VIETNAM = "Vietnam",
  CAMBODIA = "Cambodia",
  THAILAND = "Thailand",
  CHINA = "China",
  JAPAN = "Japan",
  INDONESIA = "Indonesia",
  MALAYSIA = "Malaysia",
  LAOS = "Laos",
  SINGAPORE = "Singapore",
}

export enum Meals {
  ALL_INCLUSIVR = "All Inclusive",
  HALF_BOARD = "Breakfast, half-board",
  BREAKFAST = "Breakfast",
}

export enum DepartureAirport {
  WARSAW = "Warsaw",
  CRACOW = "Cracow",
}

// export const DepartureAirport = {
//   WARSAW: "Warsaw",
//   CRACOW: "Cracow",
// } as const;

export type DepartureAirportType =
  (typeof DepartureAirport)[keyof typeof DepartureAirport];

export enum TourType {
  ROUND_TRIP = "Round trip",
  LEISURE = "Leisure",
}

export enum DepartureTime {
  JUNE = "01.06.2024",
  JULY = "01.07.2024",
  AUGUST = "01.08.2024",
}

export enum Difficulty {
  MEDIUM = "medium",
  DIFFICULT = "difficult",
  EASY = "easy",
}

export enum Duration {
  SHORT = "10 days",
  MEDIUM = "15 days",
  LONG = "20 days",
}

export enum GroupSize {
  SMALL = "max 15",
  MEDIUM = "max 30",
  LAGRE = "max 50",
}

export enum Facilities {
  BY_THE_BEACH = "By the beach",
  CITY_TOUR = "City tour",
  LOCAL_HERITAGE = "Local heritage",
  MOUNTAINS = "Mountains",
}

export enum Guides {
  BY_THE_BEACH = "By the beach",
  CITY_TOUR = "City tour",
  LOCAL_HERITAGE = "Local heritage",
}
