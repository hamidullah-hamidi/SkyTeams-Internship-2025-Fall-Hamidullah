const temperatureConvertor = require('./question-4');

test('calculate Celsius or Fahrenheit', () => {
  expect(temperatureConvertor(null, 86)).toEqual(30);
});
