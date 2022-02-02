export function getFraction(numberString: string) {
  if (!/^\d+$/i.test(numberString)) {
    throw new Error('incorrect value');
  }

  const length = numberString.length;

  const denominator = `1${Array.from(Array(length)).fill(0).join('')}`;

  return `${numberString}/${denominator}`;
}
