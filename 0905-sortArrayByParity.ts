function sortArrayByParity(nums: number[]): number[] {
    nums.sort((a, b) => {
        if (a % 2 === 0 && b % 2 === 1) {
            return -1;
        }
        if (a % 2 === 1 && b % 2 === 0) {
            return 1;
        }

        return 0;
    });
    
    return nums;
};