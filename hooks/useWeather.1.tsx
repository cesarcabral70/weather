import { filteredData, groupedData } from "@/utility/utilities";
import moment from "moment";
import { useEffect, useState } from "react";
import { Props } from "./useWeather";
import { generateMockData } from "@/mock/mockdata";
import axios from "axios";

export default function useWeather({
  latitude,
  longitude,
  isUpdate,
  handleIsUpdate,
}: Props) {
  const [dataWeather, setDataWeather] = useState({});
  const [dataWeatherHour, setDataWeatherHour] = useState({});
  const [dataWeatherDay, setDataWeatherDay] = useState({});
  const [loading, setLoading] = useState(true);

  const today = moment().format("YYYY-MM-DDT02:mmZ");
  const tomorrow = moment().add(1, "day").format("YYYY-MM-DDT02:mmZ"); // Get the date for tomorrow
  const thirdDay = moment(tomorrow).add(2, "days").format("YYYY-MM-DDT23:mmZ");

  const filterTimeSlot = ["07:00:00", "12:00:00", "17:00:00", "23:00:00"];

  const DEFAULT_URL = "https://api.brightsky.dev";
  const URL_REGULAR_WEATHER = `${DEFAULT_URL}/current_weather`;
  const URL_DAY_WEATHER = `${DEFAULT_URL}/weather`;
  const URL_PERIOD_WEATHER = URL_DAY_WEATHER;

  useEffect(() => {
    let isMounted = true;

    // console.log("---->> BEFORE PREPARE UPDATE", isUpdate);
    // console.log(
    //   "---->> BEFORE",
    //   "Object.keys(dataWeather).length === 0",
    //   Object.keys(dataWeather).length !== 0,
    //   Object.keys(dataWeather).length,
    //   dataWeather
    // );
    // console.log("loading ->>", loading);
    // console.log(
    //   "Object.keys(dataWeather).length === 0",
    //   Object.keys(dataWeather).length === 0
    // );
    // console.log("isUpdate", isUpdate);
    // console.log('latitude !== ""', latitude !== "");
    // console.log('longitude !== "', longitude !== "");
    // console.log("isMounted", isMounted);
    async function fetchWeather() {
      try {
        const regularWeatherUrl = `${URL_REGULAR_WEATHER}?lat=${latitude}&lon=${longitude}`;
        const periodWeatherUrl = `${URL_DAY_WEATHER}?date=${tomorrow}&from_date=${tomorrow}&last_date=${thirdDay}&lat=${latitude}&lon=${longitude}`;
        const dayWeatherUrl = `${URL_PERIOD_WEATHER}?date=${today}&lat=${latitude}&lon=${longitude}`;

        const [
          RESPONSE_REGULAR_WEATHER,
          RESPONSE_PERIOD_WEATHER,
          RESPONSE_DAY_WEATHER,
        ] = await Promise.all([
          axios.get(regularWeatherUrl),
          axios.get(periodWeatherUrl),
          axios.get(dayWeatherUrl),
        ]);
        const dataRegularWeather = RESPONSE_REGULAR_WEATHER.data;
        const dataPeriodWeather = RESPONSE_PERIOD_WEATHER.data;
        const dataDayWeather = RESPONSE_DAY_WEATHER.data;
        const data = dataRegularWeather;
        const dataHour = dataDayWeather;
        const dataDay = dataPeriodWeather;

        // const [
        //   RESPONSE_REGULAR_WEATHER,
        //   RESPONSE_PERIOD_WEATHER,
        //   RESPONSE_DAY_WEATHER,
        // ] = await Promise.all([
        //   fetch(regularWeatherUrl),
        //   fetch(periodWeatherUrl),
        //   fetch(dayWeatherUrl),
        // ]);

        // if (
        //   !RESPONSE_REGULAR_WEATHER.ok ||
        //   !RESPONSE_PERIOD_WEATHER.ok ||
        //   !RESPONSE_DAY_WEATHER.ok
        // ) {
        //   throw new Error("One or more requests failed");
        // }

        // const dataRegularWeather = await RESPONSE_REGULAR_WEATHER.json();
        // const dataPeriodWeather = await RESPONSE_PERIOD_WEATHER.json();
        // const dataDayWeather = await RESPONSE_DAY_WEATHER.json();

        // const data = dataRegularWeather;
        // const dataHour = dataDayWeather;
        // const dataDay = dataPeriodWeather;

        // MOCK DATA!
        // const data = generateMockData.weatherData;
        // const dataHour = generateMockData.weatherHourData;
        // const dataDay = generateMockData.weatherDayData;

        console.log(data);
        console.log(dataHour);
        console.log(dataDay);

        console.log("PREPARATION UPDATED?");

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
          handleIsUpdate();

          console.log("UPDATED!!!!!");
        }
      } catch (error) {
        console.error("Error fetching Weather:", error);
        setDataWeather({});
        setLoading(false);
        console.log("ERROR ---> SET LOADING FALSE");
      }
    }

    if (
      (loading || isUpdate) &&
      (Object.keys(dataWeather).length === 0 || isUpdate) &&
      latitude !== "" &&
      longitude !== ""
    ) {
      fetchWeather();
    }

    return () => {
      isMounted = false;
    };
  }, [loading, latitude, longitude, isUpdate]);

  return {
    dataWeather,
    dataWeatherHour,
    dataWeatherDay,
    loading,
  };
}
