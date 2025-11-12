const checkOddOrEven = require('./question-7');

test('if number is divisible by 2 return even else return odd', () => {
  expect(checkOddOrEven(7)).toBe('odd');
  expect(checkOddOrEven(8)).toBe('even');
});
