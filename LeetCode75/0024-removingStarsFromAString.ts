function removeStars(s: string): string {
    const result: string[] = [];

    for (const c of s) {
        if (c === '*') {
            result.pop();
        } else {
            result.push(c);
        }
    }

    return result.join('');
};