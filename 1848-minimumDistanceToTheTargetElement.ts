function getMinDistance(nums: number[], target: number, start: number): number {
  let min = nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      const candidate = Math.abs(i - start);
      if (candidate < min) {
        min = candidate;
      }
    }
  }

  return min;
};