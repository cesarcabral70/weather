export interface WeatherRecord {
  timestamp: string; // ISO 8601-formatted timestamp
  source_id: number;
  cloud_cover: number | null;
  condition: string | null; // Allowed values: dry, fog, rain, sleet, snow, hail, thunderstorm, null
  dew_point: number | null;
  icon: string | null; // Allowed values: clear-day, clear-night, partly-cloudy-day, partly-cloudy-night, cloudy, fog, wind, rain, sleet, snow, hail, thunderstorm, null
  precipitation_10: number | null;
  precipitation_30: number | null;
  precipitation_60: number | null;
  pressure_msl: number | null;
  relative_humidity: number | null;
  solar_10: number | null;
  solar_30: number | null;
  solar_60: number | null;
  sunshine_30: number | null;
  sunshine_60: number | null;
  temperature: number | null;
  visibility: number | null;
  wind_direction_10: number | null;
  wind_direction_30: number | null;
  wind_direction_60: number | null;
  wind_speed_10: number | null;
  wind_speed_30: number | null;
  wind_speed_60: number | null;
  wind_gust_direction_10: number | null;
  wind_gust_direction_30: number | null;
  wind_gust_direction_60: number | null;
  wind_gust_speed_10: number | null;
  wind_gust_speed_30: number | null;
  wind_gust_speed_60: number | null;
  fallback_source_ids: Record<string, number>;
}

export interface WeatherSource {
  id: number;
  dwd_station_id: string | null;
  wmo_station_id: string | null;
  station_name: string | null;
  observation_type: "forecast" | "synop" | "current" | "historical";
  first_record: string; // ISO 8601-formatted timestamp
  last_record: string; // ISO 8601-formatted timestamp
  lat: number;
  lon: number;
  height: number;
  distance: number;
}

export interface BrightSkyWeatherResponse {
  sources?: WeatherSource[];
  weather?: {
    weather: WeatherRecord;
  };
}

export interface HookUseWeatherResponse {
  loading: boolean;
  dataWeather: BrightSkyWeatherResponse | {};
}

export interface WeatherByDay {
  timestamp: string;
  source_id: number;
  precipitation: number;
  pressure_msl: number;
  sunshine: number;
  temperature: number;
  wind_direction: number;
  wind_speed: number;
  cloud_cover: number;
  dew_point: number;
  relative_humidity: number;
  visibility: number;
  wind_gust_direction: number;
  wind_gust_speed: number;
  condition: string;
  precipitation_probability: null | number;
  precipitation_probability_6h: null | number;
  solar: null | number;
  fallback_source_ids: { sunshine: number };
  icon: string;
}
