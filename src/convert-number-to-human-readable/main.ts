import { getWholeNumber } from './functions/get-whole-number';
import { getFraction } from './functions/get-fraction';

export function convert(moneyString: string) {
  const moneyRegex = /\$?\d+\.\d+/i;
  if (!moneyRegex.test(moneyString)) {
    throw Error('incorrect value');
  }
  const parts = moneyString.split('.');
  const wholeNUmberPart = parts[0].replace('$', '');
  const wholeNumberHumanReadable = getWholeNumber(wholeNUmberPart);
  const decimalNumberPart = parts[1];
  const decimalNumberHumanReadable = getFraction(decimalNumberPart);
  return `${wholeNumberHumanReadable} and ${decimalNumberHumanReadable} dollars`;
}
