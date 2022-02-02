import { Card } from '../../types/card';
import { isStraightFlush } from './is-straight-flush';

it('returns straight flush when cards have the same suit and are rank consecutive', () => {
  const cards: Card[] = [
    {
      rank: '2',
      suit: 's',
    },
    {
      rank: '3',
      suit: 's',
    },
    {
      rank: '4',
      suit: 's',
    },
    {
      rank: '5',
      suit: 's',
    },
    {
      rank: '6',
      suit: 's',
    },
  ];

  expect(isStraightFlush(cards)).toBe('straight flush');
});
