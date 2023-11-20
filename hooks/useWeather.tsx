import { WeatherByDay } from "@/interfaces/BrightSkyInterfaces";
import { generateMockData } from "@/mock/mockdata";
import moment from "moment";
import { useEffect, useState } from "react";

type Props = {
  latitude: string;
  longitude: string;
};

export default function useWeather({ latitude, longitude }: Props) {
  const [dataWeather, setDataWeather] = useState({});
  const [dataWeatherHour, setDataWeatherHour] = useState({});
  const [dataWeatherDay, setDataWeatherDay] = useState({});
  const [loading, setLoading] = useState(true);

  const today = moment().format("YYYY-MM-DDTHH:mmZ");
  const thirdDay = moment(today).add(2, "days").format("YYYY-MM-DDTHH:mmZ");

  const filterTimeSlot = ["07:00:00", "12:00:00", "17:00:00", "23:00:00"];

  const DEFAULT_URL = "https://api.brightsky.dev";
  const URL_REGULAR_WEATHER = `${DEFAULT_URL}/current_weather`;
  const URL_DAY_WEATHER = `${DEFAULT_URL}/weather`;
  const URL_PERIOD_WEATHER = URL_DAY_WEATHER;

  useEffect(() => {
    let isMounted = true;

    // console.log("today", today);
    // console.log("thirdDay", thirdDay);
    // console.log("todayOnlyDay", todayOnlyDay);

    async function fetchWeather() {
      try {
        // const GET_REGULAR_WEATHER = fetch(
        // `${URL_REGULAR_WEATHER}?lat=${latitude}&lon=${longitude}`
        // );
        //
        // const GET_PERIOD_WEATHER = fetch(
        // `${URL_DAY_WEATHER}?date=${today}&from_date=${today}&last_date=${thirdDay}&lat=${latitude}&lon=${longitude}`
        // );
        //
        // const GET_DAY_WEATHER = fetch(
        // `${URL_PERIOD_WEATHER}?date=${today}&lat=${latitude}&lon=${longitude}`
        // );
        //
        // console.log("PREPARA");
        // const [DATA_REGULAR_WEATHER, DATA_PERIOD_WEATHER, DATA_DAY_WEATHER] =
        // await Promise.all([
        // GET_REGULAR_WEATHER,
        // GET_PERIOD_WEATHER,
        // GET_DAY_WEATHER,
        // ]);
        //
        // console.log("RODA?");

        // console.log("DATA_REGULAR_WEATHER", DATA_REGULAR_WEATHER);
        // console.log("DATA_PERIOD_WEATHER", DATA_PERIOD_WEATHER);
        // console.log("DATA_DAY_WEATHER", DATA_DAY_WEATHER);

        // const data = DATA_REGULAR_WEATHER.weather;
        // const dataHour = DATA_PERIOD_WEATHER.weather;
        // const dataDay = DATA_DAY_WEATHER.weather;

        /// MOCK DATA!
        const data = generateMockData.weatherData;
        const dataHour = generateMockData.weatherHourData;
        const dataDay = generateMockData.weatherDayData;

        if (isMounted && data.weather) {
          setDataWeather(data);

          setDataWeatherHour(filteredData(dataHour.weather, filterTimeSlot));

          const filterByTimeSlot = filteredData(
            dataDay.weather,
            filterTimeSlot
          );
          const groupByDayAndTimeSlot = groupedData(filterByTimeSlot);

          setDataWeatherDay(groupByDayAndTimeSlot);
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
    dataWeather,
    dataWeatherHour,
    dataWeatherDay,
    loading,
  };
}

const filteredData = (data: WeatherByDay[], timeSlots: String[]) =>
  data.filter((item) => {
    const time = moment(item.timestamp).format("HH:mm:ss");
    return timeSlots.includes(time);
  });

// // Group the filtered data by day
const groupedData = (data: WeatherByDay[]) =>
  data.reduce((acc, item) => {
    const day = moment(item.timestamp).format("YYYY-MM-DD");
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(item);

    return acc;
  }, {});