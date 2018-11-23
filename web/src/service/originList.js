const originList = [
  {
    id: "AM",
    name: "Americas",
    subLocations: [
      {
        id: "AM-SAMER",
        name: "South America",
      },
      {
        id: "AM-COSTA",
        name: "Costa Rica",
      },
      {
        id: "AM-CEAME",
        name: "Central America",
      },
      {
        id: "AM-OTHER",
        name: "Other",
      },
    ],
  },
  {
    id: "AF",
    name: "Africa",
    subLocations: [
      {
        id: "AF-CONGO",
        name: "Congo",
      },
      {
        id: "AF-LAKEM",
        name: "Lake Malawi",
      },
      {
        id: "AF-LAVET",
        name: "Lake Tang",
      },
      {
        id: "AF-LAKEV",
        name: "Lake Victoria",
      },
    ],
  },
  {
    id: "SEA",
    name: "South East Asia",
    subLocations: [
      {
        id: "SEA-INDON",
        name: "Indonesia",
      },
      {
        id: "SEA-INDIA",
        name: "India",
      },
      {
        id: "SEA-OTHER",
        name: "Other",
      },
    ],
  },
];

const getOrigins = () => originList;

export default getOrigins;
