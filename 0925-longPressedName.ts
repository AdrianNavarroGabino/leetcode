function isLongPressedName(name: string, typed: string): boolean {
    if (typed[0] !== name[0] || typed.length < name.length) {
        return false;
    }

    let index = 1;
    for (let i = 1; i < typed.length; i++) {
        if (typed[i] === name[index]) {
            index++;
        } else if (typed[i] !== name[index - 1] || typed[i] !== typed[i - 1]) {
            return false;
        }
    }

    return index === name.length;
};