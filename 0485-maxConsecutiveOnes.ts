function findMaxConsecutiveOnes(nums: number[]): number {
    let max: number = 0;
    let current: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (current > max) {
                max = current;
            }
            current = 0;
        } else {
            current++;
        }
    }

    return current > max ? current : max;
};