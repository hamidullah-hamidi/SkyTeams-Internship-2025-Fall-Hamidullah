// Author: hamidullah hamidi
// Date: 2025/13/11

// Question: Print even numbers in a range

// Description: Input start and end values, print all even numbers between them.
// Example:
// Input:
// 1, 10
// Output:
// 2, 4, 6, 8, 10

function evenNumbersInARange(start, end) {
  let result = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) result.push(i);
  }

  return result;
}

console.log(evenNumbersInARange(1, 10));

module.exports = evenNumbersInARange;
