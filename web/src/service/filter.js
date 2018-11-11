import { FILTER } from "../utility/constants";
import { compareCaseInsentitive } from "../utility/strings";

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
    const originFilters = appliedFilters.filter(filter => filter.type === FILTER.ORIGIN);

    filteredList = filteredList.filter(product =>
      originFilters.some(originFilter => compareCaseInsentitive(originFilter.value, product.origin) === 0)
    );
  }

  return filteredList;
};

export default filter;
