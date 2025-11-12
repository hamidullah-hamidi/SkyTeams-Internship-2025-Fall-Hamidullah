const triangleValidityAndType = require('./question-15');

describe('triangleValidityAndType function', () => {
  test('should return equilateral when all sides are equal', () => {
    expect(triangleValidityAndType(3, 3, 3)).toBe('Valid triangle, equilateral');
  });

  test('should return isosceles when two sides are equal', () => {
    expect(triangleValidityAndType(4, 4, 6)).toBe('Valid triangle, isosceles');
  });

  test('should return scalene when all sides are different', () => {
    expect(triangleValidityAndType(3, 4, 5)).toBe('Valid triangle, scalene');
  });

  test('should return not valid when sides do not form a triangle', () => {
    expect(triangleValidityAndType(1, 2, 10)).toBe('Not valid triangle');
  });
});
