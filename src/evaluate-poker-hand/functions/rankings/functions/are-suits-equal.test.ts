import { areSuitsEqual } from './are-suits-equal';
import { Card } from '../../../types/card';

it('returns true when all cards are same suit', () => {
  const cards: Card[] = [
    {
      rank: '3',
      suit: 'c',
    },
    {
      rank: '4',
      suit: 'c',
    },
    {
      rank: '5',
      suit: 'c',
    },
  ];

  expect(areSuitsEqual(cards)).toBe(true);
});

it('returns false when all cards are not same suit', () => {
  const cards: Card[] = [
    {
      rank: '3',
      suit: 'c',
    },
    {
      rank: '4',
      suit: 'c',
    },
    {
      rank: '4',
      suit: 'd',
    },
  ];

  expect(areSuitsEqual(cards)).toBe(false);
});
