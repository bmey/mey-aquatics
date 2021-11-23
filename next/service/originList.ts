import { Origin } from './origin'

const subOrigins = (origin: Origin) =>
  Object.keys(Origin).filter(
    (k) =>
      typeof Origin[k as any] === 'string' &&
      (Origin[k] as string).startsWith(`${origin}-`)
  ) as Origin[]

export const nameHash: Record<Origin, string> = {
  AM: 'Americas',
  'AM-SAMERI': 'South America',
  'AM-COSTAR': 'Costa Rica',
  'AM-CEAMER': 'Central America',
  'AM-OTHER': 'Other',
  AF: 'Africa',
  'AF-CONGOR': 'Congo River',
  'AF-LAKEMA': 'Lake Malawi',
  'AF-LAKETA': 'Lake Tanganyika',
  'AF-LAKETU': 'Lake Turkana',
  'AF-LAKEVI': 'Lake Victoria',
  SEA: 'South East Asia',
  'SEA-INDONE': 'Indonesia',
  'SEA-INDIA': 'India',
  'SEA-OTHER': 'Other',
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

const originList: OriginGroup[] = [Origin.AM, Origin.AF, Origin.SEA].map(
  (topOrigin) => ({
    id: topOrigin,
    name: nameHash[topOrigin],
    subOrigins: subOrigins(topOrigin).map((subId) => ({
      id: subId,
      name: nameHash[subId],
    })),
  })
)

const getOrigins = (): OriginGroup[] => originList

export default getOrigins
