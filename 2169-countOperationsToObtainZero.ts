function countOperations(num1: number, num2: number): number {
    let result = 0;

    while (num1 && num2) {
        if (num1 > num2) {
            num1 -= num2;
        } else if (num1 < num2) {
            num2 -= num1;
        } else {
            return result + 1;
        }

        result++;
    }

    return 0;
};