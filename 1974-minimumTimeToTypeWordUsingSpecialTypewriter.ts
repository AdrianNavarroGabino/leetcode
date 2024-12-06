function minTimeToType(word: string): number {
    let seconds: number = 0;
    let currentLetter: string = 'a';
    const totalLength: number = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

    for (let i = 0; i < word.length; i++) {
        const length = Math.abs(word.charCodeAt(i) - currentLetter.charCodeAt(0));

        if (length < totalLength / 2) {
            seconds += length + 1;
        } else {
            seconds += totalLength - length + 1;
        }

        currentLetter = word[i];
    }

    return seconds;
};