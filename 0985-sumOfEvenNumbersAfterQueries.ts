function sumEvenAfterQueries(nums: number[], queries: number[][]): number[] {
    const result = [] as number[];

    for (let i = 0; i < queries.length; i++) {
      nums[queries[i][1]] += queries[i][0];
      result.push(nums.reduce((acc, curr) => acc + (curr % 2 ? 0 : curr), 0));
    }

    return result;
};