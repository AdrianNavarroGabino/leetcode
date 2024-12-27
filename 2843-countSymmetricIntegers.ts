function countSymmetricIntegers(low: number, high: number): number {
    let result: number = 0;

    for (let i = low; i <= high; i++) {
        const numArr : string[] = i.toString().split('');
        
        if (numArr.length % 2) {
            i = +'9'.repeat(numArr.length);
            continue;
        }

        let num1: number = 0;
        let num2: number = 0;

        for (let j = 0; j < numArr.length / 2; j++) {
            num1 += +numArr[j];
        }

        for (let j = numArr.length / 2; j < numArr.length; j++) {
            num2 += +numArr[j];
        }

        if (num1 === num2) {
            result++;
        }
    }

    return result;
};