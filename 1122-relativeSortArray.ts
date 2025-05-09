function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const arr1Filtered1 = arr1
      .filter((num) => !arr2.includes(num))
      .sort((a, b) => a - b);
    const arr2Filtered1 = arr1
      .filter((num) => arr2.includes(num))
      .sort((a, b) => arr2.indexOf(a) - arr2.indexOf(b));

    return arr2Filtered1.concat(arr1Filtered1);
};