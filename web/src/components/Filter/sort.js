import { SORT_BY } from "./constants";

const sort = (productList, sortType = SORT_BY.ALPHABETICAL) => {
  if (!productList) {
    return [];
  }

  switch (sortType) {
    case SORT_BY.PRICE_LOW_TO_HIGH:
      return sortByLowestPrice(productList);

    case SORT_BY.PRICE_HIGH_TO_LOW:
      return sortByHighestPrice(productList);

    case SORT_BY.ALPHABETICAL:
    default:
      return sortAlphabeticalByCommonName(productList);
  }
};

const compareCaseInsentitive = (a, b) => {
  return a.toLowerCase().localeCompare(b.toLowerCase());
};

const sortAlphabeticalByCommonName = productList => {
  return productList.sort((a, b) => compareCaseInsentitive(a.common, b.common));
};

const sortByHighestPrice = productList => {
  return productList.sort((a, b) => getHighestPrice(a.sizes) < getHighestPrice(b.sizes));
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

const sortByLowestPrice = productList => {
  return productList.sort((a, b) => getLowestPrice(a.sizes) > getLowestPrice(b.sizes));
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
