function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const result = [] as number[][];
  const matAux = mat.flat();

  if (c * r !== matAux.length) {
    return mat;
  }

  for (let i = 0; i < r; i++) {
    result.push([]);
    for (let j = 0; j < c; j++) {
      result[i].push(matAux.shift() || 0);
    }
  }

  return result;
};