function minimumOperations(nums: number[]): number {
  let steps = 0;
  nums = nums.filter((num) => num);

  while (nums.length) {
    steps++;
    const min = Math.min(...nums);
    nums = nums.reduce((acc, curr) => {
      const result = curr - min;
      if (result > 0) {
        acc.push(result);
      }

      return acc;
    }, [] as number[]);
  }

  return steps;
};