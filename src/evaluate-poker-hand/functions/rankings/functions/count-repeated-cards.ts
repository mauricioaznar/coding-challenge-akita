import { Card } from '../../../types/card';

export function countRepeatedCards<T extends Card, K extends keyof Card>(
  cards: T[],
  cardProperty: K,
): {
  [key in T[K]]?: number;
} {
  const counts: {
    [key in T[K]]?: number;
  } = {};

  cards.forEach((c) => {
    if (counts[c[cardProperty]] !== undefined) {
      counts[c[cardProperty]] += 1;
    } else {
      counts[c[cardProperty]] = 1;
    }
  });

  return counts;
}
