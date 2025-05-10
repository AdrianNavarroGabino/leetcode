function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < nums1.length; i++) {
    const index = nums2.indexOf(nums1[i]);
    let num = -1;

    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        num = nums2[j];
        break;
      }
    }

    result.push(num);
  }
  
  return result;
};