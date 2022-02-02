import { bubbleSort } from './index';

it('matches array order', () => {
  expect(bubbleSort([6, 3, 4, 5, 2, 1])).toEqual([1, 2, 3, 4, 5, 6]);
});
