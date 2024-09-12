function finalString(s: string): string {
    const sAux: string[] = s.split('i');
    let result = '';

    for (let i = 0; i < sAux.length - 1; i++) {
        result += sAux[i];
        result = result.split('').reverse().join('');
    }

    result += sAux[sAux.length - 1];

    return result;
};