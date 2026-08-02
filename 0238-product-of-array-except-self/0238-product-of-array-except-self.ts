function productExceptSelf(nums: number[]): number[] {
    let temp = new Array(nums.length);
    let answer = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        temp[i] = nums[i] * (temp[i - 1] ?? 1);
    }
    console.log(temp);
    for (let i = nums.length - 2; i >= 0; i--) {
        nums[i] = nums[i] * nums[i + 1];
    }
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        answer[i] = (temp[i - 1] ?? 1) * (nums[i + 1] ?? 1);
    }
    return answer;
};