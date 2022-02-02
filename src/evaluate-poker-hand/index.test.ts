import { evaluatePokerHand } from './index';

describe('incorrect values', () => {
  const incorrectHandRank = 'as 10s 7d 7s Ls';

  it(`fails when hand (${incorrectHandRank}) has invalid card (Ls)`, () => {
    expect(() => {
      evaluatePokerHand(incorrectHandRank);
    }).toThrow();
  });

  const incorrectHandLength = '10s As 2s 3s';

  it(`fails when hand (${incorrectHandLength}) has less than 5 cards`, () => {
    expect(() => {
      evaluatePokerHand(incorrectHandLength);
    }).toThrow();
  });
});

describe('get correct rankings', () => {
  const royalFlush = 'as 10s js qs ks';

  it(`returns royal flush for ${royalFlush}`, () => {
    expect(evaluatePokerHand(royalFlush)).toBe('royal flush');
  });

  const straightFlush = '8s 9s 10s js qs';

  it(`returns straight flush for ${straightFlush}`, () => {
    expect(evaluatePokerHand(straightFlush)).toBe('straight flush');
  });

  const fourOfAKind = '8s 8d 8c 8h qs';

  it(`returns four of a kind for ${fourOfAKind}`, () => {
    expect(evaluatePokerHand(fourOfAKind)).toBe('four of a kind');
  });

  const fullHouse = '8s 8d 8c 9h 9s';

  it(`returns full house for ${fullHouse}`, () => {
    expect(evaluatePokerHand(fullHouse)).toBe('full house');
  });

  const flush = '8s 10s 7s 3s 2s';

  it(`returns flush for ${flush}`, () => {
    expect(evaluatePokerHand(flush)).toBe('flush');
  });

  const straight = '4s 5h 7s 6d 3s';

  it(`returns straight for ${straight}`, () => {
    expect(evaluatePokerHand(straight)).toBe('straight');
  });

  const threeOfAKind = '4s 4h 4c 6d 3s';

  it(`returns three of a kind for ${threeOfAKind}`, () => {
    expect(evaluatePokerHand(threeOfAKind)).toBe('three of a kind');
  });

  const twoPair = '4s 4h 6c 6d 3s';

  it(`returns two pair for ${twoPair}`, () => {
    expect(evaluatePokerHand(twoPair)).toBe('two pair');
  });

  const pair = '4s 4h 5c 6d 3s';

  it(`returns pair for ${pair}`, () => {
    expect(evaluatePokerHand(pair)).toBe('pair');
  });
});
