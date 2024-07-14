function numberOfSteps(num: number): number {
    switch (num) {
        case 0:
            return 0;
        case 1:
            return 1;
        default:
            return 1 + (num % 2 ? numberOfSteps(num - 1) : numberOfSteps(num / 2));
    }
};