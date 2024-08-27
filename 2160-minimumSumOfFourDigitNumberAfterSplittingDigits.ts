function minimumSum(num: number): number {
    const newNum: string[] = Array.from(num.toString()).sort((a, b) => +a - +b);

    return +(newNum[0] + newNum[3]) + +(newNum[1] + newNum[2]);
};