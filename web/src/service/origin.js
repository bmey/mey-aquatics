import getOrigins from "./originList";

const mapStateToOrigins = appliedFilters => {
  const newState = getOrigins().map(origin => ({
    ...origin,
    checked: false,
    subLocations: origin.subLocations.map(subOrigin => ({
      ...subOrigin,
      checked: appliedFilters.some(f => f === subOrigin.id),
    })),
  }));
  return newState;
};

export default mapStateToOrigins;
