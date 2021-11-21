import { FishItem } from '../types'
import db from '../data-copy/db.json'

export const getAllStockIds = (): string[] => {
  return db['data.json'].fish.map((item) => item.id)
}

export const getAllStockData = (): FishItem[] => {
  return db['data.json'].fish
}

export const getStockData = async (
  id: string
): Promise<FishItem | undefined> => {
  return Promise.resolve(db['data.json'].fish.find((item) => item.id === id))
}
