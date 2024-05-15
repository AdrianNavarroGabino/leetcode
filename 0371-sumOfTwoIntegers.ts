function getSum(a: number, b: number): number {
    let result: boolean[] = [];

    [a, b] = [Math.max(a, b), Math.min(a, b)];

    if (a > 0) {
        if (b > 0) {
            for (let i = 0; i < Math.abs(a); i++) {
                result.push(true);
            }

            for (let i = 0; i < Math.abs(b); i++) {
                result.push(true);
            }
        } else {
            if (Math.abs(b) > a) {
                for (let i = 0; i < Math.abs(b); i++) {
                    result.push(true);
                }

                for (let i = 0; i < Math.abs(a); i++) {
                    result.pop();
                }

                return -result.length;
            } else {
                for (let i = 0; i < Math.abs(a); i++) {
                    result.push(true);
                }

                for (let i = 0; i < Math.abs(b); i++) {
                    result.pop();
                }
            }
        }
    } else {
        for (let i = 0; i < Math.abs(a); i++) {
            result.push(true);
        }

        for (let i = 0; i < Math.abs(b); i++) {
            result.push(true);
        }

        return -result.length;
    }

    return result.length;
};