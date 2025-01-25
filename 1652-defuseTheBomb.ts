function decrypt(code: number[], k: number): number[] {
    if (k === 0) {
        return Array(code.length).fill(0);
    }

    return code.map((_, i) => {
        let result: number = 0;
        if (k < 0) {
            for (let j = 1; j <= -k; j++) {
                const index = i - j < 0 ? code.length + i - j : i - j;
                result += code[index];
            }
        } else {
            for (let j = 1; j <= k; j++) {
                result += code[(i + j) % code.length];
            }
        }
        return result;
    });
};