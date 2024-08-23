function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const nums: number[] = grid.flat().sort((a, b) => a - b);
    const result: number[] = [];

    if (nums[0] !== 1) {
        result[1] = 1;
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 2) {
            result[1] = nums[i - 1] + 1;
        } else if (nums[i] === nums[i - 1]) {
            result[0] = nums[i];
        }
    }

    if (result[0] == null) {
        result[0] = nums.length;
    } else if (result[1] == null) {
        result[1] = nums.length;
    }

    return result;
};