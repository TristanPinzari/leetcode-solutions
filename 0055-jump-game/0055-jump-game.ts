function canJump(nums: number[]): boolean {
    let lastStep = nums.length - 1;
    while (lastStep !== 0) {
        let nextStep = lastStep;
        for (let i = lastStep - 1; i >= 0; i--) {
            if (nums[i] >= lastStep - i) nextStep = i;
        }
        if (nextStep === lastStep) return false;
        lastStep = nextStep; 
    }
    return true;
};