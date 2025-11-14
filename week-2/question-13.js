// Author: hamidullah hamidi
// Date: 2025/12/11

// Question: 13 : Month name & number of days using switch-case

// Description: Input a month number (1–12) and display its name and number of days.
// Example:
// Input: 2
// Output: February, 28 or 29 days

function monthDetails(month) {
  let result = '';

  switch (month) {
    case 1:
      result = 'January, 31 days';
      break;
    case 2:
      result = 'February, 28 or 29 days';
      break;
    case 3:
      result = 'March, 31 days';
      break;
    case 4:
      result = 'April, 30 days';
      break;
    case 5:
      result = 'May, 31 days';
      break;
    case 6:
      result = 'June, 30 days';
      break;
    case 7:
      result = 'July, 31 days';
      break;
    case 8:
      result = 'August, 31 days';
      break;
    case 9:
      result = 'September, 30 days';
      break;
    case 10:
      result = 'October, 31 days';
      break;
    case 11:
      result = 'November, 30 days';
      break;
    case 12:
      result = 'December, 31 days';
      break;
    default:
      result = 'Not a month';
  }

  return result;
}

console.log(monthDetails(2));

module.exports = monthDetails;
