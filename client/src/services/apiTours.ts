import { prepareTours, prepateTour } from "../utils/prepareTours.ts";

export async function getTours() {
  try {
    const response = await fetch("api/v1/tours");
    const data = await response.json();
    return prepareTours(data.data);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getFilteredTours(searchParams) {
  // const queryParams: string[] = [];
  // console.log(sort, "AAA");
  // filter && queryParams.push(`destination=${filter}`);
  // sort && queryParams.push(`sort=${sort}`);
  // limitFields && queryParams.push(`fields=${limitFields}`);
  // paginate && queryParams.push(`parinate=${paginate}`);
  // const queryString = queryParams.join("&");
  // console.log("queryString", queryString);
  try {
    const response = await fetch(`api/v1/tours?${searchParams}`);
    const data = await response.json();
    return data ? prepareTours(data.data) : undefined;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getTour(id: string) {
  try {
    const response = await fetch(`/api/v1/tours/${id}`);
    const data = await response.json();
    return data ? prepateTour(data.data) : undefined;
  } catch (error) {
    throw new Error(error);
  }
}
