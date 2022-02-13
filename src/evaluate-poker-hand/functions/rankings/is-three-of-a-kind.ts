import {Card} from '../../types/card';
import {countRepeatedCards} from './functions/count-repeated-cards';

export function isThreeOfAKind(cards: Card[]): boolean {
  let threeOfAKindCount = 0;
  const counts = countRepeatedCards(cards, 'rank');
  for (const property in counts) {
    if (counts[property] === 3) {
      threeOfAKindCount++;
    }
  }
  return threeOfAKindCount === 1;
}
