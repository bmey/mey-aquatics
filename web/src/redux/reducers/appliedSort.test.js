import ACTIONS from "../actionTypes";
import reducer from "./appliedSort";
import { SORT_BY } from "../../utility/constants";

describe("appliedSort reducer", () => {
  const initialState = reducer(undefined, {});

  it("returns default sort for initial state", () => {
    expect(initialState).toEqual({ id: SORT_BY.ALPHABETICAL });
  });

  it("returns new sort id when action is CHANGE_SORT", () => {
    const sortId = SORT_BY.PRICE_HIGH_TO_LOW;
    const action = { type: ACTIONS.CHANGE_SORT, payload: sortId };

    const result = reducer(initialState, action);

    expect(result.id).toEqual(sortId);
  });
});
