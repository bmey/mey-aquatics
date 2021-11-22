import _ from 'lodash'
import queryString from 'query-string'
import { FILTER } from '../../utility/constants'
import getOrigins from '../../service/originList'

export const applyFilter = (state, action) => {
  const { type, id, hasSubOrigins } = action.payload

  if (type === FILTER.ORIGIN) {
    let idsToAdd = [id]
    const otherFilters = state.filter((f) => f.type !== FILTER.ORIGIN)
    const existingFilter = state.filter((f) => f.type === FILTER.ORIGIN)[0]
    const existingValues = existingFilter ? existingFilter.values : []

    if (hasSubOrigins) {
      idsToAdd = getOrigins()
        .filter((o) => o.id === id)[0]
        .subOrigins.map((s) => s.id)
    }

    const values = _.union(existingValues, idsToAdd)

    return [...otherFilters, { type, values }]
  }

  return state.some((filter) => filter.type === type)
    ? [...state.filter((filter) => filter.type !== type), action.payload]
    : [...state, action.payload]
}

export const removeFilter = (state, action) => {
  const { type, id, hasSubOrigins } = action.payload

  if (type === FILTER.ORIGIN) {
    let idsToRemove = [id]
    const otherFilters = state.filter((f) => f.type !== FILTER.ORIGIN)
    const existingFilter = state.filter((f) => f.type === FILTER.ORIGIN)[0]
    const existingValues = existingFilter ? existingFilter.values : []

    if (hasSubOrigins) {
      idsToRemove = getOrigins()
        .filter((o) => o.id === id)[0]
        .subOrigins.map((s) => s.id)
    }

    const values = existingValues.filter((v) => !idsToRemove.includes(v))

    return [...otherFilters, { type, values }]
  }

  return state.filter((filter) => filter.type !== action.payload.type)
}

export const getRouteFromOrigin = (originId) => {
  const filterState = applyFilter([], {
    payload: { type: FILTER.ORIGIN, id: originId, hasSubOrigins: true },
  })

  return queryString.stringify({ filter: JSON.stringify(filterState) })
}

export const getRouteFromFilter = (filterType) => {
  const filterState = applyFilter([], {
    payload: { type: filterType },
  })

  return queryString.stringify({ filter: JSON.stringify(filterState) })
}
