function restoreString(s: string, indices: number[]): string {
    return indices.reduce((acc: string[], curr: number, i: number): string[] => {
        acc[curr] = s[i];
        return acc
    }, []).join('');
};