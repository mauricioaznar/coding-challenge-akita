import { Card } from '../../types/card';
import { isOnePair } from './is-one-pair';

it('returns true when there are two pairs of the same rank', () => {
  const cards: Card[] = [
    {
      rank: 'a',
      suit: 'd',
    },
    {
      rank: 'a',
      suit: 'c',
    },
    {
      rank: '2',
      suit: 'c',
    },
  ];
  expect(isOnePair(cards)).toBe(true);
});

it('returns false when there are not two pairs of the same rank', () => {
  const cards: Card[] = [
    {
      rank: 'a',
      suit: 'd',
    },
    {
      rank: '4',
      suit: 'c',
    },
    {
      rank: '5',
      suit: 's',
    },
    {
      rank: '2',
      suit: 'd',
    },
  ];
  expect(isOnePair(cards)).toBe(false);
});
