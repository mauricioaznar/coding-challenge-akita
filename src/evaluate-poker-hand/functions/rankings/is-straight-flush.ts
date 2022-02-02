import { Card } from '../../types/card';
import { areRanksSequential } from './functions/are-ranks-sequential';
import { areSuitsEqual } from './functions/are-suits-equal';

export function isStraightFlush(cards: Card[]): boolean {
  return !(!areSuitsEqual(cards) || !areRanksSequential(cards));
}
