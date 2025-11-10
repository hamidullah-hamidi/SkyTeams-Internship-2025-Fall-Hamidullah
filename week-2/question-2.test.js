import { largestSmallest } from './question-2';

test('test for finding largest and smallest number', () => {
  expect(largestSmallest(1, 2, 3)).toEqual(`Largest: ${3}, Smallest: ${1}`);
});
