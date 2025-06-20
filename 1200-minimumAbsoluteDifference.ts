function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b);
  let minDistance = arr[arr.length - 1] - arr[0];
  let pairs = [] as number[][];

  for (let i = 0; i < arr.length - 1; i++) {
    const currDistance = arr[i + 1] - arr[i];
    if (currDistance < minDistance) {
      minDistance = currDistance;
      pairs = [[arr[i], arr[i + 1]]];
    } else if (currDistance === minDistance) {
      pairs.push([arr[i], arr[i + 1]]);
    }
  }

  return pairs;
};