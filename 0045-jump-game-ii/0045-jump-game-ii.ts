function jump(nums: number[]): number {
    if (nums.length === 1) return 0;
    let lastStep = 0, jumps = 0;
    while (lastStep !== nums.length - 1) {
        if (lastStep + nums[lastStep] >= nums.length - 1) return jumps + 1;
        let furthest = 0, newPos = 0;
        for (let i = 1; i <= nums[lastStep]; i++) {
            const pos = lastStep + i + nums[lastStep + i];
            if (pos > furthest) furthest = pos, newPos = lastStep + i;
        }
        lastStep = newPos;
        jumps++;
    }
};