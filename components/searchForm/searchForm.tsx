import useCityName from "@/hooks/useCityName";
import useGeolocalization from "@/hooks/useGeolocalization";
import useWeather from "@/hooks/useWeather.1";
import { HookUseWeatherResponse } from "@/interfaces/BrightSkyInterfaces";
import { validateOnlyNumbers } from "@/utility/utilities";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

type Props = {
  // eslint-disable-next-line no-unused-vars
  handleLocationWeatherData: (data: HookUseWeatherResponse) => void;
};

export default function SearchForm({ handleLocationWeatherData }: Props) {
  const [textLatitude, setTextLatitude] = useState("0");
  const [textLongitude, setTextLongitude] = useState("0");
  const [textLocationName, setTextLocationName] = useState("");
  const [isLatitude, setisLatitude] = useState("");
  const [isLongitude, setisLongitude] = useState("");
  const [shouldUpate, setShouldUpdate] = useState(true);

  const { longitude, latitude, gpsLatitude, gpsLongitude } = useGeolocalization(
    { newLatitude: Number(textLatitude), newLongitude: Number(textLongitude) }
  );

  const weatherData = useWeather({
    latitude: isLatitude,
    longitude: isLongitude,
    isUpdate: shouldUpate,
    handleIsUpdate: handleIsUpdate,
  });

  const { cityName, cityNameStatus } = useCityName({
    latitude: Number(textLatitude),
    longitude: Number(textLongitude),
  });

  const initLat = latitude;
  const initLong = longitude;

  function handleIsUpdate() {
    setShouldUpdate(false);
  }

  useEffect(() => {
    setTextLatitude(initLat.toString());
    setTextLongitude(initLong.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, initLong]);

  useEffect(() => {
    setTextLatitude(textLatitude.toString());
    setTextLongitude(textLongitude.toString());
    setTextLocationName(cityName);

    setisLatitude(textLatitude);
    setisLongitude(textLongitude);

    handleLocationWeatherData(weatherData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textLatitude, textLongitude, cityName]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShouldUpdate(true);
    console.log("SUBMIT!!");
  };

  const handleLatitude = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (validateOnlyNumbers(value) || value === "") {
      setTextLatitude(value);
    }
  };

  const handleLongitude = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (validateOnlyNumbers(value) || value === "") {
      setTextLongitude(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5 p-4 border-2 border-white">
      <div>
        <div className="mb-4 flex flex-col">
          <label>Latitude</label>
          <input
            value={textLatitude}
            onChange={handleLatitude}
            className="w-full text-black"
            type="text"
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label>Longitude</label>
          <input
            value={textLongitude}
            onChange={handleLongitude}
            className="w-full text-black"
            type="text"
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label>City Name</label>
          <input
            disabled
            className="w-full text-black"
            value={textLocationName}
            onChange={(e) => setTextLocationName(e.target.value)}
            type="text"
          />
        </div>
      </div>

      {gpsLatitude.length > 0 && gpsLongitude.length > 0 && (
        <div className="p-4 bg-gray-700">
          <ul>
            <li>
              GPS Coordinates:
              <ul>
                <li>{gpsLatitude}</li>
                <li>{gpsLongitude}</li>
              </ul>
            </li>
          </ul>
        </div>
      )}

      <button
        disabled={cityNameStatus !== "success"}
        type="submit"
        className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-blue-700"
      >
        {cityNameStatus !== "success"
          ? "We cant update weather"
          : "Update weather"}
      </button>
    </form>
  );
}
