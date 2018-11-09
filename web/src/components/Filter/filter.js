import { FILTER } from "./constants";

const filter = (productList, appliedFilters = []) => {
  if (!productList) {
    return [];
  }

  let filteredList = productList;
  if (appliedFilters.some(filter => filter.type === FILTER.CARES_LIST)) {
    filteredList = filteredList.filter(product => product.onCaresList);
  }

  if (appliedFilters.some(filter => filter.type === FILTER.ORIGIN)) {
    filteredList = filteredList.filter(product => product.onCaresList);
  }

  return filteredList;
};

export default filter;
