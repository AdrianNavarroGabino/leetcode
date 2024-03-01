function mySqrt(x: number): number {
    if (x <= 0) {
        return 0;
    }

    let result: number = Math.ceil(x / Math.pow(10, (x.toString().length - 1) / 2));

    while (result > 0) {
        if (result * result <= x) {
            return result;
        }

        result--;
    }

    return result;
};