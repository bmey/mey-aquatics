import * as subject from './stats';

describe('stats', () => {
  describe('countEndangeredSpecies', () => {
    it('returns zero when no data', () => {
      const result = subject.countEndangeredSpecies([]);

      expect(result).toBe(0);
    });

    it('returns zero when null', () => {
      const result = subject.countEndangeredSpecies(null);

      expect(result).toBe(0);
    });

    it('returns zero when undefined', () => {
      const result = subject.countEndangeredSpecies();

      expect(result).toBe(0);
    });

    it('returns zero when no endangered fish', () => {
      const result = subject.countEndangeredSpecies([
        { onCaresList: false, sizes: { B: { count: 1 } } },
      ]);

      expect(result).toBe(0);
    });

    it('returns zero when fish have undefined property', () => {
      const result = subject.countEndangeredSpecies([{ id: 'test', sizes: { B: { count: 1 } } }]);

      expect(result).toBe(0);
    });

    it('returns one when one endangered fish', () => {
      const result = subject.countEndangeredSpecies([
        { onCaresList: true, sizes: { B: { count: 1 } } },
      ]);

      expect(result).toBe(1);
    });

    it('returns two when two endangered fish', () => {
      const result = subject.countEndangeredSpecies([
        { onCaresList: true, sizes: { B: { count: 1 } } },
        { onCaresList: true, sizes: { B: { count: 1 } } },
        { onCaresList: false, sizes: { B: { count: 1 } } },
      ]);

      expect(result).toBe(2);
    });

    it('returns only in-stock items', () => {
      const productList = [
        { id: 'out-of-stock', onCaresList: true, sizes: { B: { count: 0 } } },
        { id: 'in-stock', onCaresList: true, sizes: { B: { count: 1 } } },
      ];

      const result = subject.countEndangeredSpecies(productList);

      expect(result).toBe(1);
    });
  });
});
