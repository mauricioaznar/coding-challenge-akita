import { evaluatePokerHand } from './index';

describe('incorrect values', () => {
  const incorrectHandValues = ['as 10s 7d 7s Ls'];

  incorrectHandValues.forEach((v) => {
    it(`fails when hand (${v}) has invalid card(s)`, () => {
      expect(() => {
        evaluatePokerHand(v);
      }).toThrow();
    });
  });

  const incorrectLengthValues = ['10s As 2s 3s'];

  incorrectLengthValues.forEach((v) => {
    it(`fails when hand (${v}) has less than 5 cards`, () => {
      expect(() => {
        evaluatePokerHand(v);
      }).toThrow();
    });
  });
});
