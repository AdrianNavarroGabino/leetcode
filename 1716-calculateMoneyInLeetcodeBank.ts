function totalMoney(n: number): number {
    let result = 0;

    for (let i = 0; i < Math.ceil(n / 7); i++) {
        if (i === Math.ceil(n / 7) - 1 && n % 7 !== 0) {
            result += (i + n % 7) * (i + 1 + n % 7) / 2 - i * (i + 1) / 2;
        } else {
            result += (7 + i) * (7 + i + 1) / 2 - i * (i + 1) / 2;
        }
    }
    
    return result;
};