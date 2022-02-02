import { Card } from '../../types/card';
import { ranks } from '../../constants/ranks';

export function isStraightFlush(cards: Card[]): 'straight flush' | null {
  const set = new Set();
  cards.forEach((c) => {
    set.add(c.suit);
  });
  const areAllSameSuit = set.size === 1;

  if (!areAllSameSuit) {
    return null;
  }

  const aRankValue = ranks['a'];
  const twoRankValue = ranks['2'];
  const kingRankValue = ranks['k'];

  const rankValues = cards.map((c) => ranks[c.rank]).sort();
  const hasARank = !!rankValues.find((rv) => rv === aRankValue);
  const rankValuesWithoutA = rankValues.filter((rv) => rv !== aRankValue);
  const isSequential = rankValuesWithoutA.every(
    (rv, i) =>
      i === rankValuesWithoutA.length - 1 ||
      rv + 1 === rankValuesWithoutA[i + 1],
  );

  if (!isSequential) {
    return null;
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
    return null;
  }

  return 'straight flush';
}
