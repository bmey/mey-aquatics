import ACTIONS from "./actionTypes";

export const applyFilter = filter => {
  return {
    type: ACTIONS.APPLY_FILTER,
    payload: filter,
  };
};
