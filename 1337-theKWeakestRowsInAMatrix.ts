function kWeakestRows(mat: number[][], k: number): number[] {
  const numberOfSoldiers = mat.map((row) => {
    const index = row.findIndex((num) => num === 0);
    return index === -1 ? row.length : index;
  });

  const rowIndex = numberOfSoldiers.map((_, i) => i);
  
  rowIndex.sort((a, b) => numberOfSoldiers[a] - numberOfSoldiers[b]);

  return rowIndex.slice(0, k);
};