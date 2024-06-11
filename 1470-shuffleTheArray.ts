function shuffle(nums: number[], n: number): number[] {
    const result: number[] = [];

    for (let i = 0; i < nums.length / 2; i++) {
        result.push(nums[i], nums[n + i]);
    }

    return result;
};