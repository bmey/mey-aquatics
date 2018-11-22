import getOrigins from "./originList";

const mapSubLocations = (subLocations, appliedFilters) =>
  subLocations.map(subOrigin => ({
    ...subOrigin,
    checked: appliedFilters.some(f => f === subOrigin.id),
  }));

const areAllSubLocationsChecked = subLocations => {
  if (subLocations.length === 0) {
    return false;
  }

  return subLocations.every(subOrigin => subOrigin.checked);
};

const mapStateToOrigins = appliedFilters => {
  const newState = getOrigins().map(({ subLocations, ...rest }) => {
    const subLocationOptions = mapSubLocations(subLocations, appliedFilters);

    return {
      ...rest,
      checked: areAllSubLocationsChecked(subLocationOptions) || appliedFilters.some(f => f === rest.id),
      subLocations: subLocationOptions,
      hasSubLocations: subLocations.length > 0,
    };
  });

  return newState;
};

export default mapStateToOrigins;
