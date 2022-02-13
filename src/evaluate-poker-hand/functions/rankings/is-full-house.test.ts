import { Card } from '../../types/card';
import { isFullHouse } from './is-full-house';

it('returns true when cards have three and two repeated ranks', () => {
  const cards: Card[] = [
    {
      rank: 'a',
      suit: 'c',
    },
    {
      rank: 'a',
      suit: 's',
    },
    {
      rank: 'a',
      suit: 'd',
    },
    {
      rank: '2',
      suit: 'd',
    },
    {
      rank: '2',
      suit: 'c',
    },
  ];

  expect(isFullHouse(cards)).toBe(true);
});

it('returns false when cards dont have three and two repeated ranks', () => {
  const cards: Card[] = [
    {
      rank: 'a',
      suit: 'c',
    },
    {
      rank: 'a',
      suit: 's',
    },
    {
      rank: '3',
      suit: 'd',
    },
    {
      rank: '2',
      suit: 'd',
    },
    {
      rank: '2',
      suit: 'c',
    },
  ];

  expect(isFullHouse(cards)).toBe(false);
});
