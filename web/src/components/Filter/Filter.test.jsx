import React from "react";
import { shallow } from "enzyme";
import { FILTER } from "../../utility/constants";
import Filter from "./Filter";

describe("<Filter />", () => {
  it("renders unchecked endangered filter when no filter applied", () => {
    const appliedFilters = [];

    const wrapper = shallow(<Filter appliedFilters={appliedFilters} />);

    const filter = wrapper.find("[data-test-filter='endangered']");
    expect(filter.prop("checked")).toEqual(false);
  });

  it("renders checked endangered filter when filter applied", () => {
    const appliedFilters = [{ type: FILTER.CARES_LIST }];

    const wrapper = shallow(<Filter appliedFilters={appliedFilters} />);

    const filter = wrapper.find("[data-test-filter='endangered']");
    expect(filter.prop("checked")).toEqual(true);
  });
});
