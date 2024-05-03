function isPerfectSquare(num: number): boolean {
    let i: number = 1;
    let current: number;

    do {
        current = i * i;
        i++;
    } while (current < num);

    return current === num;
};