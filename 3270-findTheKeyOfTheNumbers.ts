function generateKey(num1: number, num2: number, num3: number): number {
    let key: string = '';
    const
        num1Aux: string = num1.toString().padStart(4, '0'),
        num2Aux: string = num2.toString().padStart(4, '0'),
        num3Aux: string = num3.toString().padStart(4, '0')
    ;

    for (let i = 0; i < 4; i++) {
        key += Math.min(+num1Aux[i], +num2Aux[i], +num3Aux[i]);
    }

    return +key;
};