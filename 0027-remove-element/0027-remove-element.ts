function removeElement(nums: number[], val: number): number {
    const correct = nums.filter(n => n !== val);
    nums.splice(0, correct.length, ...correct);
    nums.length = correct.length;
    return correct.length;
};