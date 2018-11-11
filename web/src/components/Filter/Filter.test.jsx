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

  it("does nothing when clicking on checked endangered filter", () => {
    const appliedFilters = [{ type: FILTER.CARES_LIST }];
    const applyFilter = jest.fn();

    const wrapper = shallow(<Filter appliedFilters={appliedFilters} applyFilter={applyFilter} />);
    const filter = wrapper.find("[data-test='label-endangered']");
    filter.simulate("click");

    expect(applyFilter).not.toBeCalled();
  });

  it("applies filter when clicking on unchecked endangered filter", () => {
    const appliedFilters = [];
    const applyFilter = jest.fn();

    const wrapper = shallow(<Filter appliedFilters={appliedFilters} applyFilter={applyFilter} />);
    const filter = wrapper.find("[data-test='label-endangered']");
    filter.simulate("click");

    expect(applyFilter).toBeCalledWith({ type: FILTER.CARES_LIST });
  });
});
