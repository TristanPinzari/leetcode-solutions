/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const originalLength = nums.length;
    const shiftTimes = k % originalLength;
    if (shiftTimes === 0) return;
    for (let i = 0; i < originalLength; i++) {
        nums.push(nums[(originalLength + i - shiftTimes) % originalLength])
    }
    nums.splice(0, originalLength)
};