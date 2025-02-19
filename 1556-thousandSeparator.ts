function thousandSeparator(n: number): string {
    let result = '';
    const nStr = n.toString();

    let i = nStr.length;
    while (i > 3) {
        result = '.' + nStr.substring(i - 3, i) + result;
        i -= 3;
    }

    result = nStr.substring(0, i) + result

    return result;
};