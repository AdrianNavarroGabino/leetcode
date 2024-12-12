function returnToBoundaryCount(nums: number[]): number {
    let times: number = 0;
    let currentPosition = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentPosition += nums[i];

        if (currentPosition === 0) {
            times++;
        }
    }

    return times;
};