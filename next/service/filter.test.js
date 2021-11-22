import filter, { isFilterApplied } from './filter'
import { FILTER } from '../utility/constants'

describe('filter', () => {
  it('returns empty array when input is null', () => {
    const result = filter(null)

    expect(result).toEqual([])
  })

  it('returns empty array when input is undefined', () => {
    const result = filter(undefined)

    expect(result).toEqual([])
  })

  it('returns empty array when input is empty', () => {
    const result = filter([])

    expect(result).toEqual([])
  })

  it('only includes items on CARES list when CARES filter applied', () => {
    const productList = [
      { id: 'cares', onCaresList: true },
      { id: 'non-cares', onCaresList: false },
    ]
    const appliedFilters = [{ type: FILTER.CARES_LIST }]

    const result = filter(productList, appliedFilters)

    expect(result.length).toBe(1)
    expect(result[0].id).toEqual('cares')
  })

  it('only includes items in stock when IN STOCK filter applied', () => {
    const productList = [
      { id: 'out-of-stock', sizes: { B: { count: 0 } } },
      { id: 'in-stock', sizes: { B: { count: 0 }, M: { count: 1 } } },
    ]
    const appliedFilters = [{ type: FILTER.IN_STOCK }]

    const result = filter(productList, appliedFilters)

    expect(result.length).toBe(1)
    expect(result[0].id).toEqual('in-stock')
  })

  it('includes items from areas of origin when ORIGIN filters applied', () => {
    const productList = [
      { id: 'test1', origin: 'TEST-1' },
      { id: 'test2', origin: 'TEST-2' },
      { id: 'test3', origin: 'TEST-3' },
    ]
    const appliedFilters = [
      { type: FILTER.ORIGIN, values: ['TEST-1', 'TEST-3', 'OTHER'] },
    ]

    const result = filter(productList, appliedFilters)

    expect(result.map((r) => r.id)).toEqual(
      expect.arrayContaining(['test1', 'test3'])
    )
    expect(result.length).toBe(2)
  })

  it('includes all items when ORIGIN filter is empty', () => {
    const productList = [
      { id: 'test1', origin: 'TEST-1' },
      { id: 'test2', origin: 'TEST-2' },
      { id: 'test3', origin: 'TEST-3' },
    ]
    const appliedFilters = [{ type: FILTER.ORIGIN, values: [] }]

    const result = filter(productList, appliedFilters)

    expect(result.map((r) => r.id)).toEqual(
      expect.arrayContaining(['test1', 'test2', 'test3'])
    )
    expect(result.length).toBe(3)
  })

  it('only includes items that match search term', () => {
    const productList = [
      { id: 'test1', common: 'TEST-1' },
      { id: 'test2', common: 'TEST-2' },
    ]
    const appliedFilters = [{ type: FILTER.SEARCH, value: '2' }]

    const result = filter(productList, appliedFilters)

    expect(result.map((r) => r.id)).toEqual(expect.arrayContaining(['test2']))
    expect(result.length).toBe(1)
  })

  it('includes items with scientific name that match search term', () => {
    const productList = [
      { id: 'test1', common: 'TEST-1', scientific: 'foo' },
      { id: 'test2', common: 'TEST-2', scientific: 'bar' },
    ]
    const appliedFilters = [{ type: FILTER.SEARCH, value: 'bar' }]

    const result = filter(productList, appliedFilters)

    expect(result.map((r) => r.id)).toEqual(expect.arrayContaining(['test2']))
    expect(result.length).toBe(1)
  })
})

describe('isFilterApplied', () => {
  it('returns false when filter is not applied', () => {
    const filterType = 0
    const appliedFilters = [{ type: 1 }]

    const result = isFilterApplied(appliedFilters, filterType)

    expect(result).toBe(false)
  })

  it('returns true when filter is applied', () => {
    const filterType = 0
    const appliedFilters = [{ type: 0 }]

    const result = isFilterApplied(appliedFilters, filterType)

    expect(result).toBe(true)
  })
})
