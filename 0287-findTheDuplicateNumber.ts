function findDuplicate(nums: number[]): number {
  const candidates = Object.fromEntries(
    Array.from({ length: nums.length - 1 }, (_, i) => [i + 1, false])
  );


  for (const num of nums) {
    if (candidates[num]) {
      return num;
    }

    candidates[num] = true;
  }

  return 0;
};