import { FishItem } from '../types'
import { SORT_BY } from '../utility/constants'
import { compareCaseInsentitive } from '../utility/strings'

const sort = (
  productList: FishItem[],
  sortType = SORT_BY.DEFAULT
): FishItem[] => {
  if (!productList) {
    return []
  }

  switch (sortType) {
    case SORT_BY.ALPHABETICAL_SCIENTIFIC:
      return sortAlphabetically(productList, scientificNameSelector)

    case SORT_BY.ALPHABETICAL_SCIENTIFIC_DESCENDING:
      return sortAlphabetically(productList, scientificNameSelector, true)

    case SORT_BY.ALPHABETICAL_COMMON_DESCENDING:
      return sortAlphabetically(productList, commonNameSelector, true)

    case SORT_BY.ALPHABETICAL_COMMON:
    default:
      return sortAlphabetically(productList, commonNameSelector)
  }
}

const scientificNameSelector = (productItem: FishItem) => productItem.scientific
const commonNameSelector = (productItem: FishItem) => productItem.common

const sortAlphabetically = (
  productList: FishItem[],
  nameSelector: (productItem: FishItem) => string,
  descendingOrder = false
) => {
  return productList.sort((a: FishItem, b: FishItem) => {
    const nameA = nameSelector(a)
    const nameB = nameSelector(b)
    return compareCaseInsentitive(nameA, nameB, descendingOrder)
  })
}

export default sort
