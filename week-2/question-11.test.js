const calculator = require('./question-11');

describe('Calculator Function', () => {
  test('adds two numbers', () => {
    expect(calculator(5, 3, '+')).toBe(8);
  });

  test('subtracts two numbers', () => {
    expect(calculator(10, 4, '-')).toBe(6);
  });

  test('multiplies two numbers', () => {
    expect(calculator(7, 3, '*')).toBe(21);
  });

  test('divides two numbers', () => {
    expect(calculator(9, 3, '/')).toBe(3);
  });

  test('returns error for division by zero', () => {
    expect(calculator(5, 0, '/')).toBe('Cannot divide by zero');
  });

  test('returns error for unknown operator', () => {
    expect(calculator(5, 5, '%')).toBe('Unknown operator');
  });
});
