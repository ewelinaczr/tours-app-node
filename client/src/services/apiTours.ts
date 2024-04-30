import { prepareTours } from "../utils/prepareTours.ts";

export async function getTours() {
  try {
    const response = await fetch("api/v1/tours");
    const data = await response.json();
    return prepareTours(data.data);
  } catch (error) {
    throw new Error(error);
  }
}
