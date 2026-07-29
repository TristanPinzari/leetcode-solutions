function majorityElement(nums: number[]): number {
    let candidate;
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        if (sum === 0) {
            candidate = nums[i];
        }
        sum += (candidate === nums[i]) ?  1 : -1
    }
    return candidate;
};