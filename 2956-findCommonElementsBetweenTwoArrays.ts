function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
    return [
        nums1.filter((n) => nums2.includes(n)).length,
        nums2.filter((n) => nums1.includes(n)).length
    ]
};