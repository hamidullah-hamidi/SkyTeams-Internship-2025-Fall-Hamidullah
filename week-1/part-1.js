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

const restaurantsMap = new Map();
