function minSubArrayLen(target: number, nums: number[]): number {
    const n = nums.length;
    let left = 0;
    let total = 0;
    let lowest = Infinity;

    for (let right = 0; right < n; right++) {
        total += nums[right];

        while (total >= target) {
            lowest = Math.min(lowest, right - left + 1);
            total -= nums[left];
            left++;
        }
    }

    return lowest === Infinity ? 0 : lowest;
}