export function largest(arr) {
  let max = -Infinity;

  for (let e of arr) {
    if (e > max) max = e;
  }

  return max;
}
