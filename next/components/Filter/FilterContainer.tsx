import React from 'react'
import _ from 'lodash'
import sortOptions from './sortOptions'
import { FILTER } from '../../utility/constants'
import mapStateToOrigins from '../../service/origin'
import Filter from './Filter'
import FilterContext from './FilterContext'

const FilterContainer = (): JSX.Element => (
  <FilterContext.Consumer>
    {(context) => {
      const { filters, sort, ...contextActions } = context
      const originFilter = filters.filter((f) => f.type === FILTER.ORIGIN)[0]
      const originFilterValues = _.get(originFilter, 'values', [])
      const originOptions = mapStateToOrigins(originFilterValues)

      return (
        <Filter
          sortOptions={sortOptions}
          originOptions={originOptions}
          appliedSortId={sort}
          appliedFilters={filters}
          {...contextActions}
        />
      )
    }}
  </FilterContext.Consumer>
)

export default FilterContainer
