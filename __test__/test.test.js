import { shallow } from "enzyme";
import IconHail from "../components/weatherConditions/weatherIcon/iconHail";

describe("YourComponent", () => {
  it("renders properly", () => {
    const wrapper = shallow(<IconHail />);
    expect(wrapper.exists()).toBe(true);
  });

  it("render error", () => {
    expect(2).toEqual(2);
  });
});
