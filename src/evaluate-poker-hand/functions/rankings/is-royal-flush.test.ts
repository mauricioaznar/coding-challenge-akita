import { Card } from '../../types/card';
import { isRoyalFlush } from './is-royal-flush';

it('returns royal flush', () => {
  const royalFlush: Card[] = [
    {
      rank: 'a',
      suit: 's',
    },
    {
      rank: '10',
      suit: 's',
    },
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
  ];

  expect(isRoyalFlush(royalFlush)).toBe(true);
});

it('doesnt return royal flush when suits are not the same', () => {
  const royalFlush: Card[] = [
    {
      rank: 'a',
      suit: 's',
    },
    {
      rank: '10',
      suit: 's',
    },
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
      suit: 'd',
    },
  ];

  expect(isRoyalFlush(royalFlush)).toBe(false);
});

it('doesnt return royal flush when rank is not highest rank (a, 10, j, q or k)', () => {
  const royalFlush: Card[] = [
    {
      rank: '9',
      suit: 's',
    },
    {
      rank: '10',
      suit: 's',
    },
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
  ];

  expect(isRoyalFlush(royalFlush)).toBe(false);
});
