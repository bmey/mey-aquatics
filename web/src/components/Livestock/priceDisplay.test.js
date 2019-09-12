import { priceDisplay } from './priceDisplay';

describe('priceDisplay', () => {
  it('given null then returns null', () => {
    const priceInput = null;

    const result = priceDisplay(priceInput);

    expect(result).toBe(null);
  });

  it('given undefined then returns null', () => {
    const priceInput = undefined;

    const result = priceDisplay(priceInput);

    expect(result).toBe(null);
  });

  it('given zero number then returns null', () => {
    const priceInput = 0;

    const result = priceDisplay(priceInput);

    expect(result).toBe(null);
  });

  it('given zero string then returns null', () => {
    const priceInput = '0';

    const result = priceDisplay(priceInput);

    expect(result).toBe(null);
  });

  it('given zero dollar string then returns null', () => {
    const priceInput = '$0';

    const result = priceDisplay(priceInput);

    expect(result).toBe(null);
  });

  it('given number string then returns formatted string', () => {
    const priceInput = '$5';

    const result = priceDisplay(priceInput);

    expect(result).toBe('$5');
  });

  it('given number value then returns formatted string', () => {
    const priceInput = 5;

    const result = priceDisplay(priceInput);

    expect(result).toBe('$5');
  });

  it('given negative number then returns null', () => {
    const priceInput = -5;

    const result = priceDisplay(priceInput);

    expect(result).toBe(null);
  });

  it('given large number value then returns comma-separated string', () => {
    const priceInput = 987654321;

    const result = priceDisplay(priceInput);

    expect(result).toBe('$987,654,321');
  });

  it('given number over 1,000 with decimals then returns comma-separated string with no decimal', () => {
    const priceInput = 1000.04;

    const result = priceDisplay(priceInput);

    expect(result).toBe('$1,000');
  });

  it('given number string with whitespace then returns formatted string', () => {
    const priceInput = ' 5 ';

    const result = priceDisplay(priceInput);

    expect(result).toBe('$5');
  });

  it('given decimal value with less than 2 points of precision then returns 2 points of precision', () => {
    const priceInput = 0.5;

    const result = priceDisplay(priceInput);

    expect(result).toBe('$0.50');
  });

  it('given decimal value with more than 2 points of precision then returns 2 points of precision', () => {
    const priceInput = 0.559;

    const result = priceDisplay(priceInput);

    expect(result).toBe('$0.56');
  });
});
