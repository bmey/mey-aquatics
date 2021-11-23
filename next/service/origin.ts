import getOrigins, { nameHash, OriginGroup, SubOrigin } from './originList'

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

const mapSubOrigins = (subOrigins: SubOrigin[], appliedFilters) =>
  subOrigins.map((subOrigin) => ({
    ...subOrigin,
    checked: appliedFilters.some((f) => f === subOrigin.id),
  }))

const areAllSubOriginsChecked = (subOrigins) => {
  if (subOrigins.length === 0) {
    return false
  }

  return subOrigins.every((subOrigin) => subOrigin.checked)
}

const mapStateToOrigins = (appliedFilters: string[]): OriginGroup[] => {
  const newState = getOrigins().map(({ subOrigins, ...rest }) => {
    const subOriginOptions = mapSubOrigins(subOrigins, appliedFilters)

    return {
      ...rest,
      checked:
        areAllSubOriginsChecked(subOriginOptions) ||
        appliedFilters.some((f) => f === rest.id),
      subOrigins: subOriginOptions,
      hasSubOrigins: subOrigins.length > 0,
    }
  })

  return newState
}

const removeOtherTag = (originId: Origin) => originId.replace('-OTHER', '')
const getOriginDisplayName = (originId: Origin): string => {
  return nameHash[removeOtherTag(originId)]
}

export { getOriginDisplayName }
export default mapStateToOrigins
