import React from "react";
import { shallow } from "enzyme";
import { FILTER } from "../../utility/constants";
import Filter from "./Filter";

describe("<Filter />", () => {
  const commonProps = {
    appliedFilters: [],
    applyFilter: () => {},
    removeFilter: () => {},
  };

  it("renders unchecked endangered filter when no filter applied", () => {
    const appliedFilters = [];

    const wrapper = shallow(<Filter {...commonProps} appliedFilters={appliedFilters} />);

    const filter = wrapper.find("[data-test-filter='endangered']");
    expect(filter.prop("checked")).toEqual(false);
  });

  it("renders checked endangered filter when filter applied", () => {
    const appliedFilters = [{ type: FILTER.CARES_LIST }];

    const wrapper = shallow(<Filter {...commonProps} appliedFilters={appliedFilters} />);

    const filter = wrapper.find("[data-test-filter='endangered']");
    expect(filter.prop("checked")).toEqual(true);
  });

  it("removes filter when clicking on checked endangered filter", () => {
    const appliedFilters = [{ type: FILTER.CARES_LIST }];
    const applyFilter = jest.fn();
    const removeFilter = jest.fn();

    const wrapper = shallow(
      <Filter {...commonProps} appliedFilters={appliedFilters} applyFilter={applyFilter} removeFilter={removeFilter} />
    );
    const filter = wrapper.find("[data-test='label-endangered']");
    filter.simulate("click");

    expect(removeFilter).toBeCalledWith({ type: FILTER.CARES_LIST });
    expect(applyFilter).not.toBeCalled();
  });

  it("applies filter when clicking on unchecked endangered filter", () => {
    const applyFilter = jest.fn();
    const removeFilter = jest.fn();

    const wrapper = shallow(<Filter {...commonProps} applyFilter={applyFilter} removeFilter={removeFilter} />);
    const filter = wrapper.find("[data-test='label-endangered']");
    filter.simulate("click");

    expect(applyFilter).toBeCalledWith({ type: FILTER.CARES_LIST });
    expect(removeFilter).not.toBeCalled();
  });
});
