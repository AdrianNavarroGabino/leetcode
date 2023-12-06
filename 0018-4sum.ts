const fourSum = (nums: number[], target: number): number[][] => {
    const result = new Set() as Set<string>;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        if(nums[i] === nums[i + 4]) {
            nums.splice(i + 4, nums.lastIndexOf(nums[i]) - 3);
        }
        if(nums[i] > target && target >= 0) {
            break;
        }
        for (let j = i + 1; j < nums.length - 2; j++) {
            if(nums[i] + nums[j] > target && target >= 0) {
                break;
            }
            for (let k = j + 1; k < nums.length - 1; k++) {
                if(nums[i] + nums[j] + nums[k] > target && target >= 0) {
                    break;
                }
                for(let l = k + 1; l < nums.length; l++) {
                    const sum = nums[i] + nums[j] + nums[k] + nums[l];
                    if(sum > target && target >= 0) {
                        break;
                    }
                    if(sum === target) {
                        result.add(`${nums[i]},${nums[j]},${nums[k]},${nums[l]}`);
                    }
                }
            }
        }
    }

    return [...result].map((el) => el.split(',').map((n) => +n));
};