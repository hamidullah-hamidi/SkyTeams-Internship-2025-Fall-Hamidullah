const gradeCalculator = require('./question-9');

test('Calculates grades correctly', () => {
  expect(gradeCalculator(95)).toBe('A');
  expect(gradeCalculator(85)).toBe('B');
  expect(gradeCalculator(60)).toBe('C');
  expect(gradeCalculator(45)).toBe('D');
  expect(gradeCalculator(30)).toBe('E');
  expect(gradeCalculator(10)).toBe('F');
  expect(gradeCalculator(-5)).toBe('Invalid');
  expect(gradeCalculator(150)).toBe('Invalid');
});
