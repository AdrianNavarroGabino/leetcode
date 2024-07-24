function addedInteger(nums1: number[], nums2: number[]): number {
    const max1: number = Math.max(...nums1);
    const max2: number = Math.max(...nums2);

    return max2 - max1;
};