import { generateMockData } from "../mock/mockdata";
import { useEffect, useState } from "react";

type Props = {
  latitude: string;
  longitude: string;
};

export default function useWeather({ latitude, longitude }: Props) {
  const [dataWeatherHour, setDataWeatherHour] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchWeather() {
      try {
        // const response = await fetch(
        //   `https://api.brightsky.dev/current_weather?lat=${latitude}&lon=${longitude}`,
        // );
        // const data = await response.json();
        const data = generateMockData.weatherData;

        if (isMounted && data.weather) {
          setDataWeatherHour(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching Weather:", error);
        setLoading(false);
      }
    }

    if (
      loading &&
      Object.keys(dataWeather).length === 0 &&
      latitude !== "" &&
      longitude !== ""
    ) {
      fetchWeather();
    }

    return () => {
      isMounted = false;
    };
  }, [loading, dataWeather, latitude, longitude]);

  return {
    dataWeatherHour,
    loading,
  };
}
