function addStrings(num1: string, num2: string): string {
    let result: string = '';
    let remainder: number = 0;
    const len: number = Math.max(num1.length, num2.length);
    num1 = num1.padStart(len, '0');
    num2 = num2.padStart(len, '0');

    for (let i = num1.length - 1; i > 0; i--) {
        const sum: number = +num1[i] + +num2[i] + remainder;
        remainder = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }

    result = (+num1[0] + +num2[0] + remainder) + result;

    return result;
};