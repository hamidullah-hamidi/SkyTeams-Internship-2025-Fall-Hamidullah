const swapValues = require('./question-1.js');

test('swap the values without temp variable', () => {
  expect(swapValues(10, 20)).toEqual(`a: ${20} , b: ${10}`);
});
