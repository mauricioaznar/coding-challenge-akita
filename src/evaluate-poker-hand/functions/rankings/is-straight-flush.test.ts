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

it('returns straight flush when cards have the same suit and are rank consecutive (using a before 2)', () => {
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
      rank: 'a',
      suit: 's',
    },
  ];

  expect(isStraightFlush(cards)).toBe('straight flush');
});

it('returns straight flush when cards have the same suit and are rank consecutive (using a after king)', () => {
  const cards: Card[] = [
    {
      rank: 'j',
      suit: 's',
    },
    {
      rank: 'q',
      suit: 's',
    },
    {
      rank: 'k',
      suit: 's',
    },
    {
      rank: '10',
      suit: 's',
    },
    {
      rank: 'a',
      suit: 's',
    },
  ];

  expect(isStraightFlush(cards)).toBe('straight flush');
});

it('returns null when cards have the same suit and are rank not consecutive (using a after king)', () => {
  const cards: Card[] = [
    {
      rank: 'j',
      suit: 's',
    },
    {
      rank: 'q',
      suit: 's',
    },
    {
      rank: 'k',
      suit: 's',
    },
    {
      rank: '9',
      suit: 's',
    },
    {
      rank: 'a',
      suit: 's',
    },
  ];

  expect(isStraightFlush(cards)).toBe(null);
});

it('returns null when cards have the same suit and are rank not consecutive (using a before 2)', () => {
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
      rank: '6',
      suit: 's',
    },
    {
      rank: 'a',
      suit: 's',
    },
  ];

  expect(isStraightFlush(cards)).toBe(null);
});

it('returns null when cards dont have the same suit', () => {
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
      suit: 'd',
    },
  ];

  expect(isStraightFlush(cards)).toBe(null);
});
