const sumDigits = require('./question-21');

test('sum digits of givin number', () => {
  expect(sumDigits(123)).toBe(6);
  expect(sumDigits(12)).toBe(3);
  expect(sumDigits(0)).toBe(0);
});
