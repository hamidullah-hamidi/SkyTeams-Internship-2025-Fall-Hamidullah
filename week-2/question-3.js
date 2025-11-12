// 3. Calculate the area and perimeter of a rectangle
// Description: Given length and width, calculate and display both area and perimeter.
// Example: Input: length = 4, width = 6 Output: Area: 24, Perimeter: 20

function calculateAreaAndPerimeter(length, width) {
  const area = length * width;
  const perimeter = (length + width) * 2;

  return `Area: ${area}, Perimeter: ${perimeter}`;
}

console.log(calculateAreaAndPerimeter(4, 6));

module.exports = calculateAreaAndPerimeter;
