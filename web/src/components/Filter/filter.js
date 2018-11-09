import { SORT_BY } from "./constants";

const sort = (productList, sortType = SORT_BY.ALPHABETICAL) => {
  if (!productList) {
    return [];
  }

  switch (sortType) {
    case SORT_BY.PRICE_LOW_TO_HIGH:
      return productList.sort((a, b) => getLowestPrice(a.sizes) > getLowestPrice(b.sizes));
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
    if (price > highest) {
      highest = price;
    }
  });

  return highest;
};

const getLowestPrice = sizes => {
  let lowest = Number.MAX_SAFE_INTEGER;
  Object.keys(sizes).forEach(key => {
    const price = sizes[key].price;
    if (price < lowest && price > 0) {
      lowest = price;
    }
  });

  return lowest;
};

export default sort;
