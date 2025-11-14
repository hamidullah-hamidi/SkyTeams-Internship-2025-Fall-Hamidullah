// Author: hamidullah hamidi
// Date: 2025/13/11

// Question: Sum of digits

// Description: Calculate the sum of all digits of a number.
// Example:
// Input:
// 123
// Output:
// 6

function sumDigits(num) {
  let sum = 0;

  for (let e of num.toString()) {
    sum += Number(e);
  }

  return sum;
}

console.log(sumDigits(123));

module.exports = sumDigits;
