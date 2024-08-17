function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
    return [
        ...new Set(
            nums1.filter((n) => nums2.includes(n) || nums3.includes(n))
                .concat(nums2.filter((n) => nums1.includes(n) || nums3.includes(n)))
            )
        ];
};