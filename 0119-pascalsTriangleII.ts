function getRow(rowIndex: number): number[] {
    function getNthRow(prevRow: number[]): number[] {
        if(!prevRow) {
            return [1];
        }

        const row: number[] = [];

        for (let i = 0; i < prevRow.length + 1; i++) {
            if (i === 0 || i === prevRow.length) {
                row.push(1);
            } else {
                row.push(prevRow[i - 1] + prevRow[i]);
            }
        }

        return row;
    }

    const result: number[][] = [];

    for (let i = 1; i <= rowIndex + 1; i++) {
        result.push(getNthRow(result[result.length - 1]));
    }

    return result[rowIndex];
};