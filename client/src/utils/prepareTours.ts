import type { Tour } from "../data/TourInterfase.tsx";

export function prepareTours(tours: Tour[]): Tour[] | undefined {
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
