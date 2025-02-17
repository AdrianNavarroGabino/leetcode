function minNumber(nums1: number[], nums2: number[]): number {
    const coincidence = nums1.filter((n1) => nums2.includes(n1));

    if (coincidence.length) {
        return Math.min(...coincidence);
    }

    const min1 = Math.min(...nums1);
    const min2 = Math.min(...nums2);

    return min1 > min2 ? min2 * 10 + min1 : min1 * 10 + min2;
};