function maxDistance(colors: number[]): number {
  let maxDistance = 0;

  for (let i = 0; i <= colors.length / 2; i++) {
    const currIndex = colors.findLastIndex((color2) => color2 !== colors[i]);

    if (currIndex) {
      const currDistance = currIndex - i;

      if (currDistance > maxDistance) {
        maxDistance = currDistance;
      }
    }
  }

  return maxDistance;
};