function nextGreatestLetter(letters: string[], target: string): string {
    const targetValue = target.charCodeAt(0);

    return letters.find((letter) => letter.charCodeAt(0) > targetValue) || letters[0];
};