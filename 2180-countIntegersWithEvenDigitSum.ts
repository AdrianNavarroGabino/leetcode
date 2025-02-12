function countEven(num: number): number {
    let result = 0;

    for (let i = 1; i <= num; i++) {
        if ([...String(i)].reduce((acc, curr) => acc + +curr, 0) % 2 === 0) {
            result++;
        }
    }

    return result;
};