import { convert } from './main';

describe('Incorrect values', () => {
  const incorrectValues = ['233,33', '2311,932', 'asdfasd', '00098932'];

  incorrectValues.forEach((value) => {
    it(`fails if ${value}`, () => {
      expect(() => {
        convert(value);
      }).toThrow(/incorrect value/i);
    });
  });
});

describe('Correct values', () => {
  const correctValues = ['233.99', '$20.00', '$499.01'];

  correctValues.forEach((value) => {
    it(`Doesnt fail if ${value}`, () => {
      expect(() => {
        convert(value);
      }).not.toThrow();
    });
  });
});

describe('Expected values', () => {
  const expectedValues = {
    '100.199': 'one hundred and 199/1000 dollars',
    '2105489.09':
      'two million one hundred five thousand four hundred eighty nine and 09/100 dollars',
  };

  for (const parameter in expectedValues) {
    const expectedValue = expectedValues[parameter];
    it(`returns ${expectedValue} for ${parameter}`, () => {
      expect(convert(parameter)).toBe(expectedValue);
    });
  }
});
