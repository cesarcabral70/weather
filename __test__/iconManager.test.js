import React from "react";
import { shallow } from "enzyme";
import IconManager from "./../components/weatherConditions/weatherIcon/IconManager";
import IconClearDay from "./../components/weatherConditions/weatherIcon/IconClearDay";
import IconClearNight from "./../components/weatherConditions/weatherIcon/IconClearNight";
import IconCloudy from "./../components/weatherConditions/weatherIcon/IconCloudy";
import IconFog from "./../components/weatherConditions/weatherIcon/IconFog";
import IconHail from "./../components/weatherConditions/weatherIcon/IconHail";
import IconPartlyCloudyDay from "./../components/weatherConditions/weatherIcon/IconPartlyCloudyDay";
import IconPartlyCloudyNight from "./../components/weatherConditions/weatherIcon/IconPartlyCloudyNight";
import IconRain from "./../components/weatherConditions/weatherIcon/IconRain";
import IconSleet from "./../components/weatherConditions/weatherIcon/IconSleet";
import IconSnow from "./../components/weatherConditions/weatherIcon/IconSnow";
import IconThunderstorm from "./../components/weatherConditions/weatherIcon/IconThunderstorm";
import IconWindy from "./../components/weatherConditions/weatherIcon/IconWindy";

describe("IconManager", () => {
  it("renders correct icon based on iconName prop", () => {
    const clearDayIcon = shallow(<IconManager iconName="clear-day" />);
    expect(clearDayIcon.find(IconClearDay).exists()).toBe(true);

    const clearNightIcon = shallow(<IconManager iconName="clear-night" />);
    expect(clearNightIcon.find(IconClearNight).exists()).toBe(true);

    const clearIconCloudy = shallow(<IconManager iconName="cloudy" />);
    expect(clearIconCloudy.find(IconCloudy).exists()).toBe(true);

    const clearIconFog = shallow(<IconManager iconName="fog" />);
    expect(clearIconFog.find(IconFog).exists()).toBe(true);

    const clearIconHail = shallow(<IconManager iconName="hail" />);
    expect(clearIconHail.find(IconHail).exists()).toBe(true);

    const clearIconPartlyCloudyDay = shallow(
      <IconManager iconName="partly-cloudy-day" />
    );
    expect(clearIconPartlyCloudyDay.find(IconPartlyCloudyDay).exists()).toBe(
      true
    );

    const clearIconPartlyCloudyNight = shallow(
      <IconManager iconName="partly-cloudy-night" />
    );
    expect(
      clearIconPartlyCloudyNight.find(IconPartlyCloudyNight).exists()
    ).toBe(true);

    const clearIconRain = shallow(<IconManager iconName="rain" />);
    expect(clearIconRain.find(IconRain).exists()).toBe(true);

    const clearIconSleet = shallow(<IconManager iconName="sleet" />);
    expect(clearIconSleet.find(IconSleet).exists()).toBe(true);

    const clearIconSnow = shallow(<IconManager iconName="snow" />);
    expect(clearIconSnow.find(IconSnow).exists()).toBe(true);

    const clearIconThunderstorm = shallow(
      <IconManager iconName="thunderstorm" />
    );
    expect(clearIconThunderstorm.find(IconThunderstorm).exists()).toBe(true);

    const clearIconWindy = shallow(<IconManager iconName="wind" />);
    expect(clearIconWindy.find(IconWindy).exists()).toBe(true);
  });

  it("renders null for unknown icon name", () => {
    const unknownIcon = shallow(<IconManager iconName="unknown" />);
    expect(unknownIcon.isEmptyRender()).toBe(true);
  });
});
