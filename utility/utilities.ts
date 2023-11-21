import { WeatherByDay } from "@/interfaces/BrightSkyInterfaces";
import moment from "moment";

export const filteredData = (data: WeatherByDay[], timeSlots: String[]) =>
  data.filter((item) => {
    const time = moment(item.timestamp).format("HH:mm:ss");
    return timeSlots.includes(time);
  });

// // Group the filtered data by day
export const groupedData = (data: WeatherByDay[]) =>
  data.reduce((acc, item) => {
    const day = moment(item.timestamp).format("YYYY-MM-DD");
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(item);

    return acc;
  }, {});

export const validateLatitudeLongitude = (
  value: string,
  type: "latitude" | "longitude",
) => {
  if (
    type === "longitude" &&
    /^(-?((1?[0-7]?|[0-9]?)[0-9])(\.(\d{1,6}))?|180(\.0{1,6})?)$/.test(value)
  ) {
    return value;
  }

  if (
    type === "latitude" &&
    /^(-?((1?[0-7]?|[0-9]?)[0-9])(\.(\d{1,6}))?|180(\.0{1,6})?)$/.test(value)
  ) {
    return value;
  }
};

export function validateOnlyNumbers(s: string) {
  const rgx = /^[0-9]*\.?[0-9]*$/;
  return s.match(rgx);
}
