// Author: hamidullah hamidi
// Date: 2025/15/11

// Question: Find GCD of two numbers

// Description: Compute the greatest common divisor using repeated subtraction or the Euclidean
// algorithm.
// Example:
// Input:
// 12, 18
// Output:
// 6

function findGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(findGCD(12, 18)); // 6

module.exports = findGCD;
