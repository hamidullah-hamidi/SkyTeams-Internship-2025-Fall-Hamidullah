// Author: hamidullah hamidi
// Date: 2025/13/11

// Question: Print numbers from 1 to 100

// Description: Use a loop to print num\bers sequentially.
// Example:
// Output:
// 1, 2, 3, ..., 100

function printNumbers() {
  let result = '';
  for (let i = 1; i <= 100; i++) {
    result += i + ', ';
  }

  return result;
}
console.log(printNumbers());

module.exports = printNumbers;
