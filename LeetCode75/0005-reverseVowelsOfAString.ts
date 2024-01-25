function reverseVowels(s: string): string {
    const vowels: string[] = [...s].filter((el) => 'aeiouAEIOU'.includes(el));

    return [...s].map((el) => 'aeiouAEIOU'.includes(el) ? vowels.pop() : el).join('');
};