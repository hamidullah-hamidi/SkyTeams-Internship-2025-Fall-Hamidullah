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

console.log(sumToNumber(1, 2));

let arr = [3, 5, 7, 9];
let total = 0;
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
console.log('avg:', total / arr.length);
