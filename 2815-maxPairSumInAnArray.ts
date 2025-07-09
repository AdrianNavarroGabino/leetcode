function maxSum(nums: number[]): number {
  const pairs = Object.values(nums.reduce((acc, curr) => {
    const maxDigit = Math.max(...curr.toString().split('').map((digit) => Number(digit)));

    if (!acc[maxDigit]) {
      acc[maxDigit] = [];
    }

    acc[maxDigit].push(curr);
    return acc;
  }, {} as {[key: number]: number[]})).filter((values) => values.length >= 2);

  if (!pairs.length) {
    return -1;
  }

  return Math.max(...pairs.map((pair) => {
    pair.sort((a, b) => b - a);
    return pair[0] + pair[1];
  }));
};