function intersect(nums1: number[], nums2: number[]): number[] {
  const aux1 = nums1.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 0;
    }

    acc[curr]++;
    return acc;
  }, {} as { [key: number]: number; });

  const aux2 = nums2.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 0;
    }

    acc[curr]++;
    return acc;
  }, {} as { [key: number]: number; });

  const result: number[] = [];

  if (nums1.length > nums2.length) {
    for (const key in aux2) {
      if (aux1[+key]) {
        result.push(...Array(Math.min(aux1[+key], aux2[+key])).fill(+key));
      }
    }
  } else {
    for (const key in aux1) {
      if (aux2[+key]) {
        result.push(...Array(Math.min(aux1[+key], aux2[+key])).fill(+key));
      }
    }
  }

  return result;
};