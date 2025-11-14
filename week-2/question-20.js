// Author: hamidullah hamidi
// Date: 2025/13/11

// Question: Count digits in a number

// Description: Find how many digits are in a number.
// Example:
// Input:
// 786
// Output:
// 3

function countDigits(num) {
  let count = 0;

  for (let i = 0; i < num.toString().length; i++) {
    count++;
  }

  return count;
}

console.log(countDigits(786));
