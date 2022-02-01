export function getWholeNumber(numberString: string) {
  const regex = /^\d+$/i;
  if (!regex.test(numberString)) {
    throw new Error('incorrect value');
  }

  let wholeNumberString = '';

  const digitArray = numberString.split('');

  for (let i = numberString.length; i >= 0; i = i - 3) {
    const digitArraySlice = digitArray.slice(i - 3 >= 0 ? i - 3 : 0, i);

    const digitsString = Number(digitArraySlice.join('')).toString();

    if (digitsString === '0') continue;

    let humanReadableString = '';

    if (digitsString.length === 3) {
      humanReadableString = `${getSimpleUnits(digitsString[0])} hundred`;
    }

    if (digitsString.length === 2 || digitsString.length === 3) {
      const digits = Number(
        digitsString.slice(digitsString.length - 2, digitsString.length),
      );

      if (digits >= 10 && digits < 20) {
        humanReadableString = `${humanReadableString} ${getTenUnits(
          digitsString.slice(digitsString.length - 2, digitsString.length),
        )}`;
      } else if (digits < 10 && digits >= 1) {
        humanReadableString = `${humanReadableString} ${getSimpleUnits(
          digitsString[digitsString.length - 1],
        )}`;
      } else if (digits >= 20) {
        humanReadableString = `${humanReadableString} ${getTwoDigits(
          digitsString[digitsString.length - 2],
        )} ${getSimpleUnits(digitsString[digitsString.length - 1])}`;
      }
    }

    if (digitsString.length === 1) {
      const digits = Number(digitsString[0]);
      if (digits < 10 || digits >= 20) {
        humanReadableString = getSimpleUnits(digitsString[0]);
      }
    }

    const scale = (numberString.length - i) / 3;

    const humanReadableScale = `${getHumanReadableScale(scale)}`;

    wholeNumberString = `${humanReadableString} ${humanReadableScale} ${wholeNumberString}`;
  }

  return wholeNumberString.trim();
}

function getSimpleUnits(digit: string) {
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

function getTenUnits(digit: string) {
  const map = {
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
  };
  return map[digit];
}

function getTwoDigits(digit: string) {
  const map = {
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety',
  };
  return map[digit];
}

function getHumanReadableScale(scale: number) {
  const map = {
    0: '',
    1: 'thousand',
    2: 'million',
    3: 'billion',
  };

  return map[scale];
}
