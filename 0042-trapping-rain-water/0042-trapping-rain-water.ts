function trap(height: number[]): number {
    const sorted = [...height].sort((a, b) => b - a);
    let total = 0;
    const lowest = sorted[height.length - 1];
    const highest = sorted[1];
    for (let i = Math.max(lowest, 1); i <= highest; i++) {
        let lastBlockIndex = null;
        for (let j = 0; j < height.length; j++) {
            if (height[j] >= i) {
                if (lastBlockIndex !== null && j - lastBlockIndex > 1) {
                    total += Math.max(0, j - lastBlockIndex - 1)
                };
                lastBlockIndex = j;
            }
        }
    }
    return total;
};