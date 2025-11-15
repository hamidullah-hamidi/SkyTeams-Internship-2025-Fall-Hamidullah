// Author: hamidullah hamidi
// Date: 2025/15/11

// 23. Fibonacci series up to N terms
// Description: Generate the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8...) up to N terms.
// Example:
// Input:
// 7
// Output:
// 0, 1, 1, 2, 3, 5, 8

function fibonacciSeries(num) {
  if (num === 0) return [0];
  if (num === 1) return [0, 1];

  let first = 0;
  let second = 1;
  let result = [first, second];

  for (let i = 2; i < num; i++) {
    result = [...result, result[i - 2] + result[i - 1]];
  }

  return result;
}

console.log(fibonacciSeries(7));

module.exports = fibonacciSeries;
