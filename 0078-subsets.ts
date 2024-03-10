function subsets(nums: number[]): number[][] {
    const result: number[][] = [];

    function getSubsets(subArray: number[], index: number) {
        result.push(subArray);
        for (let i = index; i < nums.length; i++) {
            getSubsets(subArray.concat(nums[i]), i + 1);
        }
    }

    getSubsets([], 0);

    return result;
};