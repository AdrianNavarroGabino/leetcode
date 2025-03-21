function mostFrequentEven(nums: number[]): number {
    nums = nums.filter((n) => n % 2 === 0);

    if (!nums.length) {
        return -1;
    }

    const frequency = nums.reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 0;
        }

        acc[curr]++;
        return acc;
    }, {} as {[key: number]: number});

    let maxValue = frequency[nums[0]];
    let maxKey = nums[0];

    for (let [key, value] of Object.entries(frequency)) {
        if (value >= maxValue) {
            if (value === maxValue) {
                if (+key < maxKey) {
                    maxValue = value;
                    maxKey = +key;
                }
            } else {
                maxValue = value;
                maxKey = +key;
            }
        }
    }

    return maxKey;
};