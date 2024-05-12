export function isAvailableIn(
  property: string | string[],
  reqParam: string | string[]
): boolean {
  if (!reqParam || !reqParam.length) {
    return true;
  }
  if (Array.isArray(reqParam) && Array.isArray(property)) {
    const tourParam = reqParam.filter((item) => property.includes(item));
    return tourParam.length === reqParam.length;
  }
  if (Array.isArray(property) && !Array.isArray(reqParam)) {
    return property.includes(reqParam);
  }
  if (Array.isArray(reqParam) && !Array.isArray(property)) {
    return reqParam.includes(property);
  }
  return reqParam === property;
}
