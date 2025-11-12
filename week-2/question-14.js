// Author: hamidullah hamidi
// Date: 2025/12/11

// 14. Check character type
// Description: Input a character and determine if it’s a vowel, consonant, digit, or special symbol.
// Example:
// Input:
// a
// Output:
// Vowel

function checkCharacterType(character) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const specialSymbols = [
    '!',
    '@',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    '+',
    '/',
    '?',
  ];

  if (typeof character === 'number') return 'digit';

  if (vowels.includes(character)) return 'Vowel';
  else if (specialSymbols.includes(character)) return 'special symbol';
  else return 'consonant';
}

console.log(checkCharacterType('a'));
