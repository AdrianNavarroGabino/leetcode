function sortPeople(names: string[], heights: number[]): string[] {
    const people: {name: string, height: number}[] = names.map((name, i) => ({name, height: heights[i]}));

    return people.sort((a, b) => b.height - a.height).map(({name}) => name);
};