function reformat(s: string): string {
    const letters = s.match(/[a-zA-Z]/g) || [];
    const numbers = s.match(/\d/g) || [];

    if (Math.abs(letters.length - numbers.length) > 1) {
        return '';
    }

    let result = '';

    const [longest, shortest] = letters.length > numbers.length ? [letters, numbers] : [numbers, letters];

    for (let i = 0; i < shortest.length; i++) {
        result += longest[i] + shortest[i];
    }

    if (longest.length > shortest.length) {
        result += longest[longest.length - 1];
    }

    return result;
};