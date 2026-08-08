function trap(height: number[]): number {
    let total = 0;
    const n = height.length;
    const left = new Array(n), right = new Array(n);

    let highest = height[0];
    for (let i = 1; i < n - 1; i++) {
        left[i] = highest;
        if (height[i] >= highest) highest = height[i];
    }

    highest = height[n - 1];
    for (let i = n - 2; i > 0; i--) {
        right[i] = highest;
        if (height[i] >= highest) highest = height[i];
    }

    for (let i = 1; i < n - 1; i++) {
        total += Math.max(0, Math.min(left[i], right[i]) - height[i]);
    }

    return total;
};