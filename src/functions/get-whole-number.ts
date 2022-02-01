export function getWholeNumber(numberString: string) {
  const number = Number(numberString);
  if (isNaN(number)) {
    throw new Error('incorrect value');
  }

  let wholeNumberString = '';

  for (let i = numberString.length; i >= 0; i = i - 3) {
    const threeDigitArray = numberString
      .split('')
      .slice(i - 3 >= 0 ? i - 3 : 0, i);

    const threeDigitString = Number(threeDigitArray.join('')).toString();

    if (threeDigitString === '0') continue;

    const scale = Math.floor(i % 3);

    const humanReadableScale = getHumanReadableScale(scale);

    let humanReadableString = '';

    if (threeDigitString.length === 3) {
      humanReadableString = getHumanReadableThirdDigit(threeDigitString[0]);
    } else if (threeDigitString.length === 2) {
      //
    } else {
      humanReadableString = getHumanReadableThirdDigit(threeDigitString[0]);
    }

    wholeNumberString = `${humanReadableString} ${humanReadableScale} ${wholeNumberString}`;
  }

  return wholeNumberString.trim();
}

function getHumanReadableThirdDigit(digit: string) {
  const map = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
  };
  return map[digit];
}

function getHumanReadableScale(scale: number) {
  const map = {
    0: '',
    1: 'thousand',
  };

  return map[scale];
}
