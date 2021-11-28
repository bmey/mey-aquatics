import React from 'react'
import filter from '../../service/filter'
import { FILTER } from '../../utility/constants'
import { isFilterApplied, getFilter } from '../../service/filter'
import FilterContext from './FilterContext'
import { FishItem } from '../../types'
import { Filter } from './filters'

const ResultsContainer = ({ fish }: { fish: FishItem[] }): JSX.Element => (
  <FilterContext.Consumer>
    {(context) => {
      const { filters } = context
      const filteredList = filter(fish, filters)
      const searchFilter: Filter = isFilterApplied(filters, FILTER.SEARCH)
        ? getFilter(filters, FILTER.SEARCH)
        : ({} as Filter)
      const searchTerm = searchFilter.value

      let fromFiltersText = ''
      if (filters.length > 1) {
        const filtersSuffix = filters.length > 2 ? 'filters' : 'filter'
        fromFiltersText = ` and ${filters.length - 1} other ${filtersSuffix}`
      }

      return (
        <div className="hidden md:block">
          {(matches) => (
            <span>
              <strong>{filteredList.length}</strong>&nbsp;results
              {matches && searchTerm ? (
                <span>
                  &nbsp;for {`"${searchTerm}"`}
                  {fromFiltersText}
                </span>
              ) : null}
            </span>
          )}
        </div>
      )
    }}
  </FilterContext.Consumer>
)

export default ResultsContainer
