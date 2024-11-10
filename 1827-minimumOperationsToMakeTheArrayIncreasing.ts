function minOperations(nums: number[]): number {
    let result: number = 0;
    
    for (let i = 1; i < nums.length; i++) {
        const curr: number = nums[i - 1] - nums[i] + 1;

        if (curr > 0) {
            result += curr;
            nums[i] = nums[i - 1] + 1;
        }
    }

    return result;
};