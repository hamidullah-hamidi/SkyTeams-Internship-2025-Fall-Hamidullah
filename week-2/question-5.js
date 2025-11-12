// 5. Compute Simple and Compound Interest
// Description: Given Principal (P), Rate (R), and Time (T), compute:
// Simple Interest = (P × R × T) / 100
// Compound Interest = P × ((1 + R/100) ^ T - 1)
// Example:
// Input:
// P = 1000, R = 5, T = 2
// Output:
// SI = 100, CI ≈ 102.5

function findInterests(P, R, T) {
  const SI = (P * R * T) / 100;
  const CI = P * ((1 + R / 100) ** T - 1);

  return `SI = ${SI}, CI = ${CI.toFixed(2)}`;
}

console.log(findInterests(1000, 5, 2));

module.exports = findInterests;
