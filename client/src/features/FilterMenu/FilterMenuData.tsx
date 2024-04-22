import { ButtonType } from "../../ui/Buttons/FullButton.tsx";

export interface CountInput {
  label: string;
  default: number;
}

export interface SelectInput {
  label: string;
  options: string[];
}

export interface FilerButton {
  label: string;
  type: ButtonType;
}

export const tourGeneralInfo: CountInput[] = [
  {
    label: "Guests",
    default: 2,
  },
  { label: "Duration", default: 10 },
];

export const tourDetailedInfo: SelectInput[] = [
  {
    label: "Tour start date:",
    options: ["01.06.2024", "01.07.2024", "01.08.2024"],
  },
  { label: "Departure from:", options: ["Warsaw", "Cracow"] },
  {
    label: "Meals:",
    options: ["All Inclusive", "Breakfast, half-board", "Breakfast"],
  },
  { label: "Tour type:", options: ["Round trip", "Leisure"] },
];

export const tourFacilities: string[] = [
  "By the beach",
  "City tour",
  "Local heritage",
  "Mountains",
];

export const filterButtons: FilerButton[] = [
  { label: "Filter", type: ButtonType.PRIMARY },
  { label: "Clear", type: ButtonType.SECONDARY },
];
