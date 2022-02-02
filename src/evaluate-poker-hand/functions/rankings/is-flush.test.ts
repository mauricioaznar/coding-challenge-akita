import { Card } from '../../types/card';
import { isFlush } from './is-flush';

it('returns true if suits are the same', () => {
  const cards: Card[] = [
    {
      rank: 'a',
      suit: 'd',
    },
    {
      rank: '2',
      suit: 'd',
    },
    {
      rank: '3',
      suit: 'd',
    },
  ];

  expect(isFlush(cards)).toBe(true);
});

it('returns false if suits are not the same', () => {
  const cards: Card[] = [
    {
      rank: 'a',
      suit: 'd',
    },
    {
      rank: '2',
      suit: 'd',
    },
    {
      rank: '3',
      suit: 'c',
    },
  ];

  expect(isFlush(cards)).toBe(false);
});
