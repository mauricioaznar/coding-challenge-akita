import { isHandValid } from './functions/is-hand-valid';

export function evaluatePokerHand(hand: string) {
  if (hand.split(' ').length < 5) {
    throw new Error('Hand has less than 5 cards');
  }

  if (!isHandValid(hand)) {
    throw new Error(`${hand} hand is not valid`);
  }

  return hand;
}
