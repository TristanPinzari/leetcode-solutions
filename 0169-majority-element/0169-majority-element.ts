function majorityElement(nums: number[]): number {
    let failed = [];
    for (const ele of nums) {
        if (failed.includes(ele)) continue;
        if (nums.filter(n => n === ele).length > nums.length / 2) return ele;
        failed.push(ele);
    }
};