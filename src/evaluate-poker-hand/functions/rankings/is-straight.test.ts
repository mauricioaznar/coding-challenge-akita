import { Card } from '../../types/card';
import { isStraight } from './is-straight';

it('returns true when cards are in sequential order', () => {
  const cards: Card[] = [
    {
      rank: '2',
      suit: 'h',
    },
    {
      rank: '3',
      suit: 'c',
    },
    {
      rank: '4',
      suit: 'd',
    },
  ];

  expect(isStraight(cards)).toBe(true);
});

it('returns false when cards are not in sequential order', () => {
  const cards: Card[] = [
    {
      rank: '2',
      suit: 'h',
    },
    {
      rank: '3',
      suit: 'c',
    },
    {
      rank: '5',
      suit: 'd',
    },
  ];

  expect(isStraight(cards)).toBe(false);
});
