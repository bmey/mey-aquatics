import _ from 'lodash';
import { FILTER } from '../../utility/constants';
import getOrigins from '../../service/originList';

export const applyFilter = (state, action) => {
  const { type, id, hasSubLocations } = action.payload;

  if (type === FILTER.ORIGIN) {
    let idsToAdd = [id];
    const otherFilters = state.filter(f => f.type !== FILTER.ORIGIN);
    const existingFilter = state.filter(f => f.type === FILTER.ORIGIN)[0];
    const existingValues = existingFilter ? existingFilter.values : [];

    if (hasSubLocations) {
      idsToAdd = getOrigins()
        .filter(o => o.id === id)[0]
        .subLocations.map(s => s.id);
    }

    const values = _.union(existingValues, idsToAdd);

    return [...otherFilters, { type, values }];
  }

  return state.some(filter => filter.type === type) ? state : [...state, action.payload];
};

export const removeFilter = (state, action) => {
  const { type, id, hasSubLocations } = action.payload;

  if (type === FILTER.ORIGIN) {
    let idsToRemove = [id];
    const otherFilters = state.filter(f => f.type !== FILTER.ORIGIN);
    const existingFilter = state.filter(f => f.type === FILTER.ORIGIN)[0];
    const existingValues = existingFilter ? existingFilter.values : [];

    if (hasSubLocations) {
      idsToRemove = getOrigins()
        .filter(o => o.id === id)[0]
        .subLocations.map(s => s.id);
    }

    const values = existingValues.filter(v => !idsToRemove.includes(v));

    return [...otherFilters, { type, values }];
  }

  return state.filter(filter => filter.type !== action.payload.type);
};
