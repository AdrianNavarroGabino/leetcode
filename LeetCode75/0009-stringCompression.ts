function compress(chars: string[]): number {
    const charsAux: string[] = chars.reduce((acc, curr) => {
        if (acc.length) {
            if (acc[acc.length - 1].char !== curr) {
                acc.push({char: curr, times: 1});
            } else {
                acc[acc.length - 1].times++;
            }
        } else {
            acc.push({char: curr, times: 1});
        }

        return acc;
    }, [] as { char: string, times: number }[])
        .reduce((acc, curr) => {
            acc.push(curr.char);

            if (curr.times !== 1) {
                curr.times
                    .toString()
                    .split('')
                    .forEach((el) => acc.push(el));
            }

            return acc;
        }, [] as string[]);

    chars.length = charsAux.length;

    charsAux.forEach((el, i) => {
        chars[i] = el;
    });

    return chars.length;
};