import React, { useState } from 'react'
import _ from 'lodash'
import queryString from 'query-string'
import { applyFilter, Filter, removeFilter } from './filters'
import { SORT_BY } from '../../utility/constants'
import { useRouter } from 'next/router'

export interface IFilterContext {
  filters: Filter[]
  sort: number
  applyFilter: (payload: any) => void
  removeFilter: (payload: any) => void
  changeSort: (payload: any) => void
}

const initialSortId = SORT_BY.DEFAULT
const FilterContext = React.createContext<IFilterContext>(undefined)

const getInitialState = (query) => {
  let filters = []
  let sort = initialSortId
  if (!_.isEmpty(query)) {
    try {
      const result = queryString.parse(query)
      filters = JSON.parse(result.filter as string)
      sort = +_.get(result, 'sort', initialSortId)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }

  return {
    filters: filters,
    sort,
  }
}

const Provider = (props: { children?: any; query?: any }): JSX.Element => {
  const router = useRouter()
  // eslint-disable-next-line no-console
  console.log(router.query)
  const [state, setState] = useState(getInitialState(props.query))

  const onApplyFilter = (payload) => {
    const newFilters = applyFilter(state.filters, { payload })
    setState({ ...state, filters: newFilters })
  }

  const onRemoveFilter = (payload) => {
    const newFilters = removeFilter(state.filters, { payload })
    setState({ ...state, filters: newFilters })
  }

  const onChangeSort = (sortId) => {
    setState({ ...state, sort: sortId })
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,
        applyFilter: onApplyFilter,
        removeFilter: onRemoveFilter,
        changeSort: onChangeSort,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  )
}

export const FilterProvider = Provider
export default FilterContext
