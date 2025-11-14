// 2025/12/11

// Author: hamidullah hamidi

// Question: Simple Calculator using switch-case

// Description: Input two numbers and an operator (+, -, *, /) and compute the result.
// Example:
// Input:
// 5, 3, +
// Output:
// 8

function calculator(num1, num2, operator) {
  let result = 0;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) return 'Cannot divide by zero';
      result = num1 / num2;
      break;
    default:
      return 'Unknown operator';
  }

  return result;
}

console.log(calculator(1, 2, '+'));

module.exports = calculator;
