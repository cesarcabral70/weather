"use client";

// SOURCE: https://codepen.io/front-end-developer/pen/vREwzJ

import useMoonPhase from "@/hooks/useMoonPhase";

import IconRainDay from "./weatherIcon/iconRainSun";
import IconRainNight from "./weatherIcon/iconRainNight";
import TabNavigation from "../tabNavigation/tabNavigation";
import { useState } from "react";

export default function WeatherConditions() {
  const [currentView, setCurrentView] = useState("Today");

  // Adjust to UTC by subtracting the offset
  const originalDate = new Date();
  const utcDate = new Date(
    originalDate.getTime() - originalDate.getTimezoneOffset() * 60000,
  );

  // Format the date in ISO 8601 format
  const isoFormattedDate = utcDate.toISOString();

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

  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray py-6 sm:py-12">
        <div className="relative  border-solid md:border-2 border-white px-6 md:pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="font-bold text-2xl">Hamburg, DE</div>
          <div className="mb-5">
            Today, {new Date().getDay()}/{new Date().getMonth() + 1}/
            {new Date().getFullYear()}
          </div>

          <form className="mb-5 p-4 border-2 border-white">
            <div>
              <div className="flex flex-col">
                <label>Latitude</label>
                <input className="w-full" type="text" />
              </div>

              <div className="flex flex-col">
                <label>Longitude</label>
                <input className="w-full" type="text" />
              </div>

              <div className="flex flex-col">
                <label>City Name</label>
                <input className="w-full" type="text" />
              </div>
            </div>

            <div className="p-4 bg-gray-700">
              <div>
                GPS Coordinates 53° 33&apos; 3.9096&apos;&apos; N 9° 59&apos;
                37.2552&apos;&apos; E
              </div>
              <div> Lat Long (53.551086, 9.993682) </div>
            </div>
          </form>

          <TabNavigation getActiveTab={getActiveTab} />

          {currentView === "Today" ? (
            <div className="mx-auto max-w-md">
              <div className="p-6 mt-5 mb-5 rounded-xl w-full flex items-center space-x-4  bg-gray-800">
                <div className="shrink-0 text-gray-800 -ml-8 md:ml-0">
                  <IconRainDay />{" "}
                </div>
                <div>
                  <div className="text-6xl text-white ">
                    <strong className="font-bold tracking-tighter">20</strong>
                    <span>&deg;</span>
                  </div>
                  <p className="text-white md:text-2xl font-light">20:40</p>
                </div>
              </div>

              <div className="flex md:space-x-4 md:mb-4">
                <div className="w-1/2 ">
                  <div className="md:rounded-xl w-full  items-center bg-orange-400 text-center relative">
                    <div className="shrink-0 text-orange-400 scale-50 -ml-3 md:scale-75 md:ml-0">
                      <IconRainDay />{" "}
                    </div>
                    <div className="-mt-8">
                      <div className="text-4xl text-white absolute top-2 left-5">
                        <strong className="font-bold tracking-tighter">
                          20
                        </strong>
                        <span>&deg;</span>
                      </div>
                      <p className="text-white text-xs font-light absolute top-3 right-3">
                        <strong className="font-bold">7:00</strong>am
                      </p>
                      <p className="text-white font-light pb-5">Morning</p>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 ">
                  <div className="md:rounded-xl w-full  items-center bg-cyan-500 text-center relative">
                    <div className="shrink-0 text-cyan-500 scale-50 -ml-3 md:scale-75 md:ml-0">
                      <IconRainDay />{" "}
                    </div>
                    <div className="-mt-8">
                      <div className="text-4xl text-white absolute top-2 left-5">
                        <strong className="font-bold tracking-tighter">
                          20
                        </strong>
                        <span>&deg;</span>
                      </div>
                      <p className="text-white text-xs font-light absolute top-3 right-3">
                        <strong className="font-bold">7:00</strong>am
                      </p>
                      <p className="text-white font-light pb-5">afternoon</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex md:space-x-4 mb-4">
                <div className="w-1/2 ">
                  <div className="md:rounded-xl w-full items-center bg-cyan-800 text-center relative">
                    <div className="shrink-0 text-cyan-800 scale-50 -ml-3 md:scale-75 md:ml-0">
                      <IconRainDay />{" "}
                    </div>
                    <div className="-mt-8">
                      <div className="text-4xl text-white absolute top-2 left-5">
                        <strong className="font-bold tracking-tighter">
                          20
                        </strong>
                        <span>&deg;</span>
                      </div>
                      <p className="text-white text-xs font-light absolute top-3 right-3">
                        <strong className="font-bold">7:00</strong>am
                      </p>
                      <p className="text-white font-light pb-5">evening</p>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 ">
                  <div className="md:rounded-xl w-full  items-center bg-stone-800 text-center relative">
                    <div className="shrink-0 text-stone-800 scale-50 -ml-3 md:scale-75 md:ml-0">
                      <IconRainNight moonPhasePercent={moonPhasePercent} />{" "}
                    </div>
                    <div className="-mt-8">
                      <div className="text-4xl text-white absolute top-2 left-5">
                        <strong className="font-bold tracking-tighter">
                          20
                        </strong>
                        <span>&deg;</span>
                      </div>
                      <p className="text-white text-xs font-light absolute top-3 right-3">
                        <strong className="font-bold">7:00</strong>am
                      </p>
                      <p className="text-white font-light pb-5">Night</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <ul>
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <li key={item}>
                  Day {item}
                  <div className="flex flex-wrap">
                    <div className="w-1/2 md:w-1/4 ">
                      <div className="w-full items-center bg-orange-400 text-center relative">
                        <div className="shrink-0 text-orange-400 scale-50 -ml-8">
                          <IconRainDay />{" "}
                        </div>
                        <div className="-mt-10">
                          <div className="text-4xl text-white pb-5">
                            <strong className="font-bold tracking-tighter">
                              20
                            </strong>
                            <span>&deg;</span>
                          </div>
                          <p className="text-white w-full text-sm font-light absolute top-2">
                            <strong className="font-bold">Morning</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 md:w-1/4 ">
                      <div className="w-full items-center bg-cyan-500 text-center relative">
                        <div className="shrink-0 text-cyan-500 scale-50 -ml-8">
                          <IconRainDay />{" "}
                        </div>
                        <div className="-mt-10">
                          <div className="text-4xl text-white pb-5">
                            <strong className="font-bold tracking-tighter">
                              20
                            </strong>
                            <span>&deg;</span>
                          </div>
                          <p className="text-white w-full text-sm font-light absolute top-2">
                            <strong className="font-bold">Afternon</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 md:w-1/4 ">
                      <div className="w-full items-center bg-cyan-800 text-center relative">
                        <div className="shrink-0 text-cyan-800 scale-50 -ml-8">
                          <IconRainDay />{" "}
                        </div>
                        <div className="-mt-10">
                          <div className="text-4xl text-white pb-5">
                            <strong className="font-bold tracking-tighter">
                              20
                            </strong>
                            <span>&deg;</span>
                          </div>
                          <p className="text-white w-full text-sm font-light absolute top-2">
                            <strong className="font-bold">Evening</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 md:w-1/4 ">
                      <div className="w-full items-center bg-stone-800 text-center relative">
                        <div className="shrink-0 text-stone-800 scale-50 -ml-8">
                          <IconRainNight moonPhasePercent={moonPhasePercent} />{" "}
                        </div>
                        <div className="-mt-10">
                          <div className="text-4xl text-white pb-5">
                            <strong className="font-bold tracking-tighter">
                              20
                            </strong>
                            <span>&deg;</span>
                          </div>
                          <p className="text-white w-full text-sm font-light absolute top-2">
                            <strong className="font-bold">Night</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
