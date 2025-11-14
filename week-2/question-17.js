// Author: hamidullah hamidi
// Date: 2025/13/11

// Question: Sum of first N natural numbers

// Description: Calculate and print the sum using a loop.
// Example:
// Input:
// 5
// Output:
// 15

function sumOfNumber(num) {
  let result = 0;

  for (let i = 1; i <= num; i++) {
    result += i;
  }

  return result;
}

console.log(sumOfNumber(5));
