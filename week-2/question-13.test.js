const monthDetails = require('./question-13');

describe('monthDetails function', () => {
  test('should return correct name and days for February', () => {
    expect(monthDetails(2)).toBe('February, 28 or 29 days');
  });

  test('should return correct name and days for months with 31 days', () => {
    expect(monthDetails(1)).toBe('January, 31 days');
    expect(monthDetails(3)).toBe('March, 31 days');
  });

  test('should return correct name and days for months with 30 days', () => {
    expect(monthDetails(4)).toBe('April, 30 days');
    expect(monthDetails(11)).toBe('November, 30 days');
  });

  test('should return "Not a month" for invalid month number', () => {
    expect(monthDetails(13)).toBe('Not a month');
  });
});
