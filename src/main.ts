import { getWholeNumber } from './functions/get-whole-number';

export function convert(moneyString: string) {
  const moneyRegex = /\$?\d+\.\d+/i;
  if (!moneyRegex.test(moneyString)) {
    throw Error('incorrect value');
  }
  const parts = moneyString.split('.');
  const wholeNUmberPart = parts[0].replace('$', '');
  const wholeNumberHumanReadable = getWholeNumber(wholeNUmberPart);
  return `${wholeNumberHumanReadable}`;
}
