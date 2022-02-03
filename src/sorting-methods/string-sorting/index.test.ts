import { stringSort } from './index';

it('returns string array sorted', () => {
  const strings = ['dog', 'cat', 'cow'];
  expect(stringSort(strings)).toEqual(['cat', 'cow', 'dog']);
});
