import { Card } from '../../types/card';
import { areSuitsEqual } from './functions/are-suits-equal';

export function isRoyalFlush(cards: Card[]): boolean {
  const isRoyalRank = cards.every((c) => {
    const rank = c.rank;
    return (
      rank === 'a' ||
      rank === '10' ||
      rank === 'j' ||
      rank === 'q' ||
      rank === 'k'
    );
  });
  return !(!isRoyalRank || !areSuitsEqual(cards));
}
