import { bubbleSort } from './index';

const arr1 = [6, 3, 4, 5, 2, 1];
it(`matches array order ${arr1}`, () => {
  expect(bubbleSort(arr1)).toEqual([1, 2, 3, 4, 5, 6]);
});

const arr2 = [2, 3, 6, 4, 6, 1];
it(`matches array order ${arr2}`, () => {
  expect(bubbleSort(arr2)).toEqual([1, 2, 3, 4, 6, 6]);
});

const arr3 = [6, 8, 9, 1, 10, 20, 70, 82, 3, 4];
const sortedArr3 = arr3.sort((a, b) => a - b);
it(`matches array order ${arr3} equals ${sortedArr3}`, () => {
  expect(bubbleSort(arr3)).toEqual(sortedArr3);
});
