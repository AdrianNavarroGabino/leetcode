function digitCount(num: string): boolean {
  const numArr = num.split('');

  const occurrences = numArr.reduce((acc, curr) => {
    if (!acc[+curr]) {
      acc[+curr] = 0;
    }

    acc[+curr]++;
    return acc;
  }, {} as {[key: number]: number});

  return numArr.every((num, i) => (!occurrences[i] && num === '0') || occurrences[i] === +num);
};