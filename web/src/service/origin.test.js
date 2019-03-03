import getOrigins from './originList';
import mapStateToOrigin from './origin';

jest.mock('./originList');

describe('mapStateToOrigin', () => {
  const originList = [
    {
      id: 'AME',
      name: 'Americas',
      subOrigins: [
        {
          id: 'AME-OTHER',
          name: 'Other',
        },
        {
          id: 'AME-SOUTH',
          name: 'South America',
        },
        {
          id: 'AME-NORTH',
          name: 'North America',
        },
      ],
    },
    {
      id: 'OTHER',
      name: 'Other',
      subOrigins: [],
    },
  ];

  it('checked is false for all when there are no applied filters', () => {
    getOrigins.mockReturnValue(originList);
    const appliedFilters = [];

    const result = mapStateToOrigin(appliedFilters);

    result.forEach(origin => {
      expect(origin.checked).toBe(false);
      origin.subOrigins.forEach(subOrigin => {
        expect(subOrigin.checked).toBe(false);
      });
    });
  });

  it('returns true for matching sub-origins when in applied filters', () => {
    getOrigins.mockReturnValue(originList);
    const appliedFilters = ['AME-OTHER', 'AME-NORTH'];

    const result = mapStateToOrigin(appliedFilters);

    const topOrigin = result.filter(origin => origin.id === 'AME')[0];
    const otherOrigin = result.filter(origin => origin.id !== 'AME')[0];
    const checkedSubOrigins = topOrigin.subOrigins.filter(origin => origin.checked);
    const uncheckedSubOrigins = topOrigin.subOrigins.filter(origin => !origin.checked);
    expect(checkedSubOrigins.map(s => s.id)).toEqual(
      expect.arrayContaining(['AME-NORTH', 'AME-OTHER'])
    );
    expect(uncheckedSubOrigins.map(s => s.id)).toEqual(['AME-SOUTH']);
  });

  it('returns true for hasSubOrigins when has sub-origins', () => {
    getOrigins.mockReturnValue(originList);

    const result = mapStateToOrigin([]);

    const topOrigin = result.filter(origin => origin.id === 'AME')[0];
    const otherOrigin = result.filter(origin => origin.id === 'OTHER')[0];
    expect(topOrigin.hasSubOrigins).toBe(true);
    expect(otherOrigin.hasSubOrigins).toBe(false);
  });

  it('returns true for checked when all sub-origins are in applied filters', () => {
    getOrigins.mockReturnValue(originList);
    const appliedFilters = ['AME-OTHER', 'AME-NORTH', 'AME-SOUTH'];

    const result = mapStateToOrigin(appliedFilters);

    const topOrigin = result.filter(origin => origin.id === 'AME')[0];
    const otherOrigin = result.filter(origin => origin.id !== 'AME')[0];
    expect(topOrigin.checked).toBe(true);
    expect(otherOrigin.checked).toBe(false);
  });

  it('returns false for checked some sub-origins are in applied filters', () => {
    getOrigins.mockReturnValue(originList);
    const appliedFilters = ['AME-OTHER', 'AME-NORTH'];

    const result = mapStateToOrigin(appliedFilters);

    const topOrigin = result.filter(origin => origin.id === 'AME')[0];
    expect(topOrigin.checked).toBe(false);
  });

  it('returns true for checked when has no sub-origins and id in applied filters', () => {
    getOrigins.mockReturnValue(originList);
    const appliedFilters = ['OTHER'];

    const result = mapStateToOrigin(appliedFilters);

    const otherOrigin = result.filter(origin => origin.id === 'OTHER')[0];
    expect(otherOrigin.checked).toBe(true);
  });
});
