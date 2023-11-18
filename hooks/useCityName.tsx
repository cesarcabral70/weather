import { useState } from "react";

type Props = {
  latitude: number;
  longitude: number;
};

export default function useCityName({ latitude, longitude }: Props) {
  const [cityName, setCityName] = useState("");

  const getCityName = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCZ3QMBKiWjrBumDoDW_3LnpVGW2PZq6qM`,
      );
      const data = await response.json();

      if (data && data.results && data.results.length > 0) {
        // Loop through address components to find the city
        for (let i = 0; i < data.results[0].address_components.length; i++) {
          const component = data.results[0].address_components[i];
          if (component.types.includes("locality")) {
            setCityName(data.results[0].formatted_address);

            return component.long_name; // Found the city name
          }
        }
        setCityName("City name not found");
      } else {
        setCityName("City name not found");
      }
    } catch (error) {
      console.error("Error fetching city name:", error);
      return "Error fetching city name";
    }
  };

  getCityName(latitude, longitude);
  //   console.log(data);

  return { cityName };
}
