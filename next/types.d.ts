export interface DatabaseJson {
  data: {
    fish: FishItem[]
    hotItems: string[]
    postDate: string
  }
}

export interface ItemSizeSpec {
  count: number | string
  length: number | string
  price: number | string
  wholesalePrice: number | string
}

export enum ItemSize {
  B = 'B',
  F = 'F',
  L = 'L',
  M = 'M',
  S = 'S',
}

export interface FishItem {
  common: string
  id: string
  onCaresList: boolean
  origin: string
  picture: string
  scientific: string
  sizes: Record<ItemSize, ItemSizeSpec>
}
