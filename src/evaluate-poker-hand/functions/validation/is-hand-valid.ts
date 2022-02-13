import { getCard } from '../processing/get-card';
import { suits } from '../../constants/suits';
import { ranks } from '../../constants/ranks';
import { Rank } from '../../types/rank';
import { Suit } from '../../types/suit';

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

function isRankValid(rank: keyof Rank): boolean {
  return ranks[rank] !== undefined;
}

function isSuitValid(suit: keyof Suit): boolean {
  return suits[suit] !== undefined;
}
