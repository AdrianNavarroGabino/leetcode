function minimumAverage(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let min: number = (nums[0] + nums[nums.length - 1]) / 2;

    for (let i = 1; i < nums.length / 2; i++) {
        const average: number = (nums[i] + nums[nums.length - i - 1]) / 2;

        if (average < min) {
            min = average;
        }
    }

    return min;
};