import { Card } from '../../types/card';
import { countRepeatedCards } from './functions/count-repeated-cards';

export function isFullHouse(cards: Card[]): boolean {
  const counts = countRepeatedCards(cards, 'rank');
  let hasThreeRanks = false;
  let hasTwoRanks = false;

  for (const property in counts) {
    const count = counts[property];
    if (count === 3) {
      hasThreeRanks = true;
    } else if (count === 2) {
      hasTwoRanks = true;
    }
  }

  return hasThreeRanks && hasTwoRanks;
}
