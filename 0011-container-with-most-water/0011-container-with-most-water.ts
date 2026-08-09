function maxArea(height: number[]): number {
    let highest = 0;
    let i = 0, j = height.length - 1;
    while (i < j) {
        highest = Math.max(highest, Math.min(height[i], height[j]) * (j - i))
        if (height[i] <= height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return highest;
};