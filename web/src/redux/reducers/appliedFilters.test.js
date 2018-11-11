import ACTIONS from "../actionTypes";
import reducer from "./appliedFilters";

describe("appliedFilters reducer", () => {
  const initialState = reducer(undefined, {});

  it("returns empty list for initial state", () => {
    expect(initialState).toEqual([]);
  });

  it("adds filter to list when action is APPLY_FILTER", () => {
    const filterType = 0;
    const action = { type: ACTIONS.APPLY_FILTER, payload: { type: filterType } };

    const result = reducer(initialState, action);

    expect(result.length).toEqual(1);
    expect(result[0].type).toEqual(filterType);
  });

  it("does not add duplicate filters when action is APPLY_FILTER", () => {
    const filterType = 0;
    const action = { type: ACTIONS.APPLY_FILTER, payload: { type: filterType } };
    const state = [{ type: filterType }];

    const result = reducer(state, action);

    expect(result.length).toEqual(1);
    expect(result[0].type).toEqual(filterType);
  });

  it("removes filter when action is REMOVE_FILTER", () => {
    const filterType = 0;
    const otherFilter = 1;
    const action = { type: ACTIONS.REMOVE_FILTER, payload: { type: filterType } };
    const state = [{ type: filterType }, { type: otherFilter }];

    const result = reducer(state, action);

    expect(result.length).toEqual(1);
    expect(result[0].type).toEqual(otherFilter);
  });
});
