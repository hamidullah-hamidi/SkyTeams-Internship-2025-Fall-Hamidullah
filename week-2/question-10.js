// 10. Leap Year Checker
// Description: Determine if a given year is a leap year.
// Rule: Year divisible by 4 → leap year, except centuries not divisible by 400.
// Example:
// Input:
// 2000
// Output:
// Leap year
// Input:
// 1900
// Output:
// Not leap year

function leapYearChecker(year) {
  if (year % 4 !== 0) return 'Not leap year';

  if (year % 100 === 0 && year % 400 !== 0) return 'Not leap year';
  else return 'leap year';
}

console.log(leapYearChecker(2023));

module.exports = leapYearChecker;
