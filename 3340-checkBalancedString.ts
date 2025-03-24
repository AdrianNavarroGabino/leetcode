function isBalanced(num: string): boolean {
    let odd = 0;
    let even = 0;

    for (let i = 0; i < num.length - 1; i += 2) {
        even += +num[i];
        odd += +num[i + 1];
    }

    if (num.length % 2 === 1) {
        even += +num[num.length - 1];
    }

    return even === odd;
};