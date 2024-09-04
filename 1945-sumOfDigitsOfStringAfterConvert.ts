function getLucky(s: string, k: number): number {
    let conversion: string = Array.from(s, (l) => l.charCodeAt(0) - 96).join('');
    let result: number = 0;

    for (let i = 0; i < k; i++) {
        result = Array.from(conversion).reduce((acc, curr) => acc + +curr, 0);
        conversion = result.toString();
    }

    return result;
};