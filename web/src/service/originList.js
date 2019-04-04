export const nameHash = {
  AM: 'Americas',
  'AM-SAMER': 'South America',
  'AM-COSTA': 'Costa Rica',
  'AM-CEAME': 'Central America',
  'AM-OTHER': 'Other',
  AF: 'Africa',
  'AF-CONGO': 'Congo River',
  'AF-LAKEM': 'Lake Malawi',
  'AF-LAKET': 'Lake Tanganyika',
  'AF-LAKEV': 'Lake Victoria',
  SEA: 'South East Asia',
  'SEA-INDON': 'Indonesia',
  'SEA-INDIA': 'India',
  'SEA-OTHER': 'Other',
};

const originList = [
  {
    id: 'AM',
    name: nameHash['AM'],
    subOrigins: ['SAMER', 'COSTA', 'CEAME', 'OTHER'].map(subId => ({
      id: `AM-${subId}`,
      name: nameHash[`AM-${subId}`],
    })),
  },
  {
    id: 'AF',
    name: 'Africa',
    subOrigins: ['CONGO', 'LAKEM', 'LAKET', 'LAKEV'].map(subId => ({
      id: `AF-${subId}`,
      name: nameHash[`AF-${subId}`],
    })),
  },
  {
    id: 'SEA',
    name: 'South East Asia',
    subOrigins: ['INDON', 'INDIA', 'OTHER'].map(subId => ({
      id: `SEA-${subId}`,
      name: nameHash[`SEA-${subId}`],
    })),
  },
];

const getOrigins = () => originList;

export default getOrigins;
