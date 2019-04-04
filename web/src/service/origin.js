import getOrigins, { nameHash } from './originList';

const mapSubOrigins = (subOrigins, appliedFilters) =>
  subOrigins.map(subOrigin => ({
    ...subOrigin,
    checked: appliedFilters.some(f => f === subOrigin.id),
  }));

const areAllSubOriginsChecked = subOrigins => {
  if (subOrigins.length === 0) {
    return false;
  }

  return subOrigins.every(subOrigin => subOrigin.checked);
};

const mapStateToOrigins = appliedFilters => {
  const newState = getOrigins().map(({ subOrigins, ...rest }) => {
    const subOriginOptions = mapSubOrigins(subOrigins, appliedFilters);

    return {
      ...rest,
      checked: areAllSubOriginsChecked(subOriginOptions) || appliedFilters.some(f => f === rest.id),
      subOrigins: subOriginOptions,
      hasSubOrigins: subOrigins.length > 0,
    };
  });

  return newState;
};

const removeOtherTag = originId => originId.replace('-OTHER', '');
const getOriginDisplayName = originId => {
  return nameHash[removeOtherTag(originId)];
};

export { getOriginDisplayName };
export default mapStateToOrigins;
