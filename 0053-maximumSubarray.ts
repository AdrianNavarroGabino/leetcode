function maxSubArray(nums: number[]): number {
    if (nums.every((n) => n <= 0)) {
        return Math.max(...nums);
    }

    if (nums.every((n) => n >= 0)) {
        return nums.reduce((acc, curr) => acc + curr, 0);
    }

    let result: number = Math.max(...nums);

    for (let i = 0; i < nums.length; i++) {
        let partial: number = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            partial += nums[j];

            if (partial <= 0) {
                break;
            }
            if (partial > result) {
                result = partial;
            }
        }
    }

    return result;
};