import { Card } from '../../types/card';
import { countRepeatedCards } from './functions/count-repeated-cards';
import { Rank } from '../../types/rank';

export function isOnePair(cards: Card[]) {
  let pairCount = 0;
  const counts = countRepeatedCards(cards, 'rank');
  for (const property in counts) {
    const count = counts[property as keyof Rank];
    if (count === 2) {
      pairCount++;
    }
  }
  return pairCount === 1;
}
