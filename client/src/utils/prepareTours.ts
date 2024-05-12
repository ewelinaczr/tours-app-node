import {
  DepartureAirport,
  DepartureTime,
  Difficulty,
  Duration,
  Facilities,
  GroupSize,
  Meals,
  TourType,
} from "../data/TourDetails.tsx";
import type { Tour } from "../data/TourInterfase.tsx";

function mapIndexesTotranslations(
  indexes: number[] | number,
  translationString: any
) {
  const translations = Object.values(translationString);
  return Array.isArray(indexes)
    ? indexes.map((index) => translations[index])
    : translations[indexes];
}

function replaceProperties(tour, prop, trans) {
  const newProp = mapIndexesTotranslations(tour[prop], trans);
  delete tour[prop];
  tour[prop] = newProp;
}

export function prepateTour(tour: any): Tour | undefined {
  replaceProperties(tour, "airport", DepartureAirport);
  replaceProperties(tour, "facilities", Facilities);
  replaceProperties(tour, "meals", Meals);
  replaceProperties(tour, "startDates", DepartureTime);
  replaceProperties(tour, "duration", Duration);
  replaceProperties(tour, "groupSize", GroupSize);
  replaceProperties(tour, "difficulty", Difficulty);
  replaceProperties(tour, "tourType", TourType);
  return tour;
}

export function prepareTours(tours: any): Tour[] | undefined {
  tours.map((tour) => prepateTour(tour));
  const offer = tours.find((tour: Tour) => tour.lastMinute);
  const offerIndex = offer ? tours.indexOf(offer) : 0;
  if (!tours.length) {
    return undefined;
  }
  if (offer) {
    tours.splice(offerIndex, 1);
    return [offer, ...tours];
  }
  return tours;
}
