function longestOnes(nums: number[], k: number): number {
    let result: number = 0;
    let partialResult: number = 0;
    let currentK: number = k;
    let index: number = 0;

    for (let i = 0; i < nums.length - result; i++) {
        while (index < nums.length &&
            (nums[index] || currentK > 0)) {
                if(!nums[index]) {
                    currentK--;
                }
                
                partialResult++;
                index++;
        }

        if(result < partialResult) {
            result = partialResult;
        }

        partialResult = 0;
        currentK = k;
        index = i + 1;
    }

    return result;
};