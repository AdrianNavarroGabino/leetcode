function getSneakyNumbers(nums: number[]): number[] {
    const result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i], i + 1) !== -1) {
            result.push(nums[i]);

            if (result.length === 2) {
                return result;
            }
        }
    }

    return result;
};