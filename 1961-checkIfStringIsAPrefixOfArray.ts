function isPrefixString(s: string, words: string[]): boolean {
    let index = 0;

    for (let i = 0; i < words.length; i++) {
        if (index >= s.length) {
            return true;
        }

        const sAux = s.substring(index, index + words[i].length);
        index = index + words[i].length

        if (sAux !== words[i]) {
            return false;
        }
    }

    return index >= s.length;
};