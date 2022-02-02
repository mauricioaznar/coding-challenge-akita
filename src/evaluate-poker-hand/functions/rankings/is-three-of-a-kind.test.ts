import { Card } from '../../types/card';
import { isThreeOfAKind } from './is-three-of-a-kind';

it('returns true when there is a three of the same rank', () => {
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
      rank: 'a',
      suit: 's',
    },
    {
      rank: '2',
      suit: 'd',
    },
  ];
  expect(isThreeOfAKind(cards)).toBe(true);
});

it('returns false when there is not a three of the same rank', () => {
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
      rank: 'a',
      suit: 's',
    },
    {
      rank: '2',
      suit: 'd',
    },
  ];
  expect(isThreeOfAKind(cards)).toBe(false);
});
