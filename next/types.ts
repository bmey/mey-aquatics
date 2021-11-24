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

export enum Origin {
  AM = 'AM',
  'AM-SAMERI' = 'AM-SAMERI',
  'AM-COSTAR' = 'AM-COSTAR',
  'AM-CEAMER' = 'AM-CEAMER',
  'AM-OTHER' = 'AM-OTHER',
  AF = 'AF',
  'AF-CONGOR' = 'AF-CONGOR',
  'AF-LAKEMA' = 'AF-LAKEMA',
  'AF-LAKETA' = 'AF-LAKETA',
  'AF-LAKETU' = 'AF-LAKETU',
  'AF-LAKEVI' = 'AF-LAKEVI',
  SEA = 'SEA',
  'SEA-INDONE' = 'SEA-INDONE',
  'SEA-INDIA' = 'SEA-INDIA',
  'SEA-OTHER' = 'SEA-OTHER',
}

export interface SubOrigin {
  id: Origin
  name: string
  checked?: boolean
  hasSubOrigins?: false
}

export interface OriginGroup {
  id: Origin
  name: string
  subOrigins: SubOrigin[]
  checked?: boolean
  hasSubOrigins?: boolean
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
