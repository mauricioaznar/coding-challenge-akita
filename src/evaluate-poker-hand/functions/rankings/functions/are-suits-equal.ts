import { Card } from '../../../types/card';

export function areSuitsEqual(cards: Card[]): boolean {
  const set = new Set();
  cards.forEach((c) => {
    set.add(c.suit);
  });
  return set.size === 1;
}
