import _ from "lodash";
import ACTIONS from "../actionTypes";
import { FILTER } from "../../utility/constants";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.APPLY_FILTER:
      return applyFilter(state, action);
    case ACTIONS.REMOVE_FILTER:
      return removeFilter(state, action);
    default:
      return state;
  }
}

const applyFilter = (state, action) => {
  const { type, id } = action.payload;

  if (type === FILTER.ORIGIN) {
    const otherFilters = state.filter(f => f.type !== FILTER.ORIGIN);
    const existingFilter = state.filter(f => f.type === FILTER.ORIGIN)[0];
    const existingValues = existingFilter ? existingFilter.values : [];
    const values = _.union(existingValues, [id]);

    return [...otherFilters, { type, values }];
  }

  return state.some(filter => filter.type === type) ? state : [...state, action.payload];
};

const removeFilter = (state, action) => {
  return state.filter(filter => filter.type !== action.payload.type);
};
