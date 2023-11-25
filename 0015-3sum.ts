const threeSum = (nums: number[]): number[][] => {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if(nums[i] > 0) {
            break;
        }

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let j: number = i + 1;
        let k: number = nums.length - 1;
        
        while (j < k) {
            const sum: number = nums[i] + nums[j] + nums[k];
            if (sum > 0) {
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (nums[j] === nums[j - 1] && j < k) {
                    j++;
                }
            }
        }
    }

    return result;
};