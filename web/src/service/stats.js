import filter from './filter';
import { FILTER } from '../utility/constants';

export const countEndangeredSpecies = fish => {
  if (fish === null || !Array.isArray(fish)) {
    return 0;
  }

  const inStockFilter = [{ type: FILTER.IN_STOCK }];
  const inStock = filter(fish, inStockFilter);

  return inStock.filter(item => item.onCaresList).length;
};
