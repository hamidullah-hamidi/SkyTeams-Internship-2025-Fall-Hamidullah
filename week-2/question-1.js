// 1. Swap two variables without using a temporary variable Description:
// Write a program to swap the values of two variables (e.g., a and b) without using a third variable.
//  Example: Input: a = 5, b = 10 Output: a = 10, b = 5

function swapValues(a, b) {
  a = a + b; // 30
  b = a - b; // 10
  a = a - b; // 20

  return `a: ${a} , b: ${b}`;
}

module.exports = swapValues;

console.log(swapValues(10, 20)); // 20, 10
