export async function getTours() {
  try {
    const response = await fetch("api/v1/tours");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
