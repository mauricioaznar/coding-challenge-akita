import { Card } from '../../types/card';
import {areRanksSequential} from "./functions/are-ranks-sequential";

export function isStraight(cards: Card[]) {
  return areRanksSequential(cards)
}
