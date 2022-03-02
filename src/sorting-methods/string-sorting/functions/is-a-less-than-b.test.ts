import { isALessThanB } from './is-a-less-than-b';

describe('is a less than b', () => {
  const options: { a: string; b: string; expected: boolean }[] = [
    { a: 'car', b: 'dog', expected: true },
    { a: 'dog', b: 'car', expected: false },
    { a: 'Car', b: 'car', expected: true },
    { a: 'cars', b: 'car', expected: false },
    { a: 'car', b: 'cars', expected: true },
  ];

  options.forEach((option) => {
    it(`returns ${option.expected} when a (${option.a}) is less than b (${option.b})`, () => {
      const a = option.a;
      const b = option.b;
      const expected = option.expected;
      expect(isALessThanB(a, b)).toBe(expected);
    });
  });
});
