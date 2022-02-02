import { Rank } from './rank';
import { Suit } from './suit';

export interface Card {
  rank: keyof Rank;
  suit: keyof Suit;
}
