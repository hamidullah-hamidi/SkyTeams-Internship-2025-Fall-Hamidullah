// Author: hamidullah hamidi
// Date: 2025/13/11

// Question: Reverse a number

// Description: Reverse the digits of an integer.
// Example:
// Input:
// 1234
// Output:
// 4321

function reverseNumber(num) {
  // way 1:
  let numString = num.toString().split('').reverse().join('');
  return +numString;

  // way 2:
  /*
  let reverse = [];
  let result = '';
  let numArray = num.toString().split('');

  for (let i = numArray.length - 1; i >= 0; i--) {
    reverse.push(numArray[i]);
  }

  reverse.map((el) => (result += el));

  return +result;
  */
}

console.log(reverseNumber(1234));
