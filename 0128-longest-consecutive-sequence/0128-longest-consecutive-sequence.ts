function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;
    nums = Array.from(new Set(nums)).sort((a, b) => a - b);
    let top = 1, count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === 1) {
            count++;
        } else {
            count = 1;
        }
        top = Math.max(top, count);
    }
    return top;
};