import { Card } from '../../types/card';
import { getCard } from './get-card';

export function getCards(hand: string): Card[] {
  return hand.split(' ').map((c) => {
    return getCard(c);
  });
}
