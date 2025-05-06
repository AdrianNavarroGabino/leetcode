function unequalTriplets(nums: number[]): number {
    let result = 0;

    for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
        if (nums[i] === nums[j]) {
          continue;
        }
        for (let k = j + 1; k < nums.length; k++) {
          if (nums[i] !== nums[k] && nums[j] !== nums[k]) {
            result++;
          }
        }
      }
    }

    return result;
};