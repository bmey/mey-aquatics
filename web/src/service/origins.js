const origins = [
  {
    id: "AME",
    name: "Americas",
    subLocations: [
      {
        id: "AME-OTHER",
        name: "Other",
      },
    ],
  },
  {
    id: "OTHER",
    name: "Other",
    subLocations: [],
  },
];

const mapStateToOrigins = appliedFilters => {
  return origins.map(origin => ({
    ...origin,
    checked: false,
    subLocations: origin.subLocations.map(subOrigin => ({
      ...subOrigin,
      checked: false,
    })),
  }));
};

export default mapStateToOrigins;
