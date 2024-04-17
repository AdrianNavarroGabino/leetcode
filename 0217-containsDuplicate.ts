function containsDuplicate(nums: number[]): boolean {
    const result: {[key: number]: boolean} = {};
    for (let i = 0; i < nums.length; i++) {
        if (result[nums[i]]) {
            return true;
        }

        result[nums[i]] = true;
    }

    return false;
};