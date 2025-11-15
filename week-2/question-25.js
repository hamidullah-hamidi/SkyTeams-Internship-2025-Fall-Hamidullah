// Author: hamidullah hamidi
// Date: 2025/15/11

// 25. Find LCM of two numbers
// Description: Compute least common multiple using the relationship: LCM(a, b) = (a × b) /
// GCD(a, b)
// Example:
// Input:
// 12, 18
// Output:
// 36

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

module.exports = { gcd, lcm };
