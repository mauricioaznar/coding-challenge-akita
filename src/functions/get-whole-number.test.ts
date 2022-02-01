import { getWholeNumber } from './get-whole-number';

describe('Incorrect values', () => {
  const incorrectValues = ['$2dfads234.23', '203.23', '$4030'];

  incorrectValues.forEach((v) => {
    it(`fails when ${v}`, () => {
      expect(() => {
        getWholeNumber(v);
      }).toThrow();
    });
  });
});

describe('Expected values', () => {
  const expectedMap = {
    '200': 'two hundred',
    '2000': 'two thousand',
    '101': 'one hundred one',
    '111': 'one hundred eleven',
    '23123': 'twenty-three thousand one hundred twenty-three',
    '248': 'two hundred forty-eight',
    '64': 'sixty-four',
    '894': 'eight hundred ninety-four',
    '2167303':
      'two million one hundred sixty-seven thousand three hundred three',
  };

  for (const parameter in expectedMap) {
    const expectedValue = expectedMap[parameter];

    it(`returns ${expectedValue} for ${parameter}`, () => {
      expect(getWholeNumber(parameter)).toBe(expectedValue);
    });
  }
});
