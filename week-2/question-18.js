// Author: hamidullah hamidi
// Date: 2025/13/11

// Question: Multiplication table of a number

// Description: Print the multiplication table for a given number (up to 10 or N).
// Example:
// Input:
// 5
// Output:
// 5 × 1 = 5
// 5 × 2 = 10
// ...
// 5 × 10 = 50

function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}
multiplicationTable(5);
