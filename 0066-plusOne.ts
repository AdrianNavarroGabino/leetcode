function plusOne(digits: number[]): number[] {
    let i = digits.length - 1;
    digits[i]++;

    while (digits[i] > 9) {
        digits[i] = 0;
        i--;
        if (i < 0) {
            digits.unshift(0);
            i = 0;
        }
        digits[i]++;
    }

    return digits;
};