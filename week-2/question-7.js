// 7. Check whether a number is even or odd
// Description: Determine if a number is divisible by 2.
// Example:
// Input:
// 7
// Output:
// Odd

function checkOddOrEven(num) {
  if (num % 2 === 0) return 'even';
  else return 'odd';
}

console.log(checkOddOrEven(7));

module.exports = checkOddOrEven;
