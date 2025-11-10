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
