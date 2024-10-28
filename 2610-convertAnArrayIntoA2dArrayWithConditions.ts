function findMatrix(nums: number[]): number[][] {
    const result: number[][] = [[]];

    for (let i = 0; i < nums.length; i++) {
        let found: boolean = false;

        for (let j = 0; j < result.length; j++) {
            if (!result[j].includes(nums[i])) {
                result[j].push(nums[i]);
                found = true;
                break;
            }
        }

        if (!found) {
            result.push([nums[i]]);
        }
    }

    return result;
};