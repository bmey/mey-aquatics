import { FishItem } from '../types'

export const countEndangeredSpecies = (
  fish?: Partial<FishItem>[] | null
): number => {
  if (fish === null || !Array.isArray(fish)) {
    return 0
  }
  return fish.filter((item) => item.onCaresList).length
}
