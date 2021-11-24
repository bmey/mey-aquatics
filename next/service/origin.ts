import getOrigins, { nameHash } from './originList'
import { Origin, OriginGroup, SubOrigin } from '../types'

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
