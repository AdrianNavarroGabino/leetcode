function sumOddLengthSubarrays(arr: number[]): number {
    let result: number = 0;

    for (let i = 1; i <= arr.length; i += 2) {
        for (let j = 0; j < arr.length - i + 1; j++) {
            result += arr.slice(j, j + i).reduce((acc, curr) => acc + curr, 0);
        }
    }

    return result;
};