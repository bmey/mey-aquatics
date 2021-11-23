import { FishItem, ItemSize, ItemSizeSpec } from '../types'

export const buildItem = (overrides?: Partial<FishItem>): FishItem => ({
  common: 'common',
  id: 'id',
  onCaresList: false,
  origin: 'origin',
  picture: 'picture',
  scientific: 'scientific',
  sizes: undefined,
  ...(overrides || {}),
})

export const buildSizes = (
  overrides?: Partial<Record<ItemSize, ItemSizeSpec>>
): Record<ItemSize, ItemSizeSpec> => ({
  B: buildSizeSpec(),
  F: buildSizeSpec(),
  M: buildSizeSpec(),
  S: buildSizeSpec(),
  L: buildSizeSpec(),
  ...(overrides || {}),
})

export const buildSizeSpec = (
  overrides?: Partial<ItemSizeSpec>
): ItemSizeSpec => ({
  count: '',
  length: '',
  price: '',
  wholesalePrice: '',
  ...(overrides || {}),
})
