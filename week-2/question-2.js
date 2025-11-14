// 2. Find the largest and smallest of three numbers Description:
//  Read three integers and print the largest and smallest.
//  Example: Input: 3, 9, 5 Output: Largest: 9, Smallest: 3

export function largestSmallest(num1, num2, num3) {
  let largest = Math.max(num1, num2, num3);
  let smallest = Math.min(num1, num2, num3);

  // let largest = num1;
  // let smallest = num1;

  // let allNumbers = [num1, num2, num3];

  // for (let e of allNumbers) {
  //   if (e > largest) largest = e;
  //   if (e < smallest) smallest = e;
  // }

  return `Largest: ${largest}, Smallest: ${smallest}`;
}

console.log(largestSmallest(1, 2, 3));
