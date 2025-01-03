function maximumValue(strs: string[]): number {
    return strs
        .reduce((acc, curr) => isNaN(+curr) ?
            (curr.length <= acc ? acc : curr.length) :
            (+curr <= acc ? acc : +curr), 0);
};