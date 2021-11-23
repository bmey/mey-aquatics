import sort from './sort'
import { SORT_BY } from '../utility/constants'
import { buildItem } from '../test/modelBuilders'

describe('sort', () => {
  it('returns empty array when input is null', () => {
    const result = sort(null)

    expect(result).toEqual([])
  })

  it('returns empty array when input is undefined', () => {
    const result = sort(undefined)

    expect(result).toEqual([])
  })

  it('returns empty array when input is empty', () => {
    const result = sort([])

    expect(result).toEqual([])
  })

  describe('common name', () => {
    it('returns default sorting (alphabetical by common name) when no sort specified', () => {
      const productList = [setupCommonCase('Z'), setupCommonCase('A')]

      const result = sort(productList)

      expect(result[0].id).toEqual('A')
      expect(result[1].id).toEqual('Z')
    })

    it('sorts case-insensitive alphabetical by common name', () => {
      const productList = [
        setupCommonCase('aA'),
        setupCommonCase('B'),
        setupCommonCase('AA'),
        setupCommonCase('aa'),
      ]

      const result = sort(productList, SORT_BY.ALPHABETICAL_COMMON)

      expect(result.map((r) => r.id)).toEqual(['aA', 'AA', 'aa', 'B'])
    })

    it('sorts empty common names to end when alphabetical by common name', () => {
      const productList = [
        buildItem({
          id: 'empty',
          common: '',
        }),
        setupCommonCase('A'),
        buildItem({
          id: 'empty2',
          common: '',
        }),
      ]

      const result = sort(productList, SORT_BY.ALPHABETICAL_COMMON)

      expect(result.map((r) => r.id)).toEqual(['A', 'empty', 'empty2'])
    })

    it('sorts case-insensitive alphabetical-descending by common name', () => {
      const productList = [
        setupCommonCase('aA'),
        setupCommonCase('B'),
        setupCommonCase('AA'),
        setupCommonCase('aa'),
      ]

      const result = sort(productList, SORT_BY.ALPHABETICAL_COMMON_DESCENDING)

      expect(result.map((r) => r.id)).toEqual(['B', 'aA', 'AA', 'aa'])
    })

    it('sorts empty common names to end when alphabetical-descending by common name', () => {
      const productList = [
        buildItem({
          id: 'empty',
          common: '',
        }),
        setupCommonCase('A'),
        buildItem({
          id: 'empty2',
          common: '',
        }),
      ]

      const result = sort(productList, SORT_BY.ALPHABETICAL_COMMON_DESCENDING)

      expect(result.map((r) => r.id)).toEqual(['A', 'empty', 'empty2'])
    })
  })

  describe('scientific name', () => {
    it('sorts case-insensitive alphabetical by scientific name', () => {
      const productList = [
        setupScientificCase('aA'),
        setupScientificCase('B'),
        setupScientificCase('AA'),
        setupScientificCase('aa'),
      ]

      const result = sort(productList, SORT_BY.ALPHABETICAL_SCIENTIFIC)

      expect(result.map((r) => r.id)).toEqual(['aA', 'AA', 'aa', 'B'])
    })

    it('sorts empty scientific names to end when alphabetical by scientific name', () => {
      const productList = [
        buildItem({
          id: 'empty',
          common: 'something',
          scientific: '',
        }),
        setupScientificCase('A'),
        buildItem({
          id: 'empty2',
          common: 'something2',
          scientific: '',
        }),
      ]

      const result = sort(productList, SORT_BY.ALPHABETICAL_SCIENTIFIC)

      expect(result.map((r) => r.id)).toEqual(['A', 'empty', 'empty2'])
    })

    it('sorts case-insensitive alphabetical-descending by scientific name', () => {
      const productList = [
        setupScientificCase('aA'),
        setupScientificCase('B'),
        setupScientificCase('AA'),
        setupScientificCase('aa'),
      ]

      const result = sort(
        productList,
        SORT_BY.ALPHABETICAL_SCIENTIFIC_DESCENDING
      )

      expect(result.map((r) => r.id)).toEqual(['B', 'aA', 'AA', 'aa'])
    })

    it('sorts empty scientific names to end when alphabetical-descending by scientific name', () => {
      const productList = [
        buildItem({
          id: 'empty',
          common: '',
        }),
        setupScientificCase('A'),
        buildItem({
          id: 'empty2',
          common: '',
        }),
      ]

      const result = sort(
        productList,
        SORT_BY.ALPHABETICAL_SCIENTIFIC_DESCENDING
      )

      expect(result.map((r) => r.id)).toEqual(['A', 'empty', 'empty2'])
    })
  })

  const setupCommonCase = (name) => {
    return buildItem({
      id: name,
      common: name,
    })
  }

  const setupScientificCase = (name) => {
    return buildItem({
      id: name,
      scientific: name,
      common: 'commonName',
    })
  }
})
