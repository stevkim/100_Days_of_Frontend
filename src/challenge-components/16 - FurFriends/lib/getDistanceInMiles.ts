import { getDistance } from "geolib";

type Coordinates = {
  lat: number;
  long: number;
};

export const getDistanceInMiles = (
  point1: Coordinates,
  point2: Coordinates,
) => {
  const first = { latitude: point1.lat, longitude: point1.long };
  const second = { latitude: point2.lat, longitude: point2.long };
  const meters = getDistance(first, second);

  // convert meters to miles
  const miles = meters * 0.0006213712;

  return miles;
};
