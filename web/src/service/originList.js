const originList = [
  {
    id: 'AM',
    name: 'Americas',
    subOrigins: [
      {
        id: 'AM-SAMER',
        name: 'South America',
      },
      {
        id: 'AM-COSTA',
        name: 'Costa Rica',
      },
      {
        id: 'AM-CEAME',
        name: 'Central America',
      },
      {
        id: 'AM-OTHER',
        name: 'Other',
      },
    ],
  },
  {
    id: 'AF',
    name: 'Africa',
    subOrigins: [
      {
        id: 'AF-CONGO',
        name: 'Congo River',
      },
      {
        id: 'AF-LAKEM',
        name: 'Lake Malawi',
      },
      {
        id: 'AF-LAKET',
        name: 'Lake Tanganyika',
      },
      {
        id: 'AF-LAKEV',
        name: 'Lake Victoria',
      },
    ],
  },
  {
    id: 'SEA',
    name: 'South East Asia',
    subOrigins: [
      {
        id: 'SEA-INDON',
        name: 'Indonesia',
      },
      {
        id: 'SEA-INDIA',
        name: 'India',
      },
      {
        id: 'SEA-OTHER',
        name: 'Other',
      },
    ],
  },
];

const getOrigins = () => originList;

export default getOrigins;
