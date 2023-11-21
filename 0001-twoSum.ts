const twoSum = (nums: number[], target: number): number[] => nums.reduce((acc, curr, i) => {
    if(acc[0] !== -1) {
        return acc;
    }

    for(let j = i + 1; j < nums.length; j++) {
        if(nums[j] + curr === target) {
            return [i, j];
        }
    }
    return acc;
}, [-1, -1]);