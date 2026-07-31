function jump(nums: number[]): number {
    let lastStep = nums.length - 1, jumps = 0;
    while (lastStep !== 0) {
        let nextStep = lastStep;
        for (let i = lastStep - 1; i >= 0; i--) {
            if (nums[i] >= lastStep - i) nextStep = i;
        }
        lastStep = nextStep; 
        jumps++;
    }
    return jumps;
};