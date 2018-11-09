import { SORT_BY } from "./constants";

const filter = (productList, sortType = SORT_BY.ALPHABETICAL) => {
  if (!productList) {
    return [];
  }

  switch (sortType) {
    case SORT_BY.PRICE_LOW_TO_HIGH:
      return productList.sort((a, b) => a.sizes["S"].price > b.sizes["S"].price);
    case SORT_BY.PRICE_HIGH_TO_LOW:
      return productList.sort((a, b) => getHighestPrice(a.sizes) < getHighestPrice(b.sizes));
    case SORT_BY.ALPHABETICAL:
    default:
      return productList.sort((a, b) => a.common.toLowerCase().localeCompare(b.common.toLowerCase()));
  }
};

const getHighestPrice = sizes => {
  let highest = 0;
  Object.keys(sizes).forEach(key => {
    const price = sizes[key].price;
    highest = price > highest ? price : highest;
  });

  return highest;
};

export default filter;
