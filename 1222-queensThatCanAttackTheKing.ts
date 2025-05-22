function queensAttacktheKing(queens: number[][], king: number[]): number[][] {
  const result = [] as number[][];
  const queensAux = queens.map((queen) => queen.toString());

  if (king[0] > 0) {
    for (let i = king[0] - 1; i >= 0; i--) {
      if (queensAux.includes(`${i},${king[1]}`)) {
        result.push([i, king[1]]);
        break;
      }
    }

    if (king[1] > 0) {
      let i = king[0] - 1;
      let j = king[1] - 1;

      while (i >= 0 && j >= 0) {
        if (queensAux.includes(`${i},${j}`)) {
          result.push([i, j]);
          break;
        }

        i--;
        j--;
      }
    }
  }

  if (king[1] > 0) {
    for (let i = king[1] - 1; i >= 0; i--) {
      if (queensAux.includes(`${king[0]},${i}`)) {
        result.push([king[0], i]);
        break;
      }
    }

    if (king[0] < 7) {
      let i = king[0] + 1;
      let j = king[1] - 1;

      while (i < 8 && j >= 0) {
        if (queensAux.includes(`${i},${j}`)) {
          result.push([i, j]);
          break;
        }

        i++;
        j--;
      }
    }
  }

  if (king[0] < 7) {
    for (let i = king[0] + 1; i < 8; i++) {
      if (queensAux.includes(`${i},${king[1]}`)) {
        result.push([i, king[1]]);
        break;
      }
    }

    if (king[1] < 7) {
      let i = king[0] + 1;
      let j = king[1] + 1;

      while (i < 8 && j < 8) {
        if (queensAux.includes(`${i},${j}`)) {
          result.push([i, j]);
          break;
        }

        i++;
        j++;
      }
    }
  }

  if (king[1] < 7) {
    for (let i = king[1] + 1; i < 8; i++) {
      if (queensAux.includes(`${king[0]},${i}`)) {
        result.push([king[0], i]);
        break;
      }
    }

    if (king[0] > 0) {
      let i = king[0] - 1;
      let j = king[1] + 1;

      while (i >= 0 && j < 8) {
        if (queensAux.includes(`${i},${j}`)) {
          result.push([i, j]);
          break;
        }

        i--;
        j++;
      }
    }
  }

  return result;
};