const originList = [
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

const getOrigins = () => originList;

export default getOrigins;
