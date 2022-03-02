import { Card } from '../../types/card';
import { countRepeatedCards } from './functions/count-repeated-cards';
import { Rank } from '../../types/rank';

export function isThreeOfAKind(cards: Card[]): boolean {
  let threeOfAKindCount = 0;
  const counts = countRepeatedCards(cards, 'rank');
  for (const property in counts) {
    const count = counts[property as keyof Rank];
    if (count === 3) {
      threeOfAKindCount++;
    }
  }
  return threeOfAKindCount === 1;
}
