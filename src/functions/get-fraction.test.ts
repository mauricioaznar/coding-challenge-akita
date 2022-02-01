import { getFraction } from './get-fraction';

describe('incorrect values', () => {
  const incorrectValues = ['01sdf', '099.9'];
  incorrectValues.forEach((v) => {
    it(`fails when ${v}`, () => {
      expect(() => {
        getFraction(v);
      }).toThrow();
    });
  });
});

describe('correct values', () => {
  const correctValues = {
    '100': '100/1000',
    '50': '50/100',
    '1000': '1000/10000',
  };

  for (const numberString in correctValues) {
    it(`returns ${correctValues[numberString]} for ${numberString}`, () => {
      expect(getFraction(numberString)).toBe(correctValues[numberString]);
    });
  }
});
