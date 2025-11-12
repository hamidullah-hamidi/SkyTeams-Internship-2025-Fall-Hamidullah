const leapYearChecker = require('./question-10');

test('check if the year is a leap year', () => {
  expect(leapYearChecker(2004)).toBe('Is a leap year');
  expect(leapYearChecker(2023)).toBe('Is a leap year');
  expect(leapYearChecker(2024)).toBe('Is a leap year');
  expect(leapYearChecker(1900)).toBe('Not leap year');
});
