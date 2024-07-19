import { useState, useEffect } from "react";

const useCurrentLocation = () => {
  const [coordinates, setCoordinates] = useState({ lat: 0, long: 0 });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    }
  }, []);

  return { coordinates };
};

export default useCurrentLocation;
