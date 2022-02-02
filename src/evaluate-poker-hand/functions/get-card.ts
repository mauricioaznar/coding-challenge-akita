import { Card } from '../types/card';
import { Rank } from '../types/rank';
import { Suit } from '../types/suit';

export function getCard(input: string): Card {
  const rank = (
    input.length === 3 ? input.slice(0, 2) : input.slice(0, 1)
  ) as Rank;
  const suit = (
    input.length === 3 ? input.slice(2, 3) : input.slice(1, 2)
  ) as Suit;

  return {
    rank,
    suit,
  };
}
