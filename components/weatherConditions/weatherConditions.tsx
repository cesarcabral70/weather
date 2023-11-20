"use client";

// SOURCE: https://codepen.io/front-end-developer/pen/vREwzJ

import useMoonPhase from "@/hooks/useMoonPhase";

import { useEffect, useState } from "react";
import TabNavigation from "../tabNavigation/tabNavigation";
import IconRainNight from "./weatherIcon/iconRainNight";
import IconRainDay from "./weatherIcon/iconRainSun";

import {
  BrightSkyWeatherResponse,
  HookUseWeatherResponse,
  WeatherByDay,
} from "@/interfaces/BrightSkyInterfaces";
import moment from "moment";
import SearchForm from "../searchForm/searchForm";

export default function WeatherConditions() {
  const [currentView, setCurrentView] = useState("Today");
  const [locationWeatherData, setLocationWeatherData] =
    useState<BrightSkyWeatherResponse>();

  const [locationWeatherByHourData, setLocationWeatherByHourData] = useState();
  const [locationWeatherByDayData, setLocationWeatherByDayData] = useState();

  // console.log(weatherData);

  // Adjust to UTC by subtracting the offset
  const originalDate = new Date();
  const utcDate = new Date(
    // eslint-disable-next-line prettier/prettier
    originalDate.getTime() - originalDate.getTimezoneOffset() * 60000
  );

  // Format the date in ISO 8601 format
  const isoFormattedDate = utcDate.toISOString();

  const handleLocationWeatherData = (data: HookUseWeatherResponse) => {
    if (!data.loading) {
      setLocationWeatherData(data.dataWeather.weather);
      setLocationWeatherByHourData(data.dataWeatherHour);
      setLocationWeatherByDayData(data.dataWeatherDay);
    }
  };

  const { moonPhasePercent } = useMoonPhase({
    date: isoFormattedDate,
  });

  //   Expected condtions:
  //    - [<IconClearDay />] clear-day
  //    - [<IconClearNight />] clear-night
  //    - [<IconPartlyCloudyDay />] partly-cloudy-day
  //    - [<IconPartlyCloudyNight />] partly-cloudy-night
  //    - [<IconCloudy />] cloudy
  //    - [<IconFog />] fog
  //    - [<IconWindy />] wind
  //    - [<IconRain />] rain
  //    - [<IconSleet />] sleet (granizo)
  //    - [<IconSnow />] snow
  //    - [<IconHail />] hail (chuva de granizo)
  //    - [<IconThunderstorm />] thunderstorm
  //    - null

  const getActiveTab = (data: string) => {
    setCurrentView(data);
  };

  const colorsHex = ["#fb923c", "#06b6d4", "#155e75", "#262626"];
  // const colorCollection = ["orange-400", "cyan-500", "cyan-800", "stone-800"];
  const timeCollection = ["Morning", "Afternoon", "Evening", "Night"];

  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray py-6 sm:py-12">
        <div className="relative  border-solid w-full md:border-2 border-white px-6 md:pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <SearchForm handleLocationWeatherData={handleLocationWeatherData} />

          {locationWeatherData &&
          Object.keys(locationWeatherData).length > 0 ? (
            <>
              <TabNavigation getActiveTab={getActiveTab} />
              {currentView === "Today" ? (
                <div className="mx-auto max-w-md">
                  <div className="p-6 mt-5 mb-5 rounded-xl w-full flex items-center space-x-4  bg-gray-800">
                    <div className="shrink-0 text-gray-800 -ml-8 md:ml-0">
                      <IconRainDay />{" "}
                    </div>
                    <div>
                      <div className="text-6xl text-white ">
                        <strong className="font-bold tracking-tighter">
                          {parseInt(locationWeatherData.temperature)}
                        </strong>
                        <span>&deg;</span>
                      </div>
                      <p className="text-white md:text-md font-light">
                        {moment(locationWeatherData.timestamp).format(
                          "dddd, MMMM Do YYYY, h:mm a"
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 grid-cols-2">
                    {locationWeatherByHourData &&
                      locationWeatherByHourData.map(
                        (filteredItem: WeatherByDay[], index: number) => {
                          return (
                            <div key={index}>
                              <div
                                className={`md:rounded-xl w-full items-center  text-center relative`}
                                style={{
                                  backgroundColor: colorsHex[index],
                                }}
                              >
                                <div
                                  className={`shrink-0  scale-50 -ml-3 md:scale-75 md:ml-0 `}
                                  style={{
                                    color: colorsHex[index],
                                  }}
                                >
                                  <IconRainDay />{" "}
                                </div>
                                <div className="-mt-8">
                                  <div className="text-4xl text-white absolute top-2 left-5">
                                    <strong className="font-bold tracking-tighter">
                                      {parseInt(filteredItem.temperature)}
                                    </strong>
                                    <span>&deg;</span>
                                  </div>
                                  <p className="text-white text-xs font-light absolute top-3 right-3">
                                    <strong className="font-bold">
                                      {moment(filteredItem.timestamp).format(
                                        "ha"
                                      )}
                                    </strong>
                                  </p>
                                  <p className="text-white font-light pb-5">
                                    {timeCollection[index]}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                  </div>
                </div>
              ) : (
                <ul>
                  {Object.keys(locationWeatherByDayData).map((days) => {
                    console.log(locationWeatherByDayData[days]);
                    console.log("---->", days);
                    return (
                      <li key={days}>
                        <div className="mb-3">
                          {moment(days).format("dddd, MMMM Do YYYY")}
                        </div>

                        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 mb-8">
                          {locationWeatherByDayData[days].map(
                            (day, dayIndex) => {
                              console.log(dayIndex);
                              return (
                                <div key={day.timestamp + dayIndex}>
                                  <div
                                    className={`w-full items-center text-center relative`}
                                    style={{
                                      backgroundColor: colorsHex[dayIndex],
                                    }}
                                  >
                                    <div
                                      className={`shrink-0 scale-50 -ml-8`}
                                      style={{
                                        color: colorsHex[dayIndex],
                                      }}
                                    >
                                      <IconRainDay />{" "}
                                    </div>

                                    <div className="-mt-10">
                                      <div className="text-4xl text-white pb-5">
                                        <strong className="font-bold tracking-tighter">
                                          {parseInt(day.temperature)}
                                        </strong>
                                        <span>&deg;</span>
                                      </div>
                                      <p className="text-white w-full text-sm font-light absolute top-2">
                                        <strong className="font-bold">
                                          {timeCollection[dayIndex]}
                                        </strong>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </>
          ) : (
            <div>No data provided</div>
          )}
        </div>
      </div>
    </>
  );
}
