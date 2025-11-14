const secondConvertor = require('./question-6');

test('Convert total seconds into hours, minutes, and seconds', () => {
  expect(secondConvertor(3665)).toBe('1 hr, 1 min, 5 sec');
  expect(secondConvertor(3600)).toBe('1 hr, 0 min, 0 sec');
  expect(secondConvertor(65)).toBe('0 hr, 1 min, 5 sec');
  expect(secondConvertor(59)).toBe('0 hr, 0 min, 59 sec');
  expect(secondConvertor(7322)).toBe('2 hr, 2 min, 2 sec');
});
