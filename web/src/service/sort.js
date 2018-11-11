import { SORT_BY } from "../utility/constants";
import { compareCaseInsentitive } from "../utility/strings";

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

const sortAlphabeticalByCommonName = productList => {
  return productList.sort((a, b) => compareCaseInsentitive(a.common, b.common));
};

const sortByHighestPrice = productList => {
  return productList.sort((a, b) => getHighestPrice(a.sizes) < getHighestPrice(b.sizes));
};

const getHighestPrice = sizes => {
  const initialBestValue = 0;
  const highPriceComparator = (current, best) => current > best;

  return getBestPrice(sizes, highPriceComparator, initialBestValue);
};

const sortByLowestPrice = productList => {
  return productList.sort((a, b) => getLowestPrice(a.sizes) > getLowestPrice(b.sizes));
};

const getLowestPrice = sizes => {
  const initialBestValue = Number.MAX_SAFE_INTEGER;
  const lowPriceComparator = (current, best) => current < best && current > 0;

  return getBestPrice(sizes, lowPriceComparator, initialBestValue);
};

const getBestPrice = (sizes, comparator, initialValue) => {
  let bestPrice = initialValue;

  Object.keys(sizes).forEach(key => {
    const currentPrice = sizes[key].price;

    if (comparator(currentPrice, bestPrice)) {
      bestPrice = currentPrice;
    }
  });

  return bestPrice;
};

export default sort;
