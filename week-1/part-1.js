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

console.log(checkNumber(21));
