/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const originalLength = nums.length;
    for (let i = 0; i < k % originalLength; i++) {
        nums.splice(0, 0, nums[originalLength - 1])
        nums.length = originalLength;
    }
};