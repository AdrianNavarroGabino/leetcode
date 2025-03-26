function getCommon(nums1: number[], nums2: number[]): number {
    if (nums1[nums1.length - 1] < nums2[0] || nums2[nums2.length - 1] < nums1[0]) {
        return -1;
    }
    let [shortest, longest] = nums1.length > nums2.length ? [nums2, nums1] : [nums1, nums2];

    while (shortest.length > 0 && longest.length > 0) {
        const short = shortest.shift() || 0;

        const index = longest.findIndex((num) => num >= short);

        if (short == longest[index]) {
            return short;
        } else {
            longest = longest.slice(index);
        }
    }

    return -1;
};