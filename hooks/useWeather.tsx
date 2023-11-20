import { WeatherByDay } from "@/interfaces/BrightSkyInterfaces";
import { generateMockData } from "@/mock/mockdata";
import axios from "axios";

export type Props = {
  latitude: string;
  longitude: string;
  isUpdate: boolean;
  handleIsUpdate: () => void;
};
