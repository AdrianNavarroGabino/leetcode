function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
    nums2 = nums2.map((n) => n * k);

    let count = 0;

    for (let i = 0; i < nums1.length; i++) {
        count += nums2.filter((n) => nums1[i] % n === 0).length;
    }

    return count;
};