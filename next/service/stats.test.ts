import * as subject from './stats'

describe('stats', () => {
  describe('countEndangeredSpecies', () => {
    it('returns zero when no data', () => {
      const result = subject.countEndangeredSpecies([])

      expect(result).toBe(0)
    })

    it('returns zero when null', () => {
      const result = subject.countEndangeredSpecies(null)

      expect(result).toBe(0)
    })

    it('returns zero when undefined', () => {
      const result = subject.countEndangeredSpecies()

      expect(result).toBe(0)
    })

    it('returns zero when no endangered fish', () => {
      const result = subject.countEndangeredSpecies([{ onCaresList: false }])

      expect(result).toBe(0)
    })

    it('returns zero when fish have undefined property', () => {
      const result = subject.countEndangeredSpecies([{ id: 'test' }])

      expect(result).toBe(0)
    })

    it('returns one when one endangered fish', () => {
      const result = subject.countEndangeredSpecies([{ onCaresList: true }])

      expect(result).toBe(1)
    })

    it('returns two when two endangered fish', () => {
      const result = subject.countEndangeredSpecies([
        { onCaresList: true },
        { onCaresList: true },
        { onCaresList: false },
      ])

      expect(result).toBe(2)
    })
  })
})
