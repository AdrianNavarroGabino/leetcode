function maxOperations(nums: number[], k: number): number {
    nums = nums.filter((el) => el < k);

    let result: number = 0;

    for (let i = 0; i < nums.length; i++) {
        const target = k - nums[i];

        if (target > 0) {
            const j = nums.indexOf(target, i + 1);

            if (j !== -1) {
                nums.splice(j, 1)
                nums.splice(i, 1);
                result++;
                i -= 2;
            }
        }
    }

    return result;
};