import React from "react";
import { shallow } from "enzyme";
import { FILTER, SORT_BY } from "../../utility/constants";
import Filter from "./Filter";

describe("<Filter />", () => {
  const commonProps = {
    appliedFilters: [],
    appliedSortId: 0,
    sortOptions: [],
    applyFilter: () => {},
    removeFilter: () => {},
    changeSort: () => {},
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

  describe("Sort dropdown", () => {
    const appliedSortId = 1;
    const expectedName = "expected";
    const sortOptions = [{ id: 2, name: "other" }, { id: appliedSortId, name: expectedName }];
    const wrapper = shallow(<Filter {...commonProps} appliedSortId={appliedSortId} sortOptions={sortOptions} />);

    it("renders option name matching appliedSortId", () => {
      const dropdown = wrapper.find("[data-test='sort-dropdown']");

      expect(dropdown.children().text()).toEqual(expectedName);
    });

    it("renders menu items from sortOptions", () => {
      const dropdownMenu = wrapper.find("[data-test='sort-dropdown-menu']");

      expect(dropdownMenu.children().length).toEqual(sortOptions.length);
    });

    it("marks menu item as active when matches appliedSortId", () => {
      const dropdownMenu = wrapper.find("[data-test='sort-dropdown-menu']");
      const activeItem = dropdownMenu.find(`[active=true]`);

      expect(activeItem.children().text()).toEqual(expectedName);
    });

    it("calls changeSort when clicking on menu item", () => {
      const changeSort = jest.fn();
      const inactiveSortId = 2;
      const sortOptions = [{ id: inactiveSortId, name: "other" }, { id: appliedSortId, name: "active" }];
      const wrapper = shallow(
        <Filter {...commonProps} appliedSortId={appliedSortId} sortOptions={sortOptions} changeSort={changeSort} />
      );
      const dropdownMenu = wrapper.find("[data-test='sort-dropdown-menu']");
      const inactiveItem = dropdownMenu.find(`[active=false]`);

      inactiveItem.simulate("click");

      expect(changeSort).toHaveBeenCalledWith(inactiveSortId);
    });
  });
});
