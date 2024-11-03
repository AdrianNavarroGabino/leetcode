function sortTheStudents(score: number[][], k: number): number[][] {
    return score.sort((rowA, rowB) => rowB[k] - rowA[k]);
};