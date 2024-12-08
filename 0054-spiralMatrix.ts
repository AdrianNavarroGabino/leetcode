function spiralOrder(matrix: number[][]): number[] {
    if (matrix.length === 1) {
        return matrix.flat();
    }
    if (matrix.length === 2) {
        return [matrix[0], matrix[1].reverse()].flat();
    }

    const matrixAux: { checked: boolean, num: number }[][] = matrix
        .map((row) => row
            .map((el) => ({
                checked: false,
                num: el
            })
        ));

    let direction = 0;
    let i: number = 0;
    let j: number = 0;

    const result: number[] = [matrixAux[0][0].num];
    matrixAux[0][0].checked = true;

    while (true) {
        if (direction === 0) {
            if (matrixAux[i].length !== j + 1 && !matrixAux[i][j + 1].checked) {
                result.push(matrixAux[i][j + 1].num);
                matrixAux[i][j + 1].checked = true;
                j++;
            } else if (!matrixAux[i + 1][j].checked) {
                direction = 1;
            } else {
                break;
            }
        } else if (direction === 1) {
            if (matrixAux.length !== i + 1 && !matrixAux[i + 1][j].checked) {
                result.push(matrixAux[i + 1][j].num);
                matrixAux[i + 1][j].checked = true;
                i++;
            } else if (j !== 0 && !matrixAux[i][j - 1].checked) {
                direction = 2;
            } else {
                break;
            }
        } else if (direction === 2) {
            if (j !== 0 && !matrixAux[i][j - 1].checked) {
                result.push(matrixAux[i][j - 1].num);
                matrixAux[i][j - 1].checked = true;
                j--;
            } else if (!matrixAux[i - 1][j].checked) {
                direction = 3;
            } else {
                break;
            }
        } else {
            if (i !== 0 && !matrixAux[i - 1][j].checked) {
                result.push(matrixAux[i - 1][j].num);
                matrixAux[i - 1][j].checked = true;
                i--;
            } else if (!matrixAux[i][j + 1].checked) {
                direction = 0;
            } else {
                break;
            }
        }
    }

    return result;
}