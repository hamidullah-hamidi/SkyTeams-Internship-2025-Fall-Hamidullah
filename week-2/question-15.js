// Author: hamidullah hamidi
// Date: 2025/12/11

// Question: Triangle validity and type

// Description: Given three sides, determine if they form a valid triangle and if it’s equilateral,
// isosceles, or scalene.
// Rule: Sum of any two sides > third side.
// Example:
// Input:
// 3, 4, 5
// Output:
// Valid triangle, Scalene

function triangleValidityAndType(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    if (a === b && b === c) return 'Valid triangle, equilateral';
    else if (a === b || b === c || a === c) return 'Valid triangle, isosceles';
    else return 'Valid triangle, scalene';
  }
  return 'Not valid triangle';
}

console.log(triangleValidityAndType(3, 3, 3));

module.exports = triangleValidityAndType;
