function minSubArrayLen(target: number, nums: number[]): number {
    let lowest = null, total = nums[0], left = 0, right = 0;
    const n = nums.length;
    while (true) {
        if (total > target) {
            lowest = lowest ? Math.min(lowest, right - left + 1) : right - left + 1;
            const delta = right - left;
            if (delta <= 1) {
                if (delta === 0) {
                    if (right + 1 >= nums.length) return lowest ?? 0;
                    left++;
                    right++;
                    total = nums[right];
                } else {
                    const canShiftRight = right + 1 < nums.length;
                    if (canShiftRight) right++;
                    total += canShiftRight ? nums[right] : 0;
                    total -= nums[left];
                    left++;
                }
            } else {
                total -= nums[left];
                left++;
            }
        } else if (total < target) {
            if (right + 1 >= nums.length) return lowest ?? 0;
            right++;
            total += nums[right];
        } else {
            lowest = lowest ? Math.min(lowest, right - left + 1) : right - left + 1;
            if (right + 1 >= nums.length) return lowest ?? 0;
            right++;
            total += nums[right];
        }
        console.log(left, right, total);
    }
    return lowest ?? 0;
};