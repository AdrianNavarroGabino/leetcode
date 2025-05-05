function findRelativeRanks(score: number[]): string[] {
    const rank = [...score.map((_, i) => i)].sort((a, b) => score[b] - score[a]);

    return score.map((_, i) => {
      const result = rank.indexOf(i) + 1;

      if (result === 1) {
        return 'Gold Medal';
      }
      if (result === 2) {
        return 'Silver Medal';
      }
      if (result === 3) {
        return 'Bronze Medal';
      }

      return result.toString();
    })
};