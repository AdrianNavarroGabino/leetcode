function thirdMax(nums: number[]): number {
    let first: number = nums[0];
    let second: number = -Infinity;
    let third: number = -Infinity;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > first) {
            third = second;
            second = first;
            first = nums[i];
        } else if (nums[i] > second && nums[i] !== first) {
            third = second;
            second = nums[i];
        } else if (nums[i] > third && nums[i] !== second && nums[i] !== first) {
            third = nums[i];
        }
    }

    return third !== -Infinity ? third : first;
};