// SOURCE: https://codepen.io/front-end-developer/pen/vREwzJ

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

import { useEffect } from "react";
import IconClearDay from "./iconClearDay";
import IconClearNight from "./iconClearNight";
import IconCloudy from "./iconCloudy";
import IconFog from "./iconFog";
import IconHail from "./iconHail";
import IconPartlyCloudyDay from "./iconPartlyCloudyDay";
import IconPartlyCloudyNight from "./iconPartlyCloudyNight";
import IconRain from "./iconRain";
import IconSleet from "./iconSleet";
import IconSnow from "./iconSnow";
import IconThunderstorm from "./iconThunderstorm";
import IconWindy from "./iconWindy";

type Props = {
  iconName: string;
};

export default function IconManager({ iconName }: Props) {
  switch (iconName) {
    case "clear-day":
      return <IconClearDay />;

    case "clear-night":
      return <IconClearNight />;

    case "partly-cloudy-day":
      return <IconPartlyCloudyDay />;

    case "partly-cloudy-night":
      return <IconPartlyCloudyNight />;

    case "cloudy":
      return <IconCloudy />;

    case "fog":
      return <IconFog />;

    case "wind":
      return <IconWindy />;

    case "rain":
      return <IconRain />;

    case "sleet":
      return <IconSleet />;

    case "snow":
      return <IconSnow />;

    case "hail":
      return <IconHail />;

    case "thunderstorm":
      return <IconThunderstorm />;

    default:
      return null;
  }
}
