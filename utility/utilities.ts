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
