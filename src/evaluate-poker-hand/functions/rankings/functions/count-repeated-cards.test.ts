import { Card } from '../../../types/card';
import { countRepeatedCards } from './count-repeated-cards';

it('returns the correct count for suits', () => {
  const cards: Card[] = [
    {
      rank: 'a',
      suit: 's',
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

  const counts = countRepeatedCards(cards, 'suit');

  expect(counts['s']).toBe(1);
  expect(counts['d']).toBe(2);
  expect(counts['c']).toBe(undefined);
});

it('returns the correct count for ranks', () => {
  const cards: Card[] = [
    {
      rank: 'a',
      suit: 's',
    },
    {
      rank: '2',
      suit: 'd',
    },
    {
      rank: '3',
      suit: 'd',
    },
    {
      rank: 'a',
      suit: 'd',
    },
  ];

  const counts = countRepeatedCards(cards, 'rank');

  expect(counts['a']).toBe(2);
  expect(counts['2']).toBe(1);
  expect(counts['3']).toBe(1);
  expect(counts['4']).toBe(undefined);
});
