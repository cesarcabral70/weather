"use client";

// SOURCE: https://codepen.io/front-end-developer/pen/vREwzJ

import useMoonPhase from "@/hooks/useMoonPhase";

import IconWindy from "./watherIcon/iconWindy";
import IconFog from "./watherIcon/iconFog";
import IconSleet from "./watherIcon/iconSleet";
import IconHail from "./watherIcon/iconHail";
import IconRain from "./watherIcon/iconRain";
import IconPartlyCloudyNight from "./watherIcon/iconPartlyCloudyNight";
import IconClearNight from "./watherIcon/iconClearNight";
import IconClearDay from "./watherIcon/iconClearDay";
import IconSnow from "./watherIcon/iconSnow";
import IconThunderstorm from "./watherIcon/iconThunderstorm";
import IconPartlyCloudyDay from "./watherIcon/iconPartlyCloudyDay";
import IconRainDay from "./watherIcon/iconRainSun";
import IconRainNight from "./watherIcon/iconRainNight";

export default function WeatherConditions() {
  const { moonPhasePercent } = useMoonPhase({
    date: "2023-11-18T17:58:00+00:00",
  });

  //   Expected condtions:
  //    - [OK] clear-day
  //    - [OK] clear-night
  //    - [OK] partly-cloudy-day
  //    - [OK] partly-cloudy-night
  //    - [OK] cloudy
  //    - [OK] fog
  //    - [OK] wind
  //    - [OK] rain
  //    - [OK] sleet (granizo)
  //    - [OK] snow
  //    - hail (chuva de granizo)
  //    - [OK] thunderstorm
  //    - null

  return (
    <>
      <IconRainNight moonPhasePercent={moonPhasePercent} />
      <IconRainDay />
      <IconThunderstorm />
      <IconPartlyCloudyDay />
      <IconSnow />
      <IconClearDay />
      <IconClearNight moonPhasePercent={moonPhasePercent} />
      <IconPartlyCloudyNight moonPhasePercent={moonPhasePercent} />
      <IconRain />
      <IconHail />
      <IconSleet />
      <IconFog />
      <IconWindy />
    </>
  );
}
