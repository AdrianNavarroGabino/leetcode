function findDifference(nums1: number[], nums2: number[]): number[][] {
    return [
        [...new Set(nums1)].filter((el) => !nums2.includes(el)),
        [...new Set(nums2)].filter((el) => !nums1.includes(el))
    ]
};