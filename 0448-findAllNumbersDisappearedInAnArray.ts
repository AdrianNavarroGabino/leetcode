function findDisappearedNumbers(nums: number[]): number[] {
    const result: number[] = [];
    const candidates: boolean[] = Array.from({ length: nums.length + 1 }, () => true);

    for (let n of nums) {
        candidates[n] = false;
    }

    for (let i = 1; i < candidates.length; i++) {
        if (candidates[i]) {
            result.push(i);
        }
    }

    return result;
};