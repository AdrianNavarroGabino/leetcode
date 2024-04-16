function isIsomorphic(s: string, t: string): boolean {
    const dictionaryS: {[key: string]: number} = {};
    const dictionaryT: {[key: string]: number} = {};
    let index = 1;

    for (let i = 0; i < s.length; i++) {
        if (!dictionaryS[s[i]]) {
            dictionaryS[s[i]] = index;
        }
        if (!dictionaryT[t[i]]) {
            dictionaryT[t[i]] = index;
        }
        index++;

        if (dictionaryS[s[i]] !== dictionaryT[t[i]]) {
            return false;
        }
    }

    return true;
};