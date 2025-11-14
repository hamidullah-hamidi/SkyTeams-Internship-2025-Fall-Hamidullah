// 8. Determine if a number is positive, negative, or zero
// Description: Use if-else statements to categorize a number.
// Example:
// Input:
// -3
// Output:
// Negative

function determineNumber(num) {
  if (num === 0) return 'zero';
  else if (num > 0) return 'positive';
  else return 'negative';
}

console.log(determineNumber(0));

module.exports = determineNumber;
