"use client";

import { useState } from "react";
import TabNavigation from "../tabNavigation/tabNavigation";
import IconRainDay from "./weatherIcon/iconRainSun";

import {
  HookUseWeatherResponse,
  WeatherByDay,
  WeatherRecord,
} from "@/interfaces/BrightSkyInterfaces";
import moment from "moment";
import SearchForm from "../searchForm/searchForm";
import IconManager from "./weatherIcon/iconManager";

export default function WeatherConditions() {
  const [currentView, setCurrentView] = useState("Today");
  const [locationWeatherData, setLocationWeatherData] =
    useState<WeatherRecord>();

  const [locationWeatherByHourData, setLocationWeatherByHourData] = useState();
  const [locationWeatherByDayData, setLocationWeatherByDayData] = useState();

  const handleLocationWeatherData = (data: HookUseWeatherResponse) => {
    if (!data.loading) {
      setLocationWeatherData(data.dataWeather.weather);
      setLocationWeatherByHourData(data.dataWeatherHour);
      setLocationWeatherByDayData(data.dataWeatherDay);
    }
  };

  const getActiveTab = (data: string) => {
    setCurrentView(data);
  };

  const colorsHex = ["#fb923c", "#06b6d4", "#155e75", "#262626"];
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
                      {locationWeatherData.icon && (
                        <IconManager iconName={locationWeatherData.icon} />
                      )}
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
                                  {filteredItem.icon && (
                                    <IconManager iconName={filteredItem.icon} />
                                  )}
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
                    return (
                      <li key={days}>
                        <div className="mb-3">
                          {moment(days).format("dddd, MMMM Do YYYY")}
                        </div>

                        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 mb-8">
                          {locationWeatherByDayData[days].map(
                            (day: WeatherByDay, dayIndex: number) => (
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
                                    {day.icon && (
                                      <IconManager iconName={day.icon} />
                                    )}
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
                            )
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
