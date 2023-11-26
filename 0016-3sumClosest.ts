const threeSumClosest = (nums: number[], target: number): number => {
    nums.sort((a, b) => a - b);
    let candidate: number = nums[0] + nums[1] + nums[2];

    if(candidate === target) {
        return candidate;
    }

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if(Math.abs(sum - target) < Math.abs(candidate - target)) {
                    candidate = sum;
                    if(candidate === target) {
                        return candidate;
                    }
                }
            }
        }
    }

    return candidate;
};