function countLargestGroup(n: number): number {
    const candidates = Array(n + 1).fill(0);

    if (n < 10) {
      return n;
    }

    for (let i = 1; i <= n; i++) {
      const current = i.toString().split('').reduce((acc, curr) => acc + +curr, 0);
      candidates[current]++;
    }

    const max = Math.max(...candidates);

    return candidates.filter((num) => num === max).length;
};