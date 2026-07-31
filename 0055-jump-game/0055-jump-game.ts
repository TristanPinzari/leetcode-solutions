function canJump(nums: number[]): boolean {
    let lastStep = nums.length - 1;
    for (let i = lastStep - 1; i >= 0; i--) {
        if (nums[i] >= lastStep - i) lastStep = i;
    }
    return lastStep === 0;
};