import useCurrentLocation from "../hooks/useCurrentLocation";
import { MapPin } from "lucide-react";
import { getDistanceInMiles } from "../lib/getDistanceInMiles";

interface DistanceProps {
  location: { lat: number; long: number };
}

const Distance = ({ location }: DistanceProps) => {
  const { coordinates } = useCurrentLocation();

  const distance = getDistanceInMiles(coordinates, location);

  return (
    <div className="flex items-center text-xs">
      <MapPin size={12} color="red" strokeWidth="2px" className="mr-1" />
      {distance.toFixed(2)} miles
    </div>
  );
};

export default Distance;
