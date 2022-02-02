import { Card } from '../../../types/card';
import { ranks } from '../../../constants/ranks';

export function areRanksSequential(cards: Card[]): boolean {
  const aRankValue = ranks['a'];
  const twoRankValue = ranks['2'];
  const kingRankValue = ranks['k'];

  const rankValues = cards.map((c) => ranks[c.rank]).sort((a, b) => a - b);
  const hasARank = !!rankValues.find((rv) => rv === aRankValue);
  const rankValuesWithoutA = rankValues.filter((rv) => rv !== aRankValue);
  const isSequential = rankValuesWithoutA.every(
    (rv, i) =>
      i === rankValuesWithoutA.length - 1 ||
      rv + 1 === rankValuesWithoutA[i + 1],
  );

  if (!isSequential) {
    return false;
  }

  // console.log(isSequential, hasARank, rankValuesWithoutA);

  if (
    isSequential &&
    hasARank &&
    !(
      rankValuesWithoutA[0] === twoRankValue ||
      rankValuesWithoutA[rankValuesWithoutA.length - 1] === kingRankValue
    )
  ) {
    return false;
  }

  return true;
}
