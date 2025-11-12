const findInterests = require('./question-5');

test('Compute Simple and Compound Interest', () => {
  expect(findInterests(1000, 5, 2)).toBe('SI = 100, CI = 102.50');
  expect(findInterests(2000, 10, 3)).toBe('SI = 600, CI = 662.00');
});
