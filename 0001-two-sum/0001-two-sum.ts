function twoSum(nums: number[], target: number): number[] {
    let left = 0, right = nums.length - 1;
    const copy = [...nums].sort((a, b) => a - b), map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const curr  = nums[i], res = map.get(curr);
        if  (res) {
            res.push(i)
        } else {
            map.set(curr, [i]);
        }
    }
    
    while (left < right) {
        const sum = copy[left] + copy[right];
        if (sum === target) {
            return[map.get(copy[left])[0], map.get(copy[right])[1] ?? map.get(copy[right])[0]];
        }
        if  (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};