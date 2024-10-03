function numberGame(nums: number[]): number[] {
    const result: number[] = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i+= 2) {
        result.push(nums[i + 1], nums[i]);
    }

    return result;
};