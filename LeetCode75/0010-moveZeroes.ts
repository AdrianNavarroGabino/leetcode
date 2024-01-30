/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    const numsAux: number[] = nums.filter((el) => el);
    const noZerosLength: number = numsAux.length;

    for (let i = 0; i < nums.length; i++) {
        if (i < noZerosLength) {
            nums[i] = numsAux[i];
        } else {
            nums[i] = 0;
        }
    }
 };