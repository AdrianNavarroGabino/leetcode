function intersection(nums1: number[], nums2: number[]): number[] {
    return [...new Set(nums1.filter((n) => nums2.includes(n)))];
};