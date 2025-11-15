const fibonacciSeries = require('./question-23');

describe('fibonacciSeries function', () => {
  test('should return correct fibonacci sequence for 7 terms', () => {
    expect(fibonacciSeries(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });

  test('should return first two fibonacci numbers when num = 2', () => {
    expect(fibonacciSeries(2)).toEqual([0, 1]);
  });

  test('should return only [0] when num = 1', () => {
    expect(fibonacciSeries(1)).toEqual([0]);
  });

  test('should return empty array when num = 0', () => {
    expect(fibonacciSeries(0)).toEqual([]);
  });
});
