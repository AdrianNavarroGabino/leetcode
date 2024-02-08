function pivotIndex(nums: number[]): number {
    const totalSum: number = nums.reduce((acc, curr) => acc + curr, 0);

    for (let i = 0; i < nums.length; i++) {
        let sum: number = 0;

        for (let j = 0; j < i; j++) {
            sum += nums[j];
        }

        if (totalSum === sum * 2 + nums[i]) {
            return i;
        }
    }

    return -1;
};