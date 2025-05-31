function beautifulArray(n: number): number[] {
  let result: number[] = [1];

  while (result.length < n) {
    const aux: number[] = [];

    for (const num of result) {
      if (num * 2 - 1 <= n) {
        aux.push(num * 2 - 1);
      }
    }

    for (const num of result) {
      if (num * 2 <= n) {
        aux.push(num * 2);
      }
    }

    result = aux;
  }

  return result;
};