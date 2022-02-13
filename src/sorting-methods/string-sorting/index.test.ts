import { stringSort } from './index';

it('returns string array sorted 1', () => {
  const strings = ['dog', 'cat', 'cow'];
  expect(stringSort(strings)).toEqual(['cat', 'cow', 'dog']);
});

it('returns string array sorted 2', () => {
  const strings = ['caaar', 'car', 'Car'];
  expect(stringSort(strings)).toEqual(['Car', 'caaar', 'car']);
});
