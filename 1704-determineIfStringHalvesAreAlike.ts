function halvesAreAlike(s: string): boolean {
    const a: string = s.substring(0, s.length / 2);
    const b: string = s.substring(s.length / 2);

    return (a.match(/[aeiou]/gi) || []).length === (b.match(/[aeiou]/gi) || []).length
};