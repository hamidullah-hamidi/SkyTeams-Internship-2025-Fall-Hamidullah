const findGCD = require('./question-24');

describe('findGCD function', () => {
  test('should return correct GCD for 12 and 18', () => {
    expect(findGCD(12, 18)).toBe(6);
  });

  test('should return correct GCD for equal numbers', () => {
    expect(findGCD(10, 10)).toBe(10);
  });

  test('should return correct GCD when one number is 0', () => {
    expect(findGCD(15, 0)).toBe(15);
  });

  test('should return correct GCD for unrelated numbers', () => {
    expect(findGCD(7, 13)).toBe(1);
  });
});
