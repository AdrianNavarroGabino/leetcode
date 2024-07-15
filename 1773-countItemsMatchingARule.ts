function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    return items
        .map((e) => ({ type: e[0], color: e[1], name: e[2] }))
        .filter((e) => e[ruleKey] === ruleValue)
        .length;
};