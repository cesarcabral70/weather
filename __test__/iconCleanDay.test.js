import React from "react";
import { shallow } from "enzyme";
import IconClearDay from "./../components/weatherConditions/weatherIcon/IconClearDay";
import styles from "./../weatherConditions.module.scss";

describe("IconClearDay Component", () => {
  it("renders properly", () => {
    const wrapper = shallow(<IconClearDay />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders with the correct classes", () => {
    const wrapper = shallow(<IconClearDay />);
    expect(wrapper.find(`.${styles.icon}`).hasClass(styles.sunny)).toBe(true);
    expect(wrapper.find(`.${styles.sun}`).exists()).toBe(true);
    expect(wrapper.find(`.${styles.rays}`).exists()).toBe(true);
    expect(wrapper.find(`.${styles.title}`).text()).toBe("clear-day");
  });
});
