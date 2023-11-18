import { useState } from "react";

function convertToDMS(coordinate: number) {
  const absolute = Math.abs(coordinate);
  const degrees = Math.floor(absolute);
  const minutesNotTruncated = (absolute - degrees) * 60;
  const minutes = Math.floor(minutesNotTruncated);
  const seconds = Math.floor((minutesNotTruncated - minutes) * 60);

  return `${degrees}° ${minutes}' ${seconds}"`;
}

export default function useGeolocalization() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  if ("geolocation" in navigator) {
    // Geolocation is available
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);

        // You can use latitude and longitude values here
        // For example, display on a map or perform other actions
      },
      (error) => {
        // Handle any errors that occur during geolocation retrieval
        console.error("Error getting geolocation:", error);
      },
    );
  } else {
    // Geolocation is not available/supported
    console.log("Geolocation is not supported by this browser.");
  }

  return {
    latitude,
    longitude,
    gpsLatitude: convertToDMS(latitude),
    gpsLongitude: convertToDMS(longitude),
  };
}
