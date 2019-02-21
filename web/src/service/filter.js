import { FILTER } from '../utility/constants';
import { compareCaseInsentitive } from '../utility/strings';

export const isFilterApplied = (appliedFilters, filterType) => {
  return appliedFilters.some(filter => filter.type === filterType);
};

const filter = (productList, appliedFilters = []) => {
  if (!productList) {
    return [];
  }

  let filteredList = productList;
  if (appliedFilters.some(filter => filter.type === FILTER.CARES_LIST)) {
    filteredList = filteredList.filter(product => product.onCaresList);
  }

  if (appliedFilters.some(filter => filter.type === FILTER.ORIGIN)) {
    const originFilter = appliedFilters.filter(filter => filter.type === FILTER.ORIGIN)[0].values;

    if (originFilter.length > 0) {
      filteredList = filteredList.filter(product =>
        originFilter.some(filter => compareCaseInsentitive(filter, product.origin) === 0)
      );
    }
  }

  return filteredList;
};

export default filter;
