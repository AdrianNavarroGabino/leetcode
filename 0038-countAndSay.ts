function countAndSay(n: number): string {
    if (n === 1) {
        return '1';
    }

    const previous: string = countAndSay(n - 1);

    return previous
        .match(/1+|2+|3+|4+|5+|6+|7+|8+|9+/g)!
        .map((el) => el.length + el[0]).join('');
};