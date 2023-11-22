const reverse = (x: number): number => {
    const sign: number = x < 0 ? -1 : 1;
    x *= sign;
    const result: number = +Array.from(x.toString()).reverse().join('') * sign;
    
    return result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1 ? 0 : result;
};