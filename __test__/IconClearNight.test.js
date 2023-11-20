import React from "react";
import { shallow } from "enzyme";
import IconClearNight from "../components/weatherConditions/weatherIcon/IconClearNight";
import Moon from "../components/weatherConditions/moonIcon/moonIcon";

jest.mock("../hooks/useMoonPhase.tsx", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({ moonPhasePercent: 50 }),
}));

describe("IconClearNight", () => {
  it("renders Moon component with the correct phase prop", () => {
    const wrapper = shallow(<IconClearNight />);
    const moonComponent = wrapper.find(Moon);
    expect(moonComponent.prop("phase")).toBe(50);
  });
});
