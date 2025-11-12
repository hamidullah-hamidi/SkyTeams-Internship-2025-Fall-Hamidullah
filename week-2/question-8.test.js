const determineNumber = require('./question-8');

test('determine a number that is positive, negative or zero', () => {
  expect(determineNumber(0)).toBe('zero');
  expect(determineNumber(2)).toBe('positive');
  expect(determineNumber(-2)).toBe('negative');
});
