import { FILTER } from '../../utility/constants'
import { isFilterApplied, getFilter } from '../../service/filter'
import Search from './Search'
import FilterContext from './FilterContext'
import { Filter } from './filters'

const SearchContainer = (): JSX.Element => (
  <FilterContext.Consumer>
    {(context) => {
      const { filters, ...contextActions } = context
      const searchFilter = isFilterApplied(filters, FILTER.SEARCH)
        ? getFilter(filters, FILTER.SEARCH)
        : ({} as Filter)
      const searchTerm = searchFilter.value

      return <Search searchTerm={searchTerm} {...contextActions} />
    }}
  </FilterContext.Consumer>
)

export default SearchContainer
