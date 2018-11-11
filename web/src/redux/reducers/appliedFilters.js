import ACTIONS from "../actionTypes";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.APPLY_FILTER:
      return state.some(filter => filter.type === action.payload.type) ? state : [...state, action.payload];
    case ACTIONS.REMOVE_FILTER:
      return state.filter(filter => filter.type !== action.payload.type);
    default:
      return state;
  }
}
