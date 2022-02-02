import { Card } from '../../types/card';
import { countRepeatedCards } from './functions/count-repeated-cards';

export function isFourOfAKind(cards: Card[]): boolean {
  const counts = countRepeatedCards(cards, 'rank');

  let hasFourOfAKind = false;

  for (const property in counts) {
    if (counts[property] === 4) {
      hasFourOfAKind = true;
    }
  }

  return hasFourOfAKind;
}
