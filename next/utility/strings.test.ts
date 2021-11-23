import { containsCaseInsensitive } from './strings'

describe('string utilities', () => {
  describe('containsCaseInsensitive', () => {
    it('returns true when input is empty', () => {
      expect(containsCaseInsensitive('test', '')).toBe(true)
    })

    it('returns false when test string does not match', () => {
      expect(containsCaseInsensitive('test', 'abc')).toBe(false)
    })

    it('returns true when test string matches substring', () => {
      expect(containsCaseInsensitive('test', 'test')).toBe(true)
      expect(containsCaseInsensitive('test', 'tes')).toBe(true)
      expect(containsCaseInsensitive('test', 'st')).toBe(true)
    })

    it('returns true when test string does not match casing', () => {
      expect(containsCaseInsensitive('test', 'ST')).toBe(true)
      expect(containsCaseInsensitive('TEST', 'st')).toBe(true)
    })
  })
})
