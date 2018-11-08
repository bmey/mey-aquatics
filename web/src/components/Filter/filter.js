import { SORT_BY } from "./constants";

const filter = (productList, sortType = SORT_BY.ALPHABETICAL) => {
  if (!productList) {
    return [];
  }

  switch (sortType) {
    case SORT_BY.PRICE_LOW_TO_HIGH:
      return productList.sort((a, b) => a.sizes["S"].price > b.sizes["S"].price);
    case SORT_BY.PRICE_HIGH_TO_LOW:
      return productList.sort((a, b) => a.sizes["S"].price < b.sizes["S"].price);
    case SORT_BY.ALPHABETICAL:
    default:
      return productList.sort((a, b) => a.common.toLowerCase().localeCompare(b.common.toLowerCase()));
  }
};

export default filter;
