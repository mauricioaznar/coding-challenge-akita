import { Card } from '../../../types/card';
import { areRanksSequential } from './are-ranks-sequential';

it('returns false when cards are not sequential', () => {
  const cards: Card[] = [
    {
      rank: '2',
      suit: 's',
    },
    {
      rank: '4',
      suit: 'h',
    },
  ];

  expect(areRanksSequential(cards)).toBe(false);
});

it('returns true when cards are sequential', () => {
  const cards: Card[] = [
    {
      rank: '2',
      suit: 's',
    },
    {
      rank: '3',
      suit: 'h',
    },
    {
      rank: '4',
      suit: 'h',
    },
  ];

  expect(areRanksSequential(cards)).toBe(true);
});

it('returns true when cards are sequential (using a before 2)', () => {
  const cards: Card[] = [
    {
      rank: '2',
      suit: 's',
    },
    {
      rank: '3',
      suit: 'h',
    },
    {
      rank: '4',
      suit: 'h',
    },
    {
      rank: 'a',
      suit: 'c',
    },
  ];

  expect(areRanksSequential(cards)).toBe(true);
});

it('returns true when cards are sequential (using a after k)', () => {
  const cards: Card[] = [
    {
      rank: 'j',
      suit: 's',
    },
    {
      rank: 'q',
      suit: 'h',
    },
    {
      rank: 'k',
      suit: 'h',
    },
    {
      rank: 'a',
      suit: 'c',
    },
  ];

  expect(areRanksSequential(cards)).toBe(true);
});

it('returns false when cards are not sequential (using a before 2)', () => {
  const cards: Card[] = [
    {
      rank: '2',
      suit: 's',
    },
    {
      rank: '3',
      suit: 'h',
    },
    {
      rank: '5',
      suit: 'h',
    },
    {
      rank: 'a',
      suit: 'c',
    },
  ];

  expect(areRanksSequential(cards)).toBe(false);
});

it('returns false when cards are not sequential (using a after k)', () => {
  const cards: Card[] = [
    {
      rank: '10',
      suit: 's',
    },
    {
      rank: 'q',
      suit: 'h',
    },
    {
      rank: 'k',
      suit: 'h',
    },
    {
      rank: 'a',
      suit: 'c',
    },
  ];

  expect(areRanksSequential(cards)).toBe(false);
});
