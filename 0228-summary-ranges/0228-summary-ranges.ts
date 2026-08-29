function summaryRanges(nums: number[]): string[] {
    const ans = new Array();
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (right === nums.length - 1 || nums[right + 1] - nums[right] !== 1){
            if (left === right) {
                ans.push(String(nums[right]));
            } else {
                ans.push(nums[left] + "->" + nums[right]);
            }
            left = right + 1;
        }
    }
    return ans;
};