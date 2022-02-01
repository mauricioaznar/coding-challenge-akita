import { getWholeNumber } from './get-whole-number';

describe('Correct values', () => {
  const mappedValues = {
    '200': 'two hundred',
    '2000': 'two thousand',
    '101': 'one hundred one',
    '111': 'one hundred eleven',
  };

  for (const wholeNumberString in mappedValues) {
    it(`returns ${mappedValues[wholeNumberString]} for ${wholeNumberString}`, () => {
      expect(getWholeNumber(wholeNumberString)).toBe(
        mappedValues[wholeNumberString],
      );
    });
  }
});

describe('Incorrect values', () => {
  const incorrectValues = ['$2dfads234.23'];

  incorrectValues.forEach((v) => {
    it(`fails when ${v}`, () => {
      expect(() => {
        getWholeNumber(v);
      }).toThrow();
    });
  });
});
