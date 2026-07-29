function removeDuplicates(nums: number[]): number {
    let i = 0;
    for (const ele of nums) {
        if (i === 0 || i === 1 || nums[i - 2] !== ele) {
            nums[i] = ele;
            i++;
        }
    }
    return i;
}