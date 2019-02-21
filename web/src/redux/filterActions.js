import ACTIONS from './actionTypes';

export const applyFilter = filter => {
  return {
    type: ACTIONS.APPLY_FILTER,
    payload: filter,
  };
};

export const removeFilter = filter => {
  return {
    type: ACTIONS.REMOVE_FILTER,
    payload: filter,
  };
};

export const changeSort = sortId => {
  return {
    type: ACTIONS.CHANGE_SORT,
    payload: sortId,
  };
};
