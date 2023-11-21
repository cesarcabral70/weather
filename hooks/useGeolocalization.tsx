import { useEffect, useState } from "react";

type Props = {
  newLatitude: number;
  newLongitude: number;
};

export default function useGeolocalization({
  newLatitude,
  newLongitude,
}: Props) {
  const [latitude, setLatitude] = useState(newLatitude || 0);
  const [longitude, setLongitude] = useState(newLongitude || 0);
  const [gpsLatitude, setGPSLatitude] = useState("");
  const [gpsLongitude, setGPSLongitude] = useState("");

  useEffect(() => {
    if (newLatitude > 0 && newLongitude > 0) {
      setGPSLatitude(convertToDMS(newLatitude));
      setGPSLongitude(convertToDMS(newLongitude));
      return;
    }

    if ("geolocation" in navigator) {
      // Geolocation is available
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      // Geolocation is not available/supported
      console.log("Geolocation is not supported by this browser.");
    }
  }, [newLatitude, newLongitude]);

  return {
    latitude,
    longitude,
    gpsLatitude,
    gpsLongitude,
  };
}

function convertToDMS(coordinate: number) {
  const absolute = Math.abs(coordinate);
  const degrees = Math.floor(absolute);
  const minutesNotTruncated = (absolute - degrees) * 60;
  const minutes = Math.floor(minutesNotTruncated);
  const seconds = Math.floor((minutesNotTruncated - minutes) * 60);

  return `${degrees}° ${minutes}' ${seconds}"`;
}
