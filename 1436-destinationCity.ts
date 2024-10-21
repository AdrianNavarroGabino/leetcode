function destCity(paths: string[][]): string {
    const last: string[] = paths
        .find((p1) => paths.every((p2) => p1[1] !== p2[0])) || paths[0];

    return last[1];
};