function minOperations(nums: number[]): number {
  let result = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    const curr = nums[i].toString() + nums[i + 1] + nums[i + 2];

    if (i === nums.length - 3) {
      if (curr !== '111' && curr !== '000') {
        return -1;
      } else if (curr === '000') {
        nums[i] ^= 1;
        nums[i + 1] ^= 1;
        nums[i + 2] ^= 1;

        result ++;
      }
      break;
    }

    switch (curr) {
      case '000':
      case '010':
      case '001':
      case '011':
        nums[i] ^= 1;
        nums[i + 1] ^= 1;
        nums[i + 2] ^= 1;

        result++;
        break;
    }
  }

  return nums.every((num) => num) ? result : -1;
};