import { FishItem, ItemSize, ItemSizeSpec } from '../types'

export const buildItem = (overrides?: Partial<FishItem>): FishItem => ({
  common: '',
  id: 'id',
  onCaresList: false,
  origin: 'origin',
  picture: '',
  scientific: '',
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
