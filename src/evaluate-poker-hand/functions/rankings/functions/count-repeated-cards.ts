import { Card } from '../../../types/card';

export function countRepeatedCards(
  cards: Card[],
  cardProperty: keyof Card,
): {
  [key in Card[keyof Card]]?: number;
} {
  const counts: {
    [key in Card[keyof Card]]?: number;
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
