function removeDigit(number: string, digit: string): string {
    let currentIndex = -2;
    let maxResult = '0';
    while (currentIndex !== -1) {
        currentIndex = number.indexOf(digit, currentIndex + 1);
        if (currentIndex !== -1) {
            const candidate = number.substring(0, currentIndex) + number.substring(currentIndex + 1);
            maxResult = BigInt(maxResult) < BigInt(candidate) ? candidate : maxResult;
        }
    }
    
    return maxResult;
};