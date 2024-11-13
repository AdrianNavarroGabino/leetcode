function buildArray(target: number[], n: number): string[] {
    let candidate: number = 0;
    const result: string[] = [];

    for (let i = 1; i <= target[target.length - 1]; i++) {
        result.push('Push');

        if (i === target[candidate]) {
            candidate++;
        } else {
            result.push('Pop');
        }
    }

    return result;
};