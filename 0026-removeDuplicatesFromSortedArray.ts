const removeDuplicates = (nums: number[]): number => {
    let count: number | undefined = nums[0];
    let position: number = 1;

    while (count != undefined) {
        count = nums.find((a) => a > count!);
        if(count != undefined) {
            nums[position] = count;
            position++;
        }
    }

    return position;
};