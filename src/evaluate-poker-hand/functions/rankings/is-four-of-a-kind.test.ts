import { Card } from '../../types/card';
import { isFourOfAKind } from './is-four-of-a-kind';

it('returns false when cards dont have four of the same', () => {
  const cards: Card[] = [
    {
      rank: 'a',
      suit: 's',
    },
    {
      rank: 'a',
      suit: 'c',
    },
    {
      rank: 'a',
      suit: 'd',
    },
    {
      rank: '3',
      suit: 'h',
    },
    {
      rank: '2',
      suit: 'd',
    },
  ];

  expect(isFourOfAKind(cards)).toBe(false);
});

it('returns true when cards have four of the same', () => {
  const cards: Card[] = [
    {
      rank: 'a',
      suit: 's',
    },
    {
      rank: 'a',
      suit: 'c',
    },
    {
      rank: 'a',
      suit: 'd',
    },
    {
      rank: 'a',
      suit: 'h',
    },
    {
      rank: '2',
      suit: 'd',
    },
  ];

  expect(isFourOfAKind(cards)).toBe(true);
});
