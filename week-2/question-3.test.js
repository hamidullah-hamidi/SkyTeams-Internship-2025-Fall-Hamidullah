const calculateAreaAndPerimeter = require('./question-3');

test('calculate the area and perimeter of a rectangle', () => {
  expect(calculateAreaAndPerimeter(4, 6)).toEqual(`Area: ${24}, Perimeter: ${20}`);
});
