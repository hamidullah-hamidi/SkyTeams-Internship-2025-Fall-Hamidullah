const { gcd, lcm } = require('./question-25');

describe('GCD Function', () => {
  test('should return 6 for gcd(12, 18)', () => {
    expect(gcd(12, 18)).toBe(6);
  });

  test('should return 1 for gcd(7, 9)', () => {
    expect(gcd(7, 9)).toBe(1);
  });
});

describe('LCM Function', () => {
  test('should return 36 for lcm(12, 18)', () => {
    expect(lcm(12, 18)).toBe(36);
  });

  test('should return 63 for lcm(7, 9)', () => {
    expect(lcm(7, 9)).toBe(63);
  });
});
