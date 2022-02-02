import { isHandValid } from './functions/validation/is-hand-valid';
import { isHandLengthValid } from './functions/validation/is-hand-length-valid';
import { Card } from './types/card';
import { getCards } from './functions/processing/get-cards';
import { Rankings } from './types/rankings';
import { isRoyalFlush } from './functions/rankings/is-royal-flush';
import { isStraightFlush } from './functions/rankings/is-straight-flush';
import { isFourOfAKind } from './functions/rankings/is-four-of-a-kind';
import { isFullHouse } from './functions/rankings/is-full-house';
import { isFlush } from './functions/rankings/is-flush';
import { isStraight } from './functions/rankings/is-straight';
import { isThreeOfAKind } from './functions/rankings/is-three-of-a-kind';
import { isTwoPair } from './functions/rankings/is-two-pair';
import { isOnePair } from './functions/rankings/is-one-pair';

export function evaluatePokerHand(hand: string): Rankings {
  if (!isHandLengthValid(hand)) {
    throw new Error('Hand has less than 5 cards');
  }

  if (!isHandValid(hand)) {
    throw new Error(`${hand} hand is not valid`);
  }

  const cards: Card[] = getCards(hand);

  if (isRoyalFlush(cards)) {
    return 'royal flush';
  } else if (isStraightFlush(cards)) {
    return 'straight flush';
  } else if (isFourOfAKind(cards)) {
    return 'four of a kind';
  } else if (isFullHouse(cards)) {
    return 'full house';
  } else if (isFlush(cards)) {
    return 'flush';
  } else if (isStraight(cards)) {
    return 'straight';
  } else if (isThreeOfAKind(cards)) {
    return 'three of a kind';
  } else if (isTwoPair(cards)) {
    return 'two pair';
  } else if (isOnePair(cards)) {
    return 'pair';
  }

  return null;
}
