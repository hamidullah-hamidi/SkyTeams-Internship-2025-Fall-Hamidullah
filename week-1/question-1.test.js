const add = require('./question-1');

test('add to number', () => {
  expect(add(2, 3)).toEqual(5);
});
test('add to number', () => {
  expect(add(0, 3)).toEqual(3);
});
test('add to number', () => {
  expect(add(2, -3)).toEqual(-1);
});
