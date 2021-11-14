export const nameHash = {
  AM: 'Americas',
  'AM-SAMERI': 'South America',
  'AM-COSTAR': 'Costa Rica',
  'AM-CEAMER': 'Central America',
  'AM-OTHER': 'Other',
  AF: 'Africa',
  'AF-CONGOR': 'Congo River',
  'AF-LAKEMA': 'Lake Malawi',
  'AF-LAKETA': 'Lake Tanganyika',
  'AF-LAKETU': 'Lake Turkana',
  'AF-LAKEVI': 'Lake Victoria',
  SEA: 'South East Asia',
  'SEA-INDONE': 'Indonesia',
  'SEA-INDIA': 'India',
  'SEA-OTHER': 'Other',
};

const originList = [
  {
    id: 'AM',
    name: nameHash['AM'],
    subOrigins: ['SAMERI', 'COSTAR', 'CEAMER', 'OTHER'].map(subId => ({
      id: `AM-${subId}`,
      name: nameHash[`AM-${subId}`],
    })),
  },
  {
    id: 'AF',
    name: 'Africa',
    subOrigins: ['CONGOR', 'LAKEMA', 'LAKETA', 'LAKETU', 'LAKEVI'].map(subId => ({
      id: `AF-${subId}`,
      name: nameHash[`AF-${subId}`],
    })),
  },
  {
    id: 'SEA',
    name: 'South East Asia',
    subOrigins: ['INDONE', 'INDIA', 'OTHER'].map(subId => ({
      id: `SEA-${subId}`,
      name: nameHash[`SEA-${subId}`],
    })),
  },
];

const getOrigins = () => originList;

export default getOrigins;
