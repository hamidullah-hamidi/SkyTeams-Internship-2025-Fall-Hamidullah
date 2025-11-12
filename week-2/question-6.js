// 6. Convert total seconds into hours, minutes, and seconds
// Description: Convert a given number of seconds into hours, minutes, and seconds format.
// Example:
// Input:
// 3665
// Output:
// 1 hr, 1 min, 5 sec

function secondConvertor(seconds) {
  const hr = Math.floor(seconds / 3600);
  const min = Math.floor((seconds % 3600) / 60);
  const sec = Math.floor((seconds % 3600) % 60);

  return `${hr} hr, ${min} min, ${sec} sec`;
}

console.log(secondConvertor(3665));

module.exports = secondConvertor;
