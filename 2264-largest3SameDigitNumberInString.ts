function largestGoodInteger(num: string): string {
    const threeDigits = num.match(/(\d)\1\1/g);

    if (!threeDigits) {
        return '';
    }

    return Math.max(...threeDigits.map((n) => +n)).toString().padStart(3, '0');
};