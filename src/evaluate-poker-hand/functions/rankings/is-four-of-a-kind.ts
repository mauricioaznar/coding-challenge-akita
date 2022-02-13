import { Card } from '../../types/card';
import { countRepeatedCards } from './functions/count-repeated-cards';
import { Rank } from '../../types/rank';

export function isFourOfAKind(cards: Card[]): boolean {
  const counts = countRepeatedCards(cards, 'rank');

  let hasFourOfAKind = false;

  for (const property in counts) {
    const count = counts[property as keyof Rank];
    if (count === 4) {
      hasFourOfAKind = true;
    }
  }

  return hasFourOfAKind;
}
