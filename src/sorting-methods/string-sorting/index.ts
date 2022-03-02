import { isALessThanB } from './functions/is-a-less-than-b';

export function stringSort(strings: string[]): string[] {
  const sortedStrings: string[] = [];

  for (let i = 0; i < strings.length; i++) {
    const currString = strings[i];
    let isPositionFound = false;

    let j = 0;
    while (isPositionFound === false && j < sortedStrings.length) {
      const currSortedString = sortedStrings[j];
      const isLess = isALessThanB(currString, currSortedString);
      if (isLess) {
        isPositionFound = true;
      } else {
        j++;
      }
    }

    sortedStrings.splice(j, 0, currString);

    // if (isPositionFound === false) {
    //   sortedStrings.push(currString);
    // } else {
    //   sortedStrings.splice(j, 0, currString);
    // }
  }

  return sortedStrings;
}
