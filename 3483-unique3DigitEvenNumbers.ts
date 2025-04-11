function totalNumbers(digits: number[]): number {
    const evenDigits = digits.filter((num) => num % 2 === 0);

    if (evenDigits.length === 0) {
        return 0;
    }

    const numbers = new Set();
    
    for (let i = 0; i < digits.length; i++) {
        const firstDigit = digits[i];
        if (firstDigit === 0) {
            continue;
        }

        for (let j = 0; j < digits.length; j++) {
            if (i === j) {
                continue;
            }
            const secondDigit = digits[j];
            for (let k = 0; k < digits.length; k++) {
                const thirdDigit = digits[k];
                if (k === j || k === i || thirdDigit % 2) {
                    continue;
                }

                numbers.add(firstDigit * 100 + secondDigit * 10 + thirdDigit);
            }
        }
    }

    return numbers.size;
};