function longestPalindrome(s: string): number {
    let result: number = 0;

    const letters: {[key: string]: number} = s.split('').reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = 0;
        }

        acc[curr]++;
        return acc;
    }, {} as {[key: string]: number});

    const odds: number[] = [];

    for (const letter in letters) {
        if (letters[letter] % 2 === 0) {
            result += letters[letter];
        } else {
            odds.push(letters[letter]);
        }
    }

    const greatestOdd: number = odds.length ? Math.max(...odds) : 0;
    const otherOdds: number = odds.reduce((acc, curr) => acc + (curr > 1 ? curr - 1 : 0), 0) - (greatestOdd > 0 ? greatestOdd - 1 : 0);

    return result + greatestOdd + otherOdds;
};