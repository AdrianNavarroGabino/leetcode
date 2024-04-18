function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const result: {[key: number]: number[]} = {};
    for (let i = 0; i < nums.length; i++) {
        if (result[nums[i]]) {
            result[nums[i]].push(i);
        } else {
            result[nums[i]] = [i];
        }
    }

    return Object.values(result)
        .some((el) => el.length > 1 && el.reduce((acc, curr, i) => i === el.length - 1 ?
            acc : Math.min(acc, el[i + 1] - curr), k + 1) <= k);
};