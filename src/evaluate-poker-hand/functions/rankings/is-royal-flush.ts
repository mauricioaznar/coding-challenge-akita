import { Card } from '../../types/card';

export function isRoyalFlush(cards: Card[]): 'royal flush' | null {
  const isRoyalRank = cards.every((c) => {
    const rank = c.rank;
    return (
      rank === 'a' ||
      rank === '10' ||
      rank === 'j' ||
      rank === 'q' ||
      rank === 'k'
    );
  });

  const set = new Set();
  cards.forEach((c) => {
    set.add(c.suit);
  });
  const areAllSameSuit = set.size === 1;

  if (!isRoyalRank || !areAllSameSuit) {
    return null;
  }

  return 'royal flush';
}
