// part 1 fundamental
/*
// Swap the values of two variables
const swapValues = () => {
  let a = 10;
  let b = 20;

  let temp = a;

  a = b;
  b = temp;
  return { a: a, b: b };
};
// console.log(swapValues()); // a = 20, b = 10

// Check if a number is even, odd, or prime
const checkNumber = (num) => {
  if (num % 2 === 0) return 'even';

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return 'odd';
  }

  return 'prime';
};

// console.log(checkNumber(21));

const sum = () => {
  const arr = [1, 2, 3, 4];
  let sum = 0;

  for (const e of arr) {
    sum += e;
  }

  return sum;
};

// console.log(sum());

const reverse = (str) => {
  let reverse = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
};

// console.log(reverse('hamid'));

// Array, List, Object, Map

// Array
const restaurantsName = ['50 50', 'char-fasl', 'mehman'];

const restaurantsDetails = [
  { name: '50 50', city: 'herat' },
  { name: 'char-fasl', city: 'kabul' },
  { name: 'mehman', city: 'herat' },
];

// Map
const restaurantsMap = new Map();

restaurantsDetails.forEach((rest) => {
  restaurantsMap.set(rest.name, rest.name);
});

// console.log(restaurantsMap.get('mehman'));

// count repeated ones
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const wordCount = new Map();

words.forEach((word) => {
  wordCount.set(word, (wordCount.get(word) || 0) + 1);
});

// console.log(wordCount);
// console.log(Array.from(wordCount));

// find the largest Number
const array = [1, 3, 6, 3, 15, 3];

let largest = 0;

for (let e of array) {
  if (e > largest) largest = e;
}

// console.log(largest);

// concept: Clean code

// messy code
function x(a, b) {
  let c = a + b;
  console.log('Sum:', c);
  if (c > 10) {
    console.log('Big number');
  } else {
    console.log('Small number');
  }
}

function sumToNumber(num1, num2) {
  let sum = num1 + num2;

  console.log('sum:', sum);

  if (sum > 10) return 'Big number';
  else return 'Small number';
}

// console.log(sumToNumber(1, 2));

let arr = [3, 5, 7, 9];
let total = 0;
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
// console.log('avg:', total / arr.length);
*/

// Testing
/*
// 1) test for sum two number
function add(num1, num2) {
  return num1 + num2;
}

const result = add(2, 3); // actual output
const expected = 5; // expected output

// way 1 (if else)
if (result === expected) console.log('✅ Test passed');
else console.log('❌ Test Failed');

//  way 2 (assert)
console.assert(add(2, 3) === 5, '❌ Test Failed');
console.assert(add(0, 3) === 3, '❌ Test Failed');
console.assert(add(-2, 3) === 1, '❌ Test Failed');

*/

// 2) test for reversing an list/string
export const reverse = (list) => {
  let reverseArray = [];
  let reverseString = '';

  if (Array.isArray(list)) {
    for (let i = list.length - 1; i >= 0; i--) {
      reverseArray.push(list[i]);
    }
    return reverseArray;
  }

  if (typeof list === 'string') {
    for (let i = list.length - 1; i >= 0; i--) {
      reverseString += list[i];
    }
    return reverseString;
  }
};

// const result = reverse([1, 2, 3]);
// const expected = [3, 2, 1];

// if (JSON.stringify(result) === JSON.stringify(expected)) console.log('✅ Test passed');
// else console.log('❌ Test Failed');

export function largest(arr) {
  let max = -Infinity;

  for (let e of arr) {
    if (e > max) max = e;
  }

  return max;
}
// const result = largest([1, 2, 3]);
// const expected = 3;

// if (result === expected) console.log('✅ Test passed');
// else console.log('❌ Test Failed');
