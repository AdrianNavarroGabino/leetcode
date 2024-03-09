/**
 Do not return anything, modify nums in-place instead.
 */
 function sortColors(nums: number[]): void {
    let twos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > nums.length - twos- 1) {
            break;
        }

        switch(nums[i]) {
            case 0:
                nums.splice(i, 1);
                nums.unshift(0);
                break;
            case 2:
                nums.splice(i, 1);
                nums.push(2);
                i--;
                twos++;
                break;
        }
    }
 };