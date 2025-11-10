import { reverse } from './question-2';

test('should reverse a string', () => {
  expect(reverse('hamid')).toEqual('dimah');
});

test('should reverse a list', () => {
  expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
});
