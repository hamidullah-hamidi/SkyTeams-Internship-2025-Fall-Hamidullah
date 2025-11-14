// 4. Temperature converter (Celsius ↔ Fahrenheit)
// Description: Convert temperature from Celsius to Fahrenheit and vice versa.
// Formula:
// F = (C × 9/5) + 32
// C = (F - 32) × 5/9
// Example:
// Input:
// C = 25
// Output:
// F = 77

function temperatureConvertor(celsius, fahrenheit) {
  const F = celsius * (9 / 5) + 32;
  const C = ((fahrenheit - 32) * 5) / 9;

  if (celsius !== null) return F;
  if (fahrenheit !== null) return C;
}

console.log(temperatureConvertor(null, 86));

module.exports = temperatureConvertor;
