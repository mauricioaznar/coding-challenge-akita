import { getCard } from './get-card';
import { suits } from '../constants/suits';
import { ranks } from '../constants/ranks';

export function isHandValid(hand: string): boolean {
  const invalidCards = [];

  const preprocessedCards = hand.split(' ');

  preprocessedCards.forEach((preCard) => {
    const { rank, suit } = getCard(preCard);
    if (!isRankValid(rank) || !isSuitValid(suit)) {
      invalidCards.push(preCard);
    }
  });

  return invalidCards.length === 0;
}

function isRankValid(rank: string): boolean {
  return ranks[rank.toLowerCase()] !== undefined;
}

function isSuitValid(suit: string): boolean {
  return suits[suit.toLowerCase()] !== undefined;
}
