function addBinary(a: string, b: string): string {
    const long: string[] = a.length > b.length ? a.split('').reverse() : b.split('').reverse();
    const short: string[]  = a.length > b.length ? b.split('').reverse() : a.split('').reverse();
    let extra: number = 0;

    for (let i = 0; i < short.length; i++) {
        const sum: number = +long[i] + +short[i] + extra;

        if (sum % 2 === 0) {
            long[i] = '0';
        } else {
            long[i] = '1';
        }

        extra = sum > 1 ? 1 : 0;
    }

    if (extra) {
        let i: number = short.length;

        while (i <= long.length - 1) {
            const sum: number = +long[i] + extra;
            if (sum % 2 === 0) {
                long[i] = '0';
            } else {
                long[i] = '1';
            }

            extra = sum > 1 ? 1 : 0;
            i++;
        }

        if (extra) {
            long.push('1');
        }
    }

    return long.reverse().join('');
};