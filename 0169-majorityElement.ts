function majorityElement(nums: number[]): number {
    const results: number[] = [];
    const half: number = Math.ceil(nums.length / 2);

    for (let i = 0; i < half; i++) {
        if (!results[nums[i]]) {
            results[nums[i]] = 0;
        }
        results[nums[i]]++;
    }

    for (let i = half; i < nums.length; i++) {
        if (!results[nums[i]]) {
            results[nums[i]] = 0;
        }
        results[nums[i]]++;

        if (results[nums[i]] > nums.length / 2) {
            return nums[i];
        }
    }

    return nums[0];
};