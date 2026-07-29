function removeDuplicates(nums: number[]): number {
    let index = 0;
    let curr = null;
    for (let i = 0; i < nums.length; i++) {
        if (curr !== nums[i]) {
            nums[index++] = nums[i];
            if (nums[i] !== nums[i + 1]) continue;
            nums[index++] = nums[i];
            curr = nums[i];
            i++;
        }
    }
    return index;
}