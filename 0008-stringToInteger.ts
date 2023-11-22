const myAtoi = (s: string): number => {
    const lowerLimit: number = Math.pow(-2, 31);
    const upperLimit: number = Math.pow(2, 31) - 1;
    const regexp: RegExpMatchArray | null = s.trim().match(/^[-+]?\d+/);
    const result: number = regexp ? +regexp[0] : 0;
    return result < lowerLimit ? lowerLimit : (result > upperLimit ? upperLimit : result);
};