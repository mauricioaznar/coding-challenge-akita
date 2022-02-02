import {Card} from "../../types/card";
import {areSuitsEqual} from "./functions/are-suits-equal";

export function isFlush(cards: Card[]) {
  return areSuitsEqual(cards)
}
