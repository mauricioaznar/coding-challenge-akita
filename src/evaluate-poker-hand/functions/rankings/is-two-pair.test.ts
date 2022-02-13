import {Card} from '../../types/card';
import {isTwoPair} from './is-two-pair';

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
      suit: 'd',
    },
    {
      rank: '2',
      suit: 'c',
    },
  ];
  expect(isTwoPair(cards)).toBe(true);
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
      rank: 'a',
      suit: 's',
    },
    {
      rank: '2',
      suit: 'd',
    },
  ];
  expect(isTwoPair(cards)).toBe(false);
});
