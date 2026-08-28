function twoSum(nums: number[], target: number): number[] {
    let left = 0, right = nums.length - 1;
    const copy = [...nums].sort((a, b) => a - b);
    
    while (left < right) {
        const sum = copy[left] + copy[right];
        if (sum === target) {
            const first = nums.indexOf(copy[left]);
            let second = nums.indexOf(copy[right]);
            if (first === second) {
                nums[first] = null;
                second = nums.indexOf(copy[right]);
                nums[first] = copy[left];
            }
            return[first, second];
        }
        if  (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};