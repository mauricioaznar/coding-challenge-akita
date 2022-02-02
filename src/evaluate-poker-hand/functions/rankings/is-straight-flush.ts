import { Card } from '../../types/card';

export function isStraightFlush(cards: Card[]): 'straight flush' | null {
  return cards.length > 0 ? 'straight flush' : null;
}
