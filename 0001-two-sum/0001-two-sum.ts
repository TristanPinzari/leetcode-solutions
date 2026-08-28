function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i], diff = target - curr, first = map.get(diff);
        if (first !== undefined) return [first, i];
        map.set(curr, i);
    }
};