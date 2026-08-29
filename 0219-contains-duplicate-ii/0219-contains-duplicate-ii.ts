function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i], mapRes = map.get(currNum);
        if (mapRes !== undefined && Math.abs(i - mapRes) <= k) return true;
        map.set(currNum, i);
    }
    return false;
};