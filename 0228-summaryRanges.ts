function summaryRanges(nums: number[]): string[] {
    if (!nums.length) {
        return [];
    }

    let amount: number = 0;
    let result: string[] = [];
    let partialResult: string = '';

    for (let i = 0; i < nums.length; i++) {
        if (amount === 0 && partialResult === '') {
            partialResult = nums[i].toString();
            amount++;
        } else {
            if (nums[i] === nums[i - 1] + 1) {
                amount++;
            } else if (amount > 1) {
                partialResult += `->${nums[i - 1]}`;
                result.push(partialResult);
                partialResult = nums[i].toString();
                amount = 1;
            } else {
                result.push(partialResult);
                partialResult = nums[i].toString();
                amount = 1;
            }
        }
    }

    if (amount > 1) {
        partialResult += `->${nums[nums.length - 1]}`;
        result.push(partialResult);
    } else {
        result.push(partialResult);
    }

    return result;
};