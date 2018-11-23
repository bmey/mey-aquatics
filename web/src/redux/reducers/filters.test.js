import ACTIONS from "../actionTypes";
import reducer from "./filters";
import { FILTER } from "../../utility/constants";
import getOrigins from "../../service/originList";

jest.mock("../../service/originList", () => jest.fn());

describe("appliedFilters reducer", () => {
  const initialState = reducer(undefined, {});

  it("returns empty list for initial state", () => {
    expect(initialState).toEqual([]);
  });

  describe("origin filter", () => {
    it.each(["OTHER", "AME_OTHER"])(
      "adds to origin list when action is APPLY_FILTER and payload type is ORIGIN",
      originId => {
        const filterType = FILTER.ORIGIN;
        const action = { type: ACTIONS.APPLY_FILTER, payload: { type: filterType, id: originId } };

        const result = reducer(initialState, action);

        expect(result.length).toEqual(1);
        expect(result[0].type).toEqual(filterType);
        expect(result[0].values.length).toEqual(1);
        expect(result[0].values[0]).toEqual(originId);
      }
    );

    it("adds to origin list when action is APPLY_FILTER and payload type is ORIGIN and other origin filters applied", () => {
      const filterType = FILTER.ORIGIN;
      const originId = "OTHER";
      const action = { type: ACTIONS.APPLY_FILTER, payload: { type: filterType, id: originId } };
      const state = [{ type: filterType, values: ["AME_OTHER"] }];

      const result = reducer(state, action)[0];

      expect(result.type).toEqual(filterType);
      expect(result.values).toEqual(expect.arrayContaining([originId, "AME_OTHER"]));
    });

    it("adds to origin list when action is APPLY_FILTER and payload type is ORIGIN and other origin filters applied", () => {
      const filterType = FILTER.ORIGIN;
      const originId = "OTHER";
      const action = { type: ACTIONS.APPLY_FILTER, payload: { type: filterType, id: originId } };
      const state = [{ type: filterType, values: ["AME_OTHER"] }];

      const result = reducer(state, action)[0];

      expect(result.type).toEqual(filterType);
      expect(result.values).toEqual(expect.arrayContaining([originId, "AME_OTHER"]));
    });

    it("does not remove other filters when action is APPLY_FILTER and payload type is ORIGIN", () => {
      const filterType = FILTER.ORIGIN;
      const originId = "OTHER";
      const action = { type: ACTIONS.APPLY_FILTER, payload: { type: filterType, id: originId } };
      const state = [{ type: FILTER.CARES_LIST }];

      const result = reducer(state, action);

      expect(result.map(r => r.type)).toEqual(expect.arrayContaining([filterType, FILTER.CARES_LIST]));
    });

    it("does not add duplicate origin filters when action is APPLY_FILTER and payload type is ORIGIN", () => {
      const filterType = FILTER.ORIGIN;
      const originId = "OTHER";
      const action = { type: ACTIONS.APPLY_FILTER, payload: { type: filterType, id: originId } };
      const state = [{ type: filterType, values: [originId] }];

      const result = reducer(state, action);

      expect(result.length).toEqual(1);
      expect(result[0].type).toEqual(filterType);
      expect(result[0].values.length).toEqual(1);
      expect(result[0].values[0]).toEqual(originId);
    });

    it("adds all sub-origins to filter when origin has sub-origins", () => {
      const originId = "TEST-ALL";
      getOrigins.mockReturnValue([
        {
          id: originId,
          name: "Top level",
          subLocations: [
            {
              id: "TEST-1",
              name: "One",
            },
            {
              id: "TEST-2",
              name: "Two",
            },
          ],
        },
        {
          id: "other-top-level",
          name: "Top level 2",
          subLocations: [
            {
              id: "OTHER-1",
              name: "One",
            },
          ],
        },
      ]);

      const filterType = FILTER.ORIGIN;
      const action = { type: ACTIONS.APPLY_FILTER, payload: { type: filterType, id: originId, hasSubLocations: true } };
      const state = [{ type: filterType, values: ["OTHER"] }];

      const result = reducer(state, action)[0];

      expect(result.type).toEqual(filterType);
      expect(result.values).toEqual(expect.arrayContaining(["TEST-1", "TEST-2", "OTHER"]));
    });

    it("removes all sub-origins from filter when origin has sub-origins", () => {
      const originId = "TEST-ALL";
      getOrigins.mockReturnValue([
        {
          id: originId,
          name: "Top level",
          subLocations: [
            {
              id: "TEST-1",
              name: "One",
            },
            {
              id: "TEST-2",
              name: "Two",
            },
          ],
        },
        {
          id: "other-top-level",
          name: "Top level 2",
          subLocations: [
            {
              id: "OTHER-1",
              name: "One",
            },
          ],
        },
      ]);

      const filterType = FILTER.ORIGIN;
      const action = {
        type: ACTIONS.REMOVE_FILTER,
        payload: { type: filterType, id: originId, hasSubLocations: true },
      };
      const state = [{ type: filterType, values: ["OTHER", "TEST-1", "TEST-2"] }];

      const result = reducer(state, action)[0];

      expect(result.type).toEqual(filterType);
      expect(result.values).toEqual(["OTHER"]);
    });

    it("removes origin when action is REMOVE_FILTER and payload type is ORIGIN and other origin filters applied", () => {
      const filterType = FILTER.ORIGIN;
      const originId = "SHOULD_REMOVE";
      const action = { type: ACTIONS.REMOVE_FILTER, payload: { type: filterType, id: originId } };
      const state = [{ type: filterType, values: ["SHOULD_STAY", "SHOULD_REMOVE"] }];

      const result = reducer(state, action)[0];

      expect(result.type).toEqual(filterType);
      expect(result.values).toEqual(["SHOULD_STAY"]);
    });
  });

  it("adds filter to list when action is APPLY_FILTER", () => {
    const filterType = FILTER.CARES_LIST;
    const action = { type: ACTIONS.APPLY_FILTER, payload: { type: filterType } };

    const result = reducer(initialState, action);

    expect(result.length).toEqual(1);
    expect(result[0].type).toEqual(filterType);
  });

  it("does not add duplicate filters when action is APPLY_FILTER", () => {
    const filterType = FILTER.CARES_LIST;
    const action = { type: ACTIONS.APPLY_FILTER, payload: { type: filterType } };
    const state = [{ type: filterType }];

    const result = reducer(state, action);

    expect(result.length).toEqual(1);
    expect(result[0].type).toEqual(filterType);
  });

  it("removes filter when action is REMOVE_FILTER", () => {
    const filterType = FILTER.CARES_LIST;
    const otherFilter = 999;
    const action = { type: ACTIONS.REMOVE_FILTER, payload: { type: filterType } };
    const state = [{ type: filterType }, { type: otherFilter }];

    const result = reducer(state, action);

    expect(result.length).toEqual(1);
    expect(result[0].type).toEqual(otherFilter);
  });
});