function checkIfPangram(sentence: string): boolean {
    if (sentence.length < 26) {
        return false;
    }

    const letters: {[key: string]: boolean} = {};

    for (let i = 0; i < sentence.length; i++) {
        letters[sentence[i]] = true;
    }

    return Object.keys(letters).length === 26;
};