/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;
    const shiftTimes = k % n;
    if (shiftTimes === 0) return;

    const rotated = new Array(n);
    for (let i = 0; i < n; i++) {
        rotated[(i + shiftTimes) % n] = nums[i];
    }
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
}