function findMaxAverage(nums: number[], k: number): number {
    let partialRes: number = 0;
    let current: number = 0;
    let res: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if(i < k) {
            partialRes += nums[i];
            res = partialRes;
        } else {
            current = partialRes - nums[i - k] + nums[i];
            if(current > res) {
                res = current;
            }
            partialRes = current;
        }
    }

    return res / k;
};