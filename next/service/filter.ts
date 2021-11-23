import { Filter, State } from '../components/Filter/filters'
import { FishItem, ItemSize, ItemSizeSpec } from '../types'
import { FILTER } from '../utility/constants'
import {
  compareCaseInsentitive,
  containsCaseInsensitive,
} from '../utility/strings'

export const isFilterApplied = (
  appliedFilters: State,
  filterType: number
): boolean => {
  return appliedFilters.some((filter) => filter.type === filterType)
}

export const isOutOfStock = (sizes: Record<ItemSize, ItemSizeSpec>): boolean =>
  Object.values(sizes).every((size) => !size.count)

export const getFilter = (
  appliedFilters: State,
  filterType: number
): Filter => {
  return appliedFilters.filter((filter) => filter.type === filterType)[0]
}

const filter = (
  productList: FishItem[],
  appliedFilters: State = []
): FishItem[] => {
  if (!productList) {
    return []
  }

  let filteredList = productList
  if (isFilterApplied(appliedFilters, FILTER.SEARCH)) {
    const searchTerm = getFilter(appliedFilters, FILTER.SEARCH).value

    filteredList = filteredList.filter((product) => {
      const subject = product.common.concat(' ', product.scientific)
      return containsCaseInsensitive(subject, searchTerm)
    })
  }

  if (isFilterApplied(appliedFilters, FILTER.CARES_LIST)) {
    filteredList = filteredList.filter((product) => product.onCaresList)
  }

  if (isFilterApplied(appliedFilters, FILTER.IN_STOCK)) {
    filteredList = filteredList.filter(
      (product) => !isOutOfStock(product.sizes)
    )
  }

  if (isFilterApplied(appliedFilters, FILTER.ORIGIN)) {
    const originFilters = getFilter(appliedFilters, FILTER.ORIGIN).values

    if (originFilters.length > 0) {
      filteredList = filteredList.filter((product) =>
        originFilters.some(
          (filter) => compareCaseInsentitive(filter, product.origin) === 0
        )
      )
    }
  }

  return filteredList
}

export default filter
