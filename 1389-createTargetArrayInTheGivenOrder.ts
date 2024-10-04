function createTargetArray(nums: number[], index: number[]): number[] {
    let result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        result = [
            ...result.slice(0, index[i]),
            nums[i],
            ...result.slice(index[i])
        ];
    }

    return result;
};