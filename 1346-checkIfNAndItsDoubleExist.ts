function checkIfExist(arr: number[]): boolean {
  const candidates = {} as {[key: number]: boolean};

  for (let i = 0; i < arr.length; i++) {
    if (candidates[arr[i]]) {
      return true;
    }

    candidates[arr[i] * 2] = true;

    if (arr[i] % 2 === 0) {
      candidates[arr[i] / 2] = true;
    }
  }

  return false;
};