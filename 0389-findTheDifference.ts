function findTheDifference(s: string, t: string): string {
    const t2: string[] = t.split('').sort();
    const s2: string[] = s.split('').sort();

    for (let i = 0; i < s2.length; i++) {
        if (t2[i] !== s2[i]) {
            return t2[i]
        }
    }

    return t2[t2.length - 1];
};