export function isALessThanB(a: string, b: string): boolean {
  let hasDifferenceBeenFound = false;
  let isLess = false;

  let i = 0;
  while (hasDifferenceBeenFound === false && i < a.length && i < b.length) {
    const aCharCode = a.charCodeAt(i);
    const bCharCode = b.charCodeAt(i);
    if (aCharCode !== bCharCode) {
      hasDifferenceBeenFound = true;
      if (aCharCode < bCharCode) {
        isLess = true;
      }
    }

    i++;
  }
  return hasDifferenceBeenFound ? isLess : a.length < b.length;
}
