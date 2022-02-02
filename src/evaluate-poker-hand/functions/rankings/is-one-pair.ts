import { Card } from '../../types/card';
import { countRepeatedCards } from './functions/count-repeated-cards';

export function isOnePair(cards: Card[]) {
  let pairCount = 0;
  const counts = countRepeatedCards(cards, 'rank');
  for (const property in counts) {
    if (counts[property] === 2) {
      pairCount++;
    }
  }
  return pairCount === 1;
}
