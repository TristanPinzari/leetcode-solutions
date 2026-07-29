function removeDuplicates(nums: number[]): number {
    if (nums.length > 1) {
        let index = 0;
        while (nums.length > index) {
            if (nums[index] === nums[index + 1]) {
                nums.splice(index + 1, 1)
                continue
            }
            index++;
        }
        return index;
    } else {
        return nums.length;
    }
};